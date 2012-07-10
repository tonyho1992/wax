wax = wax || {};
wax.mm = wax.mm || {};

wax.mm.zoomer = function(map) {
    var zoomer = {},
        zoomin = document.createElement('a');

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

    zoomer.add = function(map) {
        map.addCallback('drawn', function(map, e) {
            if (map.coordinate.zoom === map.coordLimits[0].zoom) {
                zoomout.className = 'zoomer zoomout zoomdisabled';
            } else if (map.coordinate.zoom === map.coordLimits[1].zoom) {
                zoomin.className = 'zoomer zoomin zoomdisabled';
            } else {
                zoomin.className = 'zoomer zoomin';
                zoomout.className = 'zoomer zoomout';
            }
        });
        return zoomer;
    };

    zoomer.appendTo = function(elem) {
        wax.u.$(elem).appendChild(zoomin);
        wax.u.$(elem).appendChild(zoomout);
        return zoomer;
    };

    return zoomer.add(map);
};
