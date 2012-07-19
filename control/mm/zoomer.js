wax = wax || {};
wax.mm = wax.mm || {};

wax.mm.zoomer = function() {
    var zoomer = {},
        map;

    var zoomin = document.createElement('a');
    zoomin.innerHTML = '+';
    zoomin.href = '#';
    zoomin.className = 'zoomer zoomin';
    bean.add(zoomin, 'mousedown dblclick', function(e) {
        e.stop();
    });
    bean.add(zoomin, 'touchstart click', function(e) {
        e.stop();
        map.zoomIn();
    }, false);

    var zoomout = document.createElement('a');
    zoomout.innerHTML = '-';
    zoomout.href = '#';
    zoomout.className = 'zoomer zoomout';
    bean.add(zoomout, 'mousedown dblclick', function(e) {
        e.stop();
    });
    bean.add(zoomout, 'touchstart click', function(e) {
        e.stop();
        map.zoomOut();
    });

    function updateButtons(map, e) {
        if (map.coordinate.zoom === map.coordLimits[0].zoom) {
            zoomout.className = 'zoomer zoomout zoomdisabled';
        } else if (map.coordinate.zoom === map.coordLimits[1].zoom) {
            zoomin.className = 'zoomer zoomin zoomdisabled';
        } else {
            zoomin.className = 'zoomer zoomin';
            zoomout.className = 'zoomer zoomout';
        }
    }

    zoomer.map = function(x) {
        if (!arguments.length) return map;
        map = x;
        return zoomer;
    };

    zoomer.add = function() {
        map.addCallback('drawn', updateButtons);
        return zoomer;
    };

    zoomer.remove = function() {
        map.removeCallback('drawn', updateButtons);
        return zoomer;
    };

    zoomer.appendTo = function(elem) {
        wax.u.$(elem).appendChild(zoomin);
        wax.u.$(elem).appendChild(zoomout);
        return zoomer;
    };

    return zoomer;
};
