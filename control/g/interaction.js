// Wax for Google Maps API v3
// --------------------------

// Wax header
var wax = wax || {};
wax.g = wax.g || {};

// Controls constructor.
wax.g.Controls = function(map) {
    this.map = map;
    this.mapDiv = map.getDiv();
};

// Since Google Maps obscures mouseover events, grids need to calculated
// in order to simulate them, and eventually do multi-layer interaction.
wax.g.Controls.prototype.calculateGrid = function() {
    var tiles = [];
    var zoom = this.map.getZoom();
    var mapOffset = wax.util.offset(this.mapDiv);

    // Get all 'marked' tiles, added by the `wax.g.MapType` layer.
    // Return an array of objects which have the **relative** offset of
    // each tile, with a reference to the tile object in `tile`, since the API
    // returns evt coordinates as relative to the map object.
    for (var i in this.map.mapTypes) {
        if (!this.map.mapTypes[i].interactive) continue;

        var mapType = this.map.mapTypes[i];
        for (var key in mapType.cache) {
            if (key.split('/')[0] != zoom) continue;

            var tileOffset = wax.util.offset(mapType.cache[key]);
            tiles.push({
                xy: {
                    left: tileOffset.left - mapOffset.left,
                    top: tileOffset.top - mapOffset.top
                },
                tile: mapType.cache[key]
            });
        }
    }
    return tiles;
};

wax.g.Controls.prototype.interaction = function(options) {
    options = options || {};
    var that = this;
    var gm = new wax.GridManager();
    var f = null;

    // This requires wax.Tooltip or similar
    var callbacks = options.callbacks || new wax.tooltip();

    var inTile = function(sevt, xy) {
        if ((xy.top < sevt.y) &&
            ((xy.top + 256) > sevt.y) &&
            (xy.left < sevt.x) &&
            ((xy.left + 256) > sevt.x)) {
            return true;
        }
    };

    var find = wax.util.bind(function(map, evt) {
        var found = false;
        var interaction_grid = this.calculateGrid();
        for (var i = 0; i < interaction_grid.length && !found; i++) {
            if (inTile(evt.pixel, interaction_grid[i].xy)) {
                var found = interaction_grid[i];
            }
        }
        return found;
    }, this);

    google.maps.event.addListener(this.map, 'mousemove', function(evt) {
        var opt = { format: 'teaser' };
        var found = find(this.map, evt);
        if (!found) return;
        gm.getGrid(found.tile.src, function(err, g) {
            if (err || !g) return;
            var feature = g.getFeature(
                evt.pixel.x + wax.util.offset(that.mapDiv).left,
                evt.pixel.y + wax.util.offset(that.mapDiv).top,
                found.tile,
                opt
            );
            if (feature !== f) {
                callbacks.out(that.mapDiv);
                callbacks.over(feature, that.mapDiv, 0);
                f = feature;
            }
        });
    });

    google.maps.event.addListener(this.map, 'click', function(evt) {
        var opt = {
            format: options.clickAction || 'full'
        };
        var found = find(this.map, evt);
        if (!found) return;
        gm.getGrid(found.tile.src, function(err, g) {
            if (err || !g) return;
            var feature = g.getFeature(
                evt.pixel.x + wax.util.offset(that.mapDiv).left,
                evt.pixel.y + wax.util.offset(that.mapDiv).top,
                found.tile,
                opt
            );
            if (feature) {
                if (opt.format == 'full') {
                    callbacks.click(feature, that.mapDiv, 0);
                } else {
                    window.location = feature;
                }
            }
        });
    });

    // Ensure chainability
    return this;
};

wax.g.Controls.prototype.legend = function() {
    var legend = new wax.Legend(this.mapDiv),
        url = null;

    // Ideally we would use the 'tilesloaded' event here. This doesn't seem to
    // work so we use the much less appropriate 'idle' event.
    google.maps.event.addListener(this.map, 'idle', wax.util.bind(function() {
        if (url) return;

        // Get a tile URL for each relevant layer, from which legend URLs
        // are derived.
        url = [];
        for (var i in this.map.mapTypes) {
            if (!this.map.mapTypes[i].interactive) continue;
            var mapType = this.map.mapTypes[i];
            for (var key in mapType.cache) {
                url.push(mapType.cache[key].src);
                break;
            }
        };
        url.length && legend.render(url);
    }, this));

    // Ensure chainability
    return this;
};

