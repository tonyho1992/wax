wax = wax || {};
wax.g = wax.g || {};

// A control that adds interaction to a google Map object.
//
// Takes an options object with the following keys:
//
// * `callbacks` (optional): an `out`, `over`, and `click` callback.
//   If not given, the `wax.tooltip` library will be expected.
// * `clickAction` (optional): **full** or **location**: default is
//   **full**.
wax.g.interaction = function(map, tilejson, options) {
    tilejson = tilejson || {};
    options = options || {};
    // Our GridManager (from `gridutil.js`). This will keep the
    // cache of grid information and provide friendly utility methods
    // that return `GridTile` objects instead of raw data.
    var waxGM = new wax.GridManager(tilejson),
        callbacks = options.callbacks || new wax.tooltip(),
        clickAction = options.clickAction || 'full';

    // Attach listeners to the map
    function add() {
        eventHandlers.tileloaded = google.maps.event.addListener(map, 'tileloaded',
            clearTileGrid);

        eventHandlers.idle = google.maps.event.addListener(map, 'idle',
            clearTileGrid);

        eventHandlers.mousemove = google.maps.event.addListener(map, 'mousemove',
            this.onMove());

        eventHandlers.click = google.maps.event.addListener(map, 'click',
            this.click());

        return this;
    }

    // Remove interaction events from the map.
    function remove() {
        google.maps.event.removeListener(eventHandlers.tileloaded);
        google.maps.event.removeListener(eventHandlers.idle);
        google.maps.event.removeListener(eventHandlers.mousemove);
        google.maps.event.removeListener(eventHandlers.click);
        return this;
    }

    // Search through `.tiles` and determine the position,
    // from the top-left of the **document**, and cache that data
    // so that `mousemove` events don't always recalculate.
    function getTileGrid() {
        // Get all 'marked' tiles, added by the `wax.g.MapType` layer.
        // Return an array of objects which have the **relative** offset of
        // each tile, with a reference to the tile object in `tile`, since the API
        // returns evt coordinates as relative to the map object.
        if (!this._getTileGrid) {
            this._getTileGrid = [];
            var zoom = map.getZoom();
            var mapOffset = wax.util.offset(map.getDiv());
            var get = function(mapType) {
                if (!mapType.interactive) return;
                for (var key in mapType.cache) {
                    if (key.split('/')[0] != zoom) continue;
                    var tileOffset = wax.util.offset(mapType.cache[key]);
                    this._getTileGrid.push([
                        tileOffset.top - mapOffset.top,
                        tileOffset.left - mapOffset.left,
                        mapType.cache[key]
                    ]);
                }
            };
            // Iterate over base mapTypes and overlayMapTypes.
            for (var i in map.mapTypes) get(map.mapTypes[i]);
            map.overlayMapTypes.forEach(get);
        }
        return _getTileGrid;
    }

    function clearTileGrid(map, e) {
        _getTileGrid = null;
    }

    function getTile(evt) {
        var tile;
        var grid = getTileGrid();
        for (var i = 0; i < grid.length; i++) {
            if ((grid[i][0] < evt.pixel.y) &&
                ((grid[i][0] + 256) > evt.pixel.y) &&
                (grid[i][1] < evt.pixel.x) &&
                ((grid[i][1] + 256) > evt.pixel.x)) {
                tile = grid[i][2];
                break;
            }
        }
        return tile || false;
    }

    function onMove(evt) {
        if (!this._onMove) this._onMove = wax.util.bind(function(evt) {
            var tile = this.getTile(evt);
            if (tile) {
                this.waxGM.getGrid(tile.src, wax.util.bind(function(err, g) {
                    if (err || !g) return;
                    var feature = g.tileFeature(
                        evt.pixel.x + wax.util.offset(map.getDiv()).left,
                        evt.pixel.y + wax.util.offset(map.getDiv()).top,
                        tile,
                        { format: 'teaser' }
                    );
                    // Support only a single layer.
                    // Thus a layer index of **0** is given to the tooltip library
                    if (feature && this.feature !== feature) {
                        this.feature = feature;
                        this.callbacks.out(map.getDiv());
                        this.callbacks.over(feature, map.getDiv(), 0, evt);
                    } else if (!feature) {
                        this.feature = null;
                        this.callbacks.out(map.getDiv());
                    }
                }, this));
            }
        }, this);
        return _onMove;
    }

    function click(evt) {
        if (!_onClick) _onClick = wax.util.bind(function(evt) {
            var tile = getTile(evt);
            if (tile) {
                waxGM.getGrid(tile.src, wax.util.bind(function(err, g) {
                    if (err || !g) return;
                    var feature = g.tileFeature(
                        evt.pixel.x + wax.util.offset(map.getDiv()).left,
                        evt.pixel.y + wax.util.offset(map.getDiv()).top,
                        tile,
                        { format: clickAction }
                    );
                    if (feature) {
                        switch (clickAction) {
                            case 'full':
                                callbacks.click(feature, map.getDiv(), 0, evt);
                                break;
                            case 'location':
                                window.location = feature;
                                break;
                        }
                    }
                }, this));
            }
        }, this);
        return this._onClick;
    }

    // Return the interaction control such that the caller may manipulate it
    // e.g. remove it.
    return interaction.add(map);
};

