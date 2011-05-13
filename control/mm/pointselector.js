// Wax: Point Selector
// -----------------

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

com.modestmaps.Map.prototype.pointselector = function(opts) {
    var mouseDownPoint = null,
        mouseUpPoint = null,
        map = this,
        tolerance = 5,
        MM = com.modestmaps,
        locations = [];

    var callback = (typeof opts === 'function') ?
        opts :
        opts.callback;


    var overlayDiv = document.createElement('div');
    overlayDiv.id = this.parent.id + '-boxselector';
    overlayDiv.className = 'pointselector-box-container';
    overlayDiv.style.width = this.dimensions.x + 'px';
    overlayDiv.style.height = this.dimensions.y + 'px';
    this.parent.appendChild(overlayDiv);

    var makePoint = function(e) {
        var point = new MM.Point(e.clientX, e.clientY);
        // correct for scrolled document
        point.x += document.body.scrollLeft + document.documentElement.scrollLeft;
        point.y += document.body.scrollTop + document.documentElement.scrollTop;

        // correct for nested offsets in DOM
        for (var node = map.parent; node; node = node.offsetParent) {
            point.x -= node.offsetLeft;
            point.y -= node.offsetTop;
        }
        return point;
    };

    var pointselector = {
        deletePoint: function(location, e) {
            if (confirm('Delete this point?')) {
                // TODO: indexOf not supported in IE
                location.pointDiv.parentNode.removeChild(location.pointDiv);
                locations.splice(locations.indexOf(location), 1);
                callback(locations);
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
                    locations[i].pointDiv.location = locations[i];
                    // Create this closure once per point
                    MM.addEvent(locations[i].pointDiv, 'mouseup', (function selectPointWrap(e) {
                        var l = locations[i];
                        return function(e) {
                            MM.cancelEvent(e);
                            pointselector.deletePoint(l, e);
                        };
                    })());
                    overlayDiv.appendChild(locations[i].pointDiv);
                }
                locations[i].pointDiv.style.left = point.x + 'px';
                locations[i].pointDiv.style.top = point.y + 'px';
            }
        },
        mouseDown: function(e) {
            mouseDownPoint = makePoint(e);
            MM.addEvent(map.parent, 'mouseup', pointselector.mouseUp);
        },
        mouseUp: function(e) {
            if (!mouseDownPoint) return;
            mouseUpPoint = makePoint(e);
            if (MM.Point.distance(mouseDownPoint, mouseUpPoint) < tolerance) {
                locations.push(map.pointLocation(mouseDownPoint));
                callback(locations);
                pointselector.drawPoints();
            }
            mouseDownPoint = null;
            MM.removeEvent(map.parent, 'mouseup', pointselector.mouseUp);
        }
    };
    MM.addEvent(overlayDiv, 'mousedown', pointselector.mouseDown);
    map.addCallback('drawn', pointselector.drawPoints);
    return this;
};
