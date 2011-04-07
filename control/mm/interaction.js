// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

com.modestmaps.Map.prototype.interaction = function() {
    this.waxGM = new wax.GridManager();
            
    this.callbacks = {
        out:   wax.tooltip.unselect,
        over:  wax.tooltip.select,
        click: wax.tooltip.click
    };

    this.waxGetTileGrid = function() {
        // TODO: don't build for tiles outside of viewport
        var zoom = this.getZoom();
        return this._waxGetTileGrid || (this._waxGetTileGrid =
            (function(t) {
                var o = [];
                $.each(t, function(key, img) {
                    if (key.split(',')[0] == zoom) {
                        var $img = $(img);
                        var offset = $img.offset();
                        o.push([offset.top, offset.left, $img]);
                    }
                });
                return o;
            })(this.tiles));
    };

    // TODO: don't track on drag
    $(this.parent).bind('mousemove', $.proxy(function(evt) {
        var grid = this.waxGetTileGrid();
        for (var i = 0; i < grid.length; i++) {
            if ((grid[i][0] < evt.pageY) &&
               ((grid[i][0] + 256) > evt.pageY) &&
                (grid[i][1] < evt.pageX) &&
               ((grid[i][1] + 256) > evt.pageX)) {
                var $tile = grid[i][2];
                break;
            }
        }

        if ($tile) {
            this.waxGM.getGrid($tile.attr('src'), $.proxy(function(g) {
                if (g) {
                    var feature = g.getFeature(evt.pageX, evt.pageY, $tile, { format: 'teaser' });
                    if (feature) {
                        if (feature && this.feature !== feature) {
                            this.feature = feature;
                            this.callbacks.out(feature, this.parent, 0, evt);
                            this.callbacks.over(feature, this.parent, 0, evt);
                        } else if (!feature) {
                            this.feature = null;
                            this.callbacks.out(feature, this.parent, 0, evt);
                        }
                    } else {
                        this.feature = null;
                        this.callbacks.out({}, this.parent, 0, evt);
                    }
                }
            }, this));
        }

    }, this));

    var modifying_events = ['zoomed', 'panned', 'centered', 'extentset', 'resized', 'drawn'];
    for (var i = 0; i < modifying_events.length; i++) {
        this.addCallback(modifying_events[i], function(map, e) {
            map._waxGetTileGrid = null;
        });
    }

    return this;
};
