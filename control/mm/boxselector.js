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

com.modestmaps.Map.prototype.boxselector = function(opts) {
    var boxDiv = document.createElement('div');
    boxDiv.id = this.parent.id + '-boxselector';
    boxDiv.className = 'boxselector-box-container';
    boxDiv.style.width =  this.dimensions.x + 'px';
    boxDiv.style.height = this.dimensions.y + 'px';
    this.parent.appendChild(boxDiv);

    var box = document.createElement('div');
    box.id = this.parent.id + '-boxselector-box';
    box.className = 'boxselector-box';
    boxDiv.appendChild(box);

    var mouseDownPoint = null;
    var map = this;

    if (typeof opts === 'function') {
        var callback = opts;
    } else {
        var callback = opts.callback;
    }

    var boxselector = this.boxselector;
    this.boxselector.getMousePoint = function(e) {
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
    };

    this.boxselector.mouseDown = function(e) {
            if (e.shiftKey) {
                mouseDownPoint = boxselector.getMousePoint(e);

                box.style.left = mouseDownPoint.x + 'px';
                box.style.top = mouseDownPoint.y + 'px';
                box.style.height = 'auto';
                box.style.width = 'auto';

                com.modestmaps.addEvent(map.parent, 'mousemove', boxselector.mouseMove);
                com.modestmaps.addEvent(map.parent, 'mouseup', boxselector.mouseUp);

                map.parent.style.cursor = 'crosshair';
                return com.modestmaps.cancelEvent(e);
            }
    };

    this.boxselector.mouseMove = function(e) {
        var point = boxselector.getMousePoint(e);
        box.style.display = 'block';
        if (point.x < mouseDownPoint.x) {
            box.style.left = point.x + 'px';
            box.style.right = (map.dimensions.x - mouseDownPoint.x) + 'px';
        } else {
            box.style.left = mouseDownPoint.x + 'px';
            box.style.right = (map.dimensions.x - point.x) + 'px';
        }
        if (point.y < mouseDownPoint.y) {
            box.style.top = point.y + 'px';
        } else {
            box.style.bottom = (map.dimensions.y - point.y) + 'px';
        }
        return com.modestmaps.cancelEvent(e);
    };

    this.boxselector.mouseUp = function(e) {
        var point = boxselector.getMousePoint(e);

        var l1 = map.pointLocation(point),
            l2 = map.pointLocation(mouseDownPoint);

        // Format coordinates like mm.map.getExtent().
        var extent = [];
        extent.push(new com.modestmaps.Location(
            Math.max(l1.lat, l2.lat),
            Math.min(l1.lon, l2.lon)));
        extent.push(new com.modestmaps.Location(
            Math.min(l1.lat, l2.lat),
            Math.max(l1.lon, l2.lon)));

        boxselector.box = [l1, l2];
        callback(extent);

        com.modestmaps.removeEvent(map.parent, 'mousemove', boxselector.mouseMove);
        com.modestmaps.removeEvent(map.parent, 'mouseup', boxselector.mouseUp);

        map.parent.style.cursor = 'auto';

        return com.modestmaps.cancelEvent(e);
    };

    com.modestmaps.addEvent(boxDiv, 'mousedown', boxselector.mouseDown);

    var drawbox =  function(map, e) {
        if (map.boxselector.box) {
            var br = map.locationPoint(map.boxselector.box[0]);
            var tl = map.locationPoint(map.boxselector.box[1]);
            box.style.left = Math.max(0, tl.x) + 'px';
            box.style.top =  Math.max(0, tl.y) + 'px';
            box.style.right = Math.max(0, map.dimensions.x - br.x) + 'px';
            box.style.bottom = Math.max(0, map.dimensions.y - br.y) + 'px';
        }
    };

    this.addCallback('drawn', drawbox);

    this.boxselector.remove = function() {
        boxDiv.parentNode.removeChild(boxDiv);
        map.removeCallback('mousedown', drawbox);
        delete box;
    }

    return this;
};
