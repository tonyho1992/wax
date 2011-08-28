wax = wax || {};
wax.mm = wax.mm || {};

wax.mm.markers = function(map, tilejson, options) {
    options = options || {};
    tilejson = tilejson || {};

    var MM = com.modestmaps,
        markers = {},
        gm = wax.GridManager(tilejson),
        fm = wax.FeatureManager(tilejson),
        layer = null,
        tiles = [];

    function createLayer() {
        var id = map.parent.id + '-markers'
        if (!layer) layer = document.getElementById(id);
        if (!layer) {
            layer = document.createElement('div');
            layer.id = id;
            layer.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%; margin:0; padding:0; z-index:0';
            map.parent.appendChild(layer);
        }
    }
    
    function stopBubbling(e) {
        e.stopPropagation();
    }

    function addMarker(feature, id) {
        var o = gm.formatter().format({ format: 'marker', zoom: map.coordinate.zoom }, feature.data, id);
        if (typeof o === 'object' && 'lon' in o && 'lat' in o && o.html) {
            if (!o.align) o.align = 'center center';
            var align = o.align.split(' '), cls = [];
            if (o['class']) cls.push(o['class']);
            if (align[0]) cls.push('wax-marker-align-' + align[0]);
            if (align[1]) cls.push('wax-marker-align-' + align[1]);

            feature.location = new MM.Location(o.lat, o.lon);
            var m = feature.marker = document.createElement('div');
            m.id = map.parent.id + '-marker-' + id;
            m.style.cssText = 'position:absolute;';
            m.onmousedown = stopBubbling;
            var c = document.createElement('div');
            c.style.cssText = 'position:absolute;';
            c.innerHTML = o['html'];
            c.className = cls.join(' ');
            m.appendChild(c);
            layer.appendChild(m);
            

            if (align[0] == 'left' || align[0] == 'right') c.style[align[0]] = 0;
            else c.style.left = -(c.offsetWidth / 2) + 'px';
            if (align[1] == 'top' || align[1] == 'bottom') c.style[align[1] == 'top' ? 'bottom' : 'top'] = 0;
            else c.style.top = -(c.offsetHeight / 2) + 'px';

            moveMarker(feature);
        }
    }

    function removeMarker(feature, id) {
        var el = document.getElementById(map.parent.id + '-marker-' + id);
        if (el && el.parentNode) el.parentNode.removeChild(el);
    }

    function reinitializeMarkers() {
        for (var id in fm.features) {
            removeMarker(fm.features[id], id);
            addMarker(fm.features[id], id);
        }
    }

    function moveMarkers() {
        for (var id in fm.features) {
            moveMarker(fm.features[id]);
        }
    }

    function moveMarker(feature) {
        var m = feature.marker;
        if (m) {
            var point = map.locationPoint(feature.location);
            m.style.left = point.x + 'px';
            m.style.top = point.y + 'px';
        }
    }

    function requestGrid(coord) {
        var key = coord.toKey();
        gm.getGrid(map.provider.getTileUrl(coord), function(err, grid) {
            if (err) throw err; // DEBUG
            fm.add(key, grid);
        });
    }

    function updateTiles() {
        var validTiles = [];
        try {
            var coordinate = map.enforceLimits(map.coordinate);
            var baseZoom = Math.round(coordinate.zoom);
            var start = map.pointCoordinate(new MM.Point(0,0)).zoomTo(baseZoom).container();
            var end = map.pointCoordinate(map.dimensions).zoomTo(baseZoom).container().right().down();
            var coord = start.copy();

            layer.className = 'wax-zoom-' + baseZoom;

            for (coord.column = start.column; coord.column <= end.column; coord.column++) {
                for (coord.row = start.row; coord.row <= end.row; coord.row++) {
                    var key = coord.toKey();
                    validTiles.push(key);
                    if (tiles.indexOf(key) < 0) requestGrid(coord);
                }
            }

            // Remove tiles that are now invisible.
            for (var i = 0; i < tiles.length; i++) {
                if (validTiles.indexOf(tiles[i]) < 0) {
                    fm.remove(tiles[i]);
                }
            }
            tiles = validTiles;
        } catch(err) {
            console.warn(err.stack);
        }
    }

    // Attach listeners to the map
    markers.add = function() {
        createLayer();
        var l = ['zoomed', 'panned', 'centered', 'extentset', 'resized'];
        for (var i = 0; i < l.length; i++) map.addCallback(l[i], updateTiles);
        map.addCallback('zoomed', reinitializeMarkers);
        map.addCallback('drawn', moveMarkers);
        fm.addCallback('added', addMarker);
        fm.addCallback('removed', removeMarker);
        updateTiles();
        return this;
    };

    // Remove this control from the map.
    markers.remove = function() {
        var l = ['zoomed', 'panned', 'centered', 'extentset', 'resized'];
        for (var i = 0; i < l.length; i++) map.removeCallback(l[i], updateTiles);
        map.removeCallback('zoomed', reinitializeMarkers);
        map.removeCallback('drawn', moveMakers);
        fm.removeCallback('added', addMarker);
        fm.removeCallback('removed', removeMarker);
        return this;
    };

    // Ensure chainability
    return markers.add();
};
