// Wax: ZoomBox
// -----------------
// An OL-style ZoomBox control, from the Modest Maps example.

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

com.modestmaps.Map.prototype.zoombox = function(opts) {
    var boxDiv = document.createElement('div');
    boxDiv.id = this.parent.id + '-zoombox';
    boxDiv.className = 'zoombox-box-container';
    boxDiv.style.width =  this.dimensions.x + 'px';
    boxDiv.style.height = this.dimensions.y + 'px';
    this.parent.appendChild(boxDiv);

    var box = document.createElement('div');
    box.id = this.parent.id + '-zoombox-box';
    box.className = 'zoombox-box';
    boxDiv.appendChild(box);

    // TODO: respond to resize
    var mouseDownPoint = null;
    var map = this;

    var zoombox = {
        map: this,
        getMousePoint: function(e) {
            // start with just the mouse (x, y)
            var point = new com.modestmaps.Point(e.clientX, e.clientY);
            // correct for scrolled document
            point.x += document.body.scrollLeft + document.documentElement.scrollLeft;
            point.y += document.body.scrollTop + document.documentElement.scrollTop;

            // correct for nested offsets in DOM
            for (var node = this.map.parent; node; node = node.offsetParent) {
                point.x -= node.offsetLeft;
                point.y -= node.offsetTop;
            }
            return point;
        },
        mouseDown: function(e) {
            if (e.shiftKey) {
                mouseDownPoint = zoombox.getMousePoint(e);

                box.style.left = mouseDownPoint.x + 'px';
                box.style.top = mouseDownPoint.y + 'px';

                com.modestmaps.addEvent(map.parent, 'mousemove', zoombox.mouseMove);
                com.modestmaps.addEvent(map.parent, 'mouseup', zoombox.mouseUp);

                map.parent.style.cursor = 'crosshair';
                return com.modestmaps.cancelEvent(e);
            }
        },
        mouseMove: function(e) {
            var point = zoombox.getMousePoint(e);
            box.style.display = 'block';
            if (point.x < mouseDownPoint.x) {
                box.style.left = point.x + 'px';
            } else {
                box.style.left = mouseDownPoint.x + 'px';
            }
            box.style.width = Math.abs(point.x - mouseDownPoint.x) + 'px';
            if (point.y < mouseDownPoint.y) {
                box.style.top = point.y + 'px';
            } else {
                box.style.top = mouseDownPoint.y + 'px';
            }
            box.style.height = Math.abs(point.y - mouseDownPoint.y) + 'px';
            return com.modestmaps.cancelEvent(e);
        },
        mouseUp: function(e) {
            var point = zoombox.getMousePoint(e);

            var l1 = map.pointLocation(point),
                l2 = map.pointLocation(mouseDownPoint);

            map.setExtent([l1, l2]);

            box.style.display = 'none';
            com.modestmaps.removeEvent(map.parent, 'mousemove', zoombox.mouseMove);
            com.modestmaps.removeEvent(map.parent, 'mouseup', zoombox.mouseUp);

            map.parent.style.cursor = 'auto';

            return com.modestmaps.cancelEvent(e);
        }
    };

    com.modestmaps.addEvent(boxDiv, 'mousedown', zoombox.mouseDown);
    return this;
};
