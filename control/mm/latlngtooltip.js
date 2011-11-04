wax = wax || {};
wax.mm = wax.mm || {};

// LatLng
// ------
// Show the current cursor position in
// lat/long
wax.mm.latlngtooltip = function(map) {
    var mm = com.modestmaps,
        tt, // tooltip
        latlng = {};

    function getMousePoint(e) {
        // start with just the mouse (x, y)
        var point = new mm.Point(e.clientX, e.clientY);
        // correct for scrolled document
        point.x += document.body.scrollLeft + document.documentElement.scrollLeft;
        point.y += document.body.scrollTop + document.documentElement.scrollTop;

        // correct for nested offsets in DOM
        for (var node = map.parent; node; node = node.offsetParent) {
            point.x -= node.offsetLeft;
            point.y -= node.offsetTop;
        }
        return point;
    }

    function onMove(e) {
        if (!e.shiftKey) {
            if (tt.parentNode === map.parent) {
                map.parent.removeChild(tt);
            }
            return;
        }

        var pt = getMousePoint(e),
            ll = map.pointLocation(pt),
            fmt = ll.lat.toFixed(2) + ', ' + ll.lon.toFixed(2);

        tt.innerHTML = fmt;
        pt.scale = pt.width = pt.height = 1;
        pt.x += 10;
        mm.moveElement(tt, pt);
        map.parent.appendChild(tt);
    }

    latlng.add = function() {
        mm.addEvent(map.parent, 'mousemove', onMove);
        tt = document.createElement('div');
        tt.className = 'wax-latlngtooltip';
        return this;
    };

    latlng.remove = function() {
        mm.removeEvent(map.parent, 'mousemove', onMove);
        return this;
    };

    return latlng.add();
};
