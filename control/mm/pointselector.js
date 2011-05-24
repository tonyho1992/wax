// Wax: Point Selector
// -----------------

// namespacing!
wax = wax || {};

wax.pointselector = function(map, opts) {
    var mouseDownPoint = null,
        mouseUpPoint = null,
        tolerance = 5,
        MM = com.modestmaps,
        locations = [];

    var callback = (typeof opts === 'function') ?
        opts :
        opts.callback;

    // Create a `com.modestmaps.Point` from a screen event, like a click.
    var makePoint = function(e) {
        var point = new MM.Point(e.clientX, e.clientY);
        // correct for scrolled document
        point.x += document.body.scrollLeft + document.documentElement.scrollLeft;
        point.y += document.body.scrollTop + document.documentElement.scrollTop;

        // and for the document
        point.x -= parseFloat(MM.getStyle(document.documentElement, 'margin-left'));
        point.y -= parseFloat(MM.getStyle(document.documentElement, 'margin-top'));

        // correct for nested offsets in DOM
        for (var node = map.parent; node; node = node.offsetParent) {
            point.x -= node.offsetLeft;
            point.y -= node.offsetTop;
        }
        return point;
    };

    var pointselector = {
        // Attach this control to a map by registering callbacks
        // and adding the overlay
        add: function(map) {
            this.overlayDiv = document.createElement('div');
            this.overlayDiv.id = map.parent.id + '-boxselector';
            this.overlayDiv.className = 'pointselector-box-container';
            this.overlayDiv.style.width = map.dimensions.x + 'px';
            this.overlayDiv.style.height = map.dimensions.y + 'px';
            map.parent.appendChild(this.overlayDiv);
            MM.addEvent(this.overlayDiv, 'mousedown', pointselector.mouseDown);
            map.addCallback('drawn', pointselector.drawPoints);
            return this;
        },
        deletePoint: function(location, e) {
            if (confirm('Delete this point?')) {
                location.pointDiv.parentNode.removeChild(location.pointDiv);
                locations.splice(wax.util.indexOf(locations, location), 1);
                callback(pointselector.cleanLocations(locations));
            }
        },
        drawPoints: function() {
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
                            MM.removeEvent(map.parent, 'mouseup', pointselector.mouseUp);
                            pointselector.deletePoint(l, e);
                        };
                    })());
                    this.overlayDiv.appendChild(locations[i].pointDiv);
                }
                locations[i].pointDiv.style.left = point.x + 'px';
                locations[i].pointDiv.style.top = point.y + 'px';
            }
        },
        mouseDown: function(e) {
            alert('mouseDown');
            mouseDownPoint = makePoint(e);
            MM.addEvent(map.parent, 'mouseup', pointselector.mouseUp);
        },
        addLocation: function(location) {
            locations.push(location);
            pointselector.drawPoints();
        },
        // Remove the awful circular reference from locations.
        // TODO: This function should be made unnecessary by not having it.
        cleanLocations: function(locations) {
            var o = [];
            for (var i = 0; i < locations.length; i++) {
                o.push(new MM.Location(locations[i].lat, locations[i].lon));
            }
            return o;
        },
        mouseUp: function(e) {
            if (!mouseDownPoint) return;
            mouseUpPoint = makePoint(e);
            if (MM.Point.distance(mouseDownPoint, mouseUpPoint) < tolerance) {
                pointselector.addLocation(map.pointLocation(mouseDownPoint));
                callback(pointselector.cleanLocations(locations));
            }
            mouseDownPoint = null;
            MM.removeEvent(map.parent, 'mouseup', pointselector.mouseUp);
        }
    };

    return pointselector.add(map);
};
