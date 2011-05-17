// Wax: Geocoder
// -------------

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

com.modestmaps.Map.prototype.geocoder = function(opts) {
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
        }
    };
    MM.addEvent(overlayDiv, 'mousedown', pointselector.mouseDown);
    map.addCallback('drawn', pointselector.drawPoints);
    return this;
};
