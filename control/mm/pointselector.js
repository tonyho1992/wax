// Wax: Point Selector
// -----------------

// namespacing!
wax = wax || {};

wax.pointselector = function(map, opts) {
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

        // correct for nested offsets in DOM
        for (var node = map.parent; node; node = node.offsetParent) {
            point.x -= node.offsetLeft;
            point.y -= node.offsetTop;
        }
        return point;
    };

    function cleanLocations(locations) {
        var o = [];
        for (var i = 0; i < locations.length; i++) {
            o.push(new MM.Location(locations[i].lat, locations[i].lon));
        }
        return o;
    };

    var pointselector = {
        // Attach this control to a map by registering callbacks
        // and adding the overlay
        add: function(map) {
            overlayDiv = document.createElement('div');
            overlayDiv.id = map.parent.id + '-boxselector';
            overlayDiv.className = 'pointselector-box-container';
            overlayDiv.innerHTML = '&nbsp;';
            overlayDiv.style.width = map.dimensions.x + 'px';
            overlayDiv.style.height = map.dimensions.y + 'px';

            map.parent.appendChild(overlayDiv);
            MM.addEvent(overlayDiv, 'mousedown', this.mouseDown());
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
        drawPoints: function() {
            return this._drawPoints = this._drawPoints || wax.util.bind(function() {
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
                        MM.addEvent(locations[i].pointDiv, 'mouseup', (function selectPointWrap(e) {
                            var l = locations[i];
                            return function(e) {
                                MM.removeEvent(map.parent, 'mouseup', pointselector.mouseUp());
                                pointselector.deletePoint(l, e);
                            };
                        })());
                        overlayDiv.appendChild(locations[i].pointDiv);
                    }
                    locations[i].pointDiv.style.left = point.x + 'px';
                    locations[i].pointDiv.style.top = point.y + 'px';
                }
            }, this);
        },
        mouseDown: function() {
            return this._mouseDown = this._mouseDown || wax.util.bind(function(e) {
                mouseDownPoint = makePoint(e);
                MM.addEvent(map.parent, 'mouseup', this.mouseUp());
            }, this);
        },
        addLocation: function(location) {
            locations.push(location);
            pointselector.drawPoints()();
        },
        // Remove the awful circular reference from locations.
        // TODO: This function should be made unnecessary by not having it.
        mouseUp: function() {
            return this._mouseUp = this._mouseUp || wax.util.bind(function(e) {
                if (!mouseDownPoint) return;
                mouseUpPoint = makePoint(e);
                if (MM.Point.distance(mouseDownPoint, mouseUpPoint) < tolerance) {
                    this.addLocation(map.pointLocation(mouseDownPoint));
                    callback(cleanLocations(locations));
                }
                mouseDownPoint = null;
                MM.removeEvent(map.parent, 'mouseup', pointselector.mouseUp());
            }, this);
        }
    };

    return pointselector.add(map);
};
