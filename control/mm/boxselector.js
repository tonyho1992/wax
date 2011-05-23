// Wax: Box Selector
// -----------------
wax = wax || {};

wax.boxselector = function(map, opts) {
    var mouseDownPoint = null;

    var callback = (typeof opts === 'function') ?
        opts :
        opts.callback;

    var boxselector = {
        add: function(map) {
            this.containerDiv = document.createElement('div');
            this.containerDiv.id = map.parent.id + '-zoombox';
            this.containerDiv.className = 'boxselector-box-container';
            this.containerDiv.style.width =  map.dimensions.x + 'px';
            this.containerDiv.style.height = map.dimensions.y + 'px';

            this.boxDiv = document.createElement('div');
            this.boxDiv.id = map.parent.id + '-boxselector-box';
            this.boxDiv.className = 'boxselector-box';
            this.containerDiv.appendChild(this.boxDiv);
            map.parent.appendChild(this.containerDiv);

            com.modestmaps.addEvent(this.containerDiv, 'mousedown', this.mouseDown());
            map.addCallback('drawn', this.drawbox());
        },
        remove: function() {
            this.containerDiv.parentNode.removeChild(this.containerDiv);
            map.removeCallback('mousedown', this.drawbox());
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
            return this._mouseDown = this._mouseDown || wax.util.bind(function(e) {
                if (e.shiftKey) {
                    mouseDownPoint = this.getMousePoint(e);

                    this.boxDiv.style.left = mouseDownPoint.x + 'px';
                    this.boxDiv.style.top = mouseDownPoint.y + 'px';

                    com.modestmaps.addEvent(map.parent, 'mousemove', this.mouseMove());
                    com.modestmaps.addEvent(map.parent, 'mouseup', this.mouseUp());

                    map.parent.style.cursor = 'crosshair';
                    return com.modestmaps.cancelEvent(e);
                }
            }, this);
        },
        mouseMove: function(e) {
            return this._mouseMove = this._mouseMove || wax.util.bind(function(e) {
                var point = this.getMousePoint(e);
                this.boxDiv.style.display = 'block';
                if (point.x < mouseDownPoint.x) {
                    this.boxDiv.style.left = point.x + 'px';
                } else {
                    this.boxDiv.style.left = mouseDownPoint.x + 'px';
                }
                this.boxDiv.style.width = Math.abs(point.x - mouseDownPoint.x) + 'px';
                if (point.y < mouseDownPoint.y) {
                    this.boxDiv.style.top = point.y + 'px';
                } else {
                    this.boxDiv.style.top = mouseDownPoint.y + 'px';
                }
                this.boxDiv.style.height = Math.abs(point.y - mouseDownPoint.y) + 'px';
                return com.modestmaps.cancelEvent(e);
            }, this);
        },
        mouseUp: function() {
            return this._mouseUp = this._mouseUp || wax.util.bind(function(e) {
                var point = boxselector.getMousePoint(e);

                var l1 = map.pointLocation(point),
                    l2 = map.pointLocation(mouseDownPoint);

                // Format coordinates like mm.map.getExtent().
                var extent = [
                    new com.modestmaps.Location(
                        Math.max(l1.lat, l2.lat),
                        Math.min(l1.lon, l2.lon)),
                    new com.modestmaps.Location(
                        Math.min(l1.lat, l2.lat),
                        Math.max(l1.lon, l2.lon))
                ];

                this.box = [l1, l2];
                callback(extent);

                com.modestmaps.removeEvent(map.parent, 'mousemove', this.mouseMove());
                com.modestmaps.removeEvent(map.parent, 'mouseup', this.mouseUp());

                map.parent.style.cursor = 'auto';

                return com.modestmaps.cancelEvent(e);
            }, this);
        },
        drawbox: function() {
            return this._drawbox = this._drawbox || wax.util.bind(function(map, e) {
                if (this.boxDiv) {
                    this.boxDiv.style.display = 'block';
                    this.boxDiv.style.height = 'auto';
                    this.boxDiv.style.width = 'auto';
                    var br = map.locationPoint(this.box[0]);
                    var tl = map.locationPoint(this.box[1]);
                    this.boxDiv.style.left = Math.max(0, tl.x) + 'px';
                    this.boxDiv.style.top = Math.max(0, tl.y) + 'px';
                    this.boxDiv.style.right = Math.max(0, map.dimensions.x - br.x) + 'px';
                    this.boxDiv.style.bottom = Math.max(0, map.dimensions.y - br.y) + 'px';
                }
            }, this);
        }
    };

    return boxselector.add(map);
};
