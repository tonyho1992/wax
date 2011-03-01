// Wax for Google Maps API v3
// --------------------------

// Wax header
var wax = wax || {};
wax.g = wax.g || {};

// Controls constructor.
wax.g.Controls = function(map) {
    this.map = map;
};

// Since Google Maps obscures mouseover events, grids need to calculated
// in order to simulate them, and eventually do multi-layer interaction.
wax.g.Controls.prototype.calculateGrid = function() {
    if (this.map.interaction_grid) return;
    // Get all 'marked' tiles, added by the `wax.g.MapType` layer.
    var interactive_tiles = $('div.interactive-div-' + this.map.getZoom() + ' img', this.map.d);
    var start_offset = $(this.map.d).offset();
    // Return an array of objects which have the **relative** offset of
    // each tile, with a reference to the tile object in `tile`, since the API
    // returns evt coordinates as relative to the map object.
    var tiles = $(interactive_tiles).map(function(t) {
        var e_offset = $(interactive_tiles[t]).offset();
        return {
            xy: {
                left: e_offset.left - start_offset.left,
                top: e_offset.top - start_offset.top
            },
            tile: interactive_tiles[t]
        };
    });
    return tiles;
};

wax.g.Controls.prototype.inTile = function(sevt, xy) {
    if ((xy.top < sevt.y) &&
        ((xy.top + 256) > sevt.y) &&
         (xy.left < sevt.x) &&
        ((xy.left + 256) > sevt.x)) {
        return true;
    }
};

wax.g.Controls.prototype.Interaction = function() {
  var that = this;
  var gm = new wax.GridManager();
  var f = null;
  var find = function(map, evt) {
    var found = false;
    var interaction_grid = that.calculateGrid();
    for (var i = 0; i < interaction_grid.length && !found; i++) {
      if (that.inTile(evt.pixel, interaction_grid[i].xy)) {
          var found = interaction_grid[i];
      }
    }
    return found;
  };
  google.maps.event.addListener(this.map, 'mousemove', function(evt) {
    var options = { format: 'teaser' };
    var found = find(this.map, evt);
    if (!found) return;
    gm.getGrid($(found.tile).attr('src'), function(g) {
        if (!g) return;
        var feature = g.getFeature(
          evt.pixel.x + $(that.map.d).offset().left,
          evt.pixel.y + $(that.map.d).offset().top,
          found.tile,
          options
        );
        if (feature !== f) {
          wax.tooltip.unselect(feature, $(that.map.d), 0);
          wax.tooltip.select(feature, $(that.map.d), 0);
          f = feature;
        }
    });
  });
  google.maps.event.addListener(this.map, 'click', function(evt) {
    var options = { format: 'full' };
    var found = find(this.map, evt);
    if (!found) return;
    gm.getGrid($(found.tile).attr('src'), function(g) {
        if (!g) return;
        var feature = g.getFeature(
          evt.pixel.x + $(that.map.d).offset().left,
          evt.pixel.y + $(that.map.d).offset().top,
          found.tile,
          options
        );
        feature && wax.tooltip.click(feature, $(that.map.d), 0);
    });
  });
  return this;
};

wax.g.Controls.prototype.Legend = function() {
    var that = this,
        legend = new wax.Legend($(this.map.d)),
        url = null;

    // Ideally we would use the 'tilesloaded' event here. This doesn't seem to
    // work so we use the much less appropriate 'idle' event.
    google.maps.event.addListener(this.map, 'idle', function() {
        if (url) return;
        var img = $('div.interactive-div-' + that.map.getZoom() + ' img:first', that.map.d);
        img && (url = img.attr('src')) && legend.render([url]);
    });
    return this;
};
