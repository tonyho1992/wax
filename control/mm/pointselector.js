wax = wax || {};
wax.mm = wax.mm || {};

// Point Selector
// --------------
//
// This takes an object of options:
//
// * `callback`: a function called with an array of `com.modestmaps.Location`
//   objects when the map is edited
//
// It also exposes a public API function: `addLocation`, which adds a point
// to the map as if added by the user.
wax.mm.pointselector = function(map, opts) {
    var mouseDownPoint = null,
        mouseUpPoint = null,
        tolerance = 5,
        overlayDiv,
        MM = com.modestmaps,
        locations = [];

    var callback = (typeof opts === 'function') ?
        opts :
        opts.callback;

    // Create a `com.modestmaps.Point` from a screen event, like a click.
    var makePoint = function(e) {
        var coords = wax.util.eventoffset(e);
        var point = new MM.Point(coords.x, coords.y);
        // correct for scrolled document

        // and for the document
        var body = {
            x: parseFloat(MM.getStyle(document.documentElement, 'margin-left')),
            y: parseFloat(MM.getStyle(document.documentElement, 'margin-top'))
        };

        if (!isNaN(body.x)) point.x -= body.x;
        if (!isNaN(body.y)) point.y -= body.y;

        // TODO: use wax.util.offset
        // correct for nested offsets in DOM
        for (var node = map.parent; node; node = node.offsetParent) {
            point.x -= node.offsetLeft;
            point.y -= node.offsetTop;
        }
        return point;
    };

    // Currently locations in this control contain circular references to elements.
    // These can't be JSON encoded, so here's a utility to clean the data that's
    // spit back.
    function cleanLocations(locations) {
        var o = [];
        for (var i = 0; i < locations.length; i++) {
            o.push(new MM.Location(locations[i].lat, locations[i].lon));
        }
        return o;
    }

    var pointselector = {
        // Attach this control to a map by registering callbacks
        // and adding the overlay
        add: function(map) {
            MM.addEvent(map.parent, 'mousedown', this.mouseDown());
            map.addCallback('drawn', pointselector.drawPoints());
            return this;
        },
        deletePoint: function(location, e) {
            if (confirm('Delete this point?')) {
                location.pointDiv.parentNode.removeChild(location.pointDiv);
                locations.splice(wax.util.indexOf(locations, location), 1);
                callback(cleanLocations(locations));
            }
        },
        // Redraw the points when the map is moved, so that they stay in the
        // correct geographic locations.
        drawPoints: function() {
            if (!this._drawPoints) this._drawPoints = wax.util.bind(function() {
                var offset = new MM.Point(0, 0);
                for (var i = 0; i < locations.length; i++) {
                    var point = map.locationPoint(locations[i]);
                    if (!locations[i].pointDiv) {
                        locations[i].pointDiv = document.createElement('div');
                        locations[i].pointDiv.className = 'wax-point-div';
                        locations[i].pointDiv.style.position = 'absolute';
                        locations[i].pointDiv.style.display = 'block';
                        // TODO: avoid circular reference
                        locations[i].pointDiv.location = locations[i];
                        // Create this closure once per point
                        MM.addEvent(locations[i].pointDiv, 'mouseup',
                            (function selectPointWrap(e) {
                            var l = locations[i];
                            return function(e) {
                                MM.removeEvent(map.parent, 'mouseup', pointselector.mouseUp());
                                pointselector.deletePoint(l, e);
                            };
                        })());
                        map.parent.appendChild(locations[i].pointDiv);
                    }
                    locations[i].pointDiv.style.left = point.x + 'px';
                    locations[i].pointDiv.style.top = point.y + 'px';
                }
            }, this);
            return this._drawPoints;
        },
        mouseDown: function() {
            if (!this._mouseDown) this._mouseDown = wax.util.bind(function(e) {
                mouseDownPoint = makePoint(e);
                MM.addEvent(map.parent, 'mouseup', this.mouseUp());
            }, this);
            return this._mouseDown;
        },
        // API for programmatically adding points to the map - this
        // calls the callback for ever point added, so it can be symmetrical.
        // Useful for initializing the map when it's a part of a form.
        addLocation: function(location) {
            locations.push(location);
            pointselector.drawPoints()();
            callback(cleanLocations(locations));
        },
        // Remove the awful circular reference from locations.
        // TODO: This function should be made unnecessary by not having it.
        mouseUp: function() {
            if (!this._mouseUp) this._mouseUp = wax.util.bind(function(e) {
                if (!mouseDownPoint) return;
                mouseUpPoint = makePoint(e);
                if (MM.Point.distance(mouseDownPoint, mouseUpPoint) < tolerance) {
                    this.addLocation(map.pointLocation(mouseDownPoint));
                    callback(cleanLocations(locations));
                }
                mouseDownPoint = null;
            }, this);
            return this._mouseUp;
        }
    };

    return pointselector.add(map);
};
