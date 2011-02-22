// Wax for Google Maps API v3
// --------------------------

// Wax header
var wax = wax || {};

wax.g = {};

wax.g.calculateGrid = function(map) {
  if (map.interaction_grid) return;
  var interactive_tiles = $('.interactive-div-' + map.getZoom() + ' img', map.d);
  var start_offset = $(map.d).offset();
  // Naive implementation - optimize soon.
  var tiles = $(interactive_tiles).map(function(t) {
    var e_offset = $(interactive_tiles[t]).offset();
    return {
        xy: {
            left: e_offset.left - start_offset.left,
            top: e_offset.top - start_offset.top
            // left: e_offset.left,
            // top:  e_offset.top
        },
        tile: interactive_tiles[t]
    };
  });
  return tiles;
};

wax.g.invalidateGrid = function(map) {
  map.interaction_grid = false;
};

wax.g.inTile = function(sevt, xy) {
    if ((xy.top < sevt.y) &&
        ((xy.top + 256) > sevt.y) &&
         (xy.left < sevt.x) &&
        ((xy.left + 256) > sevt.x)) {
        return true;
    }
};

wax.g.makeInteraction = function(map) {
  var gm = new wax.GridManager();
  var f = null;
  var find = function(map, evt) {
    var found = false;
    var interaction_grid = wax.g.calculateGrid(map);
    for (var i = 0; i < interaction_grid.length && !found; i++) {
      if (wax.g.inTile(evt.pixel, interaction_grid[i].xy)) {
          var found = interaction_grid[i];
      }
    }
    return found;
  };
  google.maps.event.addListener(map, 'mousemove', function(evt) {
    var options = { format: 'teaser' };
    var found = find(map, evt);
    if (!found) return;
    gm.getGrid($(found.tile).attr('src'), function(g) {
        if (!g) return;
        var feature = g.getFeature(
          evt.pixel.x + $(map.d).offset().left,
          evt.pixel.y + $(map.d).offset().top,
          found.tile,
          options
        );
        if (feature !== f) {
          wax.tooltip.unselect(feature, $(map.d), 0);
          wax.tooltip.select(feature, $(map.d), 0);
          f = feature;
        }
    });
  });
  google.maps.event.addListener(map, 'click', function(evt) {
    var options = { format: 'full' };
    var found = find(map, evt);
    if (!found) return;
    gm.getGrid($(found.tile).attr('src'), function(g) {
        if (!g) return;
        var feature = g.getFeature(
          evt.pixel.x + $(map.d).offset().left,
          evt.pixel.y + $(map.d).offset().top,
          found.tile,
          options
        );
        feature && wax.tooltip.click(feature, $(map.d), 0);
    });
  });
};
