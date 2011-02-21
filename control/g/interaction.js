var calculateGrid = function(map) {
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

var invalidateGrid = function(map) {
  map.interaction_grid = false;
};

var inTile = function(sevt, xy) {
    if ((xy.top < sevt.y) &&
        ((xy.top + 256) > sevt.y) &&
         (xy.left < sevt.x) &&
        ((xy.left + 256) > sevt.x)) {
        return true;
    }
};

var makeInteraction = function(map) {
  var gm = new GridManager();
  var f = null;
  var options = { format: 'teaser' };
  google.maps.event.addListener(map, 'mousemove', function(evt) {
    var found = false;
    var interaction_grid = calculateGrid(map);
    for (var i = 0; i < interaction_grid.length && !found; i++) {
      if (inTile(evt.pixel, interaction_grid[i].xy)) {
          var found = interaction_grid[i];
      }
    }
    if (found) {
      gm.getGrid($(found.tile).attr('src'), function(g) {
        if (g) {
          var feature = g.getFeature(
            evt.pixel.x + $(map.d).offset().left,
            evt.pixel.y + $(map.d).offset().top,
            found.tile,
            options
          );
          if (feature !== f) {
            MapTooltips.unselect(feature, $(map.d).parent(), 0);
            MapTooltips.select(feature, $(map.d).parent(), 0);
            f = feature;
          }
        }
      });
    }
  });
  /*
  google.maps.event.addListener(map, 'bounds_changed', function(evt) {
    invalidateGrid(map);
  });
  */
};
