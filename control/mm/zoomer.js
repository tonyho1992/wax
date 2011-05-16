// Wax: Zoom Control
// -----------------

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

// Add zoom links, which can be styled as buttons, to a `modestmaps.Map`
// control. This function can be used chaining-style with other
// chaining-style controls.
com.modestmaps.Map.prototype.zoomer = function() {
    var map = this;
    var zoomin = document.createElement('a');
    zoomin.innerText = '+';
    zoomin.href = '#';
    zoomin.className = 'zoomer zoomin';
    zoomin.addEventListener('click', function(e) {
        com.modestmaps.cancelEvent(e);
        map.zoomIn();
    }, false);
    this.parent.appendChild(zoomin);

    var zoomout = document.createElement('a');
    zoomout.innerText = '-';
    zoomout.href = '#';
    zoomout.className = 'zoomer zoomout';
    zoomout.addEventListener('click', function(e) {
        com.modestmaps.cancelEvent(e);
        map.zoomOut();
    }, this);
    this.parent.appendChild(zoomout);

    this.addCallback('drawn', function(map, e) {
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
};
