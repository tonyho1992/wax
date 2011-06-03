wax = wax || {};
wax.mm = wax.mm || {};

// Zoomer
// ------
// Add zoom links, which can be styled as buttons, to a `modestmaps.Map`
// control. This function can be used chaining-style with other
// chaining-style controls.
wax.mm.zoomer = function(map) {
    var zoomin = document.createElement('a');
    zoomin.innerHTML = '+';
    zoomin.href = '#';
    zoomin.className = 'zoomer zoomin';
    com.modestmaps.addEvent(zoomin, 'click', function(e) {
        com.modestmaps.cancelEvent(e);
        map.zoomIn();
    }, false);
    map.parent.appendChild(zoomin);

    var zoomout = document.createElement('a');
    zoomout.innerHTML = '-';
    zoomout.href = '#';
    zoomout.className = 'zoomer zoomout';
    com.modestmaps.addEvent(zoomout, 'click', function(e) {
        com.modestmaps.cancelEvent(e);
        map.zoomOut();
    }, false);
    map.parent.appendChild(zoomout);

    var zoomer = {
        add: function(map) {
            map.addCallback('drawn', function(map, e) {
                if (map.coordinate.zoom === map.provider.outerLimits()[0].zoom) {
                    zoomout.className = 'zoomer zoomout zoomdisabled';
                } else if (map.coordinate.zoom === map.provider.outerLimits()[1].zoom) {
                    zoomin.className = 'zoomer zoomin zoomdisabled';
                } else {
                    zoomin.className = 'zoomer zoomin';
                    zoomout.className = 'zoomer zoomout';
                }
            });
            return this;
        }
    };
    return zoomer.add(map);
};
