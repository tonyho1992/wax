var calculateGrid = function(map) {
  if (map.interaction_grid) return;
  var interactive_tiles = $('.interactive-div-' + map.getZoom(), map.d);
  var start_offset = $(map.d).offset();
  // Naive implementation - optimize soon.
  var tiles = $(interactive_tiles).map(function(t) {
    var e_offset = $(interactive_tiles[t]).offset();
    return {
        xy: {
            left: e_offset.left - start_offset.left,
            top:  e_offset.top - start_offset.top
        },
        tile: interactive_tiles[t]
    };
  });
  map.interaction_grid = tiles;
};

var invalidateGrid = function(map) {
  map.interaction_grid = false;
};

var inTile = function(sevt, xy) {
    if  ((xy.top < sevt.y) &&
        ((xy.top + 256) > sevt.y) &&
         (xy.left < sevt.x) &&
        ((xy.left + 256) > sevt.x)) {
        return true;
    }
};

var makeInteraction = function(map) {
  var gm = new GridManager();
  google.maps.event.addListener(map, 'mousemove', function(evt) {
    var found = false;
    calculateGrid(map);
    for (var i = 0; i < map.interaction_grid.length && !found; i++) {
      if (inTile(evt.pixel, map.interaction_grid[i].xy)) {
          var found = map.interaction_grid[i];
      }
    }
    if (found) {
      GridUtil.req;
    }
  });
  google.maps.event.addListener(map, 'bounds_changed', function(evt) {
    invalidateGrid(map);
  });
};
