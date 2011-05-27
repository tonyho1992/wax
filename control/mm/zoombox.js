// Wax: ZoomBox
// -----------------
// An OL-style ZoomBox control, from the Modest Maps example.

wax = wax || {};

wax.zoombox = function(map, opts) {
    // TODO: respond to resize
    var mouseDownPoint = null;

    var zoombox = {
        add: function(map) {
            this.box = document.createElement('div');
            this.box.id = map.parent.id + '-zoombox-box';
            this.box.className = 'zoombox-box';
            map.parent.appendChild(this.box);
            com.modestmaps.addEvent(map.parent, 'mousedown', this.mouseDown());
        },
        remove: function() {
            map.parent.removeChild(this.box);
            map.removeCallback('mousedown', this.mouseDown);
        },
        getMousePoint: function(e) {
            // start with just the mouse (x, y)
            var point = new com.modestmaps.Point(e.clientX, e.clientY);
            // correct for scrolled document
            point.x += document.body.scrollLeft + document.documentElement.scrollLeft;
            point.y += document.body.scrollTop + document.documentElement.scrollTop;

            // correct for nested offsets in DOM
            for (var node = map.parent; node; node = node.offsetParent) {
                point.x -= node.offsetLeft;
                point.y -= node.offsetTop;
            }
            return point;
        },
        mouseDown: function() {
            if (!this._mouseDown) this._mouseDown = wax.util.bind(function(e) {
                if (e.shiftKey) {
                    mouseDownPoint = this.getMousePoint(e);

                    this.box.style.left = mouseDownPoint.x + 'px';
                    this.box.style.top = mouseDownPoint.y + 'px';

                    com.modestmaps.addEvent(map.parent, 'mousemove', this.mouseMove());
                    com.modestmaps.addEvent(map.parent, 'mouseup', this.mouseUp());

                    map.parent.style.cursor = 'crosshair';
                    return com.modestmaps.cancelEvent(e);
                }
            }, this);
            return this._mouseDown;
        },
        mouseMove: function(e) {
            if (!this._mouseMove) this._mouseMove = wax.util.bind(function(e) {
                var point = this.getMousePoint(e);
                this.box.style.display = 'block';
                if (point.x < mouseDownPoint.x) {
                    this.box.style.left = point.x + 'px';
                } else {
                    this.box.style.left = mouseDownPoint.x + 'px';
                }
                this.box.style.width = Math.abs(point.x - mouseDownPoint.x) + 'px';
                if (point.y < mouseDownPoint.y) {
                    this.box.style.top = point.y + 'px';
                } else {
                    this.box.style.top = mouseDownPoint.y + 'px';
                }
                this.box.style.height = Math.abs(point.y - mouseDownPoint.y) + 'px';
                return com.modestmaps.cancelEvent(e);
            }, this);
            return this._mouseMove;
        },
        mouseUp: function(e) {
            if (!this._mouseUp) this._mouseUp = wax.util.bind(function(e) {
                var point = this.getMousePoint(e);

                var l1 = map.pointLocation(point),
                    l2 = map.pointLocation(mouseDownPoint);

                map.setExtent([l1, l2]);

                this.box.style.display = 'none';
                com.modestmaps.removeEvent(map.parent, 'mousemove', this.mouseMove());
                com.modestmaps.removeEvent(map.parent, 'mouseup', this.mouseUp());

                map.parent.style.cursor = 'auto';
            }, this);
            return this._mouseUp;
        }
    };

    return zoombox.add(map);
};
