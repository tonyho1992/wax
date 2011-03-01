var wax = wax || {};
wax.p = wax.p || {};
wax.p.Controls = wax.p.Controls || {};

var p = {};

// Controls constructor.
wax.p.Controls = function(map) {
    this.map = map;
    this.container = this.map.container();
};

wax.p.Controls.prototype.calculateGrid = function(p) {
    var transform = $('g.layer', this.container).attr('transform');
    var tileSize = p.tileSize();
    var container_left = $(this.container).offset().left;
    var container_top = $(this.container).offset().top;
    var centerpoint = transform.animVal.getItem(0).matrix;
    var centerpoint_left = centerpoint.e + container_left;
    var centerpoint_top  = centerpoint.f + container_top;
    var ratio = (transform.animVal.numberOfItems == 2) ? transform.animVal.getItem(1).matrix.a : 1;
    var interactive_tiles = $('image', this.container);
    var tiles = $(interactive_tiles).map(function(t) {
        var $interactive_tile = $(interactive_tiles[t]);
        var e_offset = $interactive_tile.offset();
        return {
            xy: {
                left: ((e_offset.left * (ratio)) + (centerpoint_left * (1 - ratio) *
                    (e_offset.left > centerpoint_left) ? 1 : -1)),
                top:  ((e_offset.top * (ratio))  + (centerpoint_top * (1 - ratio) *
                    (e_offset.top > centerpoint_top) ? 1 : -1)),
            },
            size: {
                width: tileSize.x * ratio,
                height: tileSize.y * ratio
            },
            tile: interactive_tiles[t]
        };
    });
    return tiles;
};

wax.p.Controls.prototype.inTile = function(sevt, tile) {
    // TODO: pageX correct?
    if  ((tile.xy.top < sevt.pageY) &&
        ((tile.xy.top + tile.size.height) > sevt.pageY) &&
         (tile.xy.left < sevt.pageX) &&
        ((tile.xy.left + tile.size.width) > sevt.pageX)) {
        return true;
    }
};

wax.p.Controls.prototype.Interaction = function() {
  var that = this;
  var gm = new wax.GridManager();
  var f = null;
  var find = function(map, evt) {
    var found = false;
    var interaction_grid = that.calculateGrid(that.map);
    for (var i = 0; i < interaction_grid.length && !found; i++) {
      if (that.inTile(evt, interaction_grid[i])) {
          var found = interaction_grid[i];
      }
    }
    return found;
  };
  $(this.container).mousemove(_.throttle(function(evt) {
    var options = { format: 'teaser' };
    var found = find(this.map, evt);
    if (!found) return;
    gm.getGrid($(found.tile).attr('href'), function(g) {
        if (!g) return;
        g.tileRes = (256 / found.size.height) * 4;
        var feature = g.getFeature(
          evt.pageX,
          evt.pageY,
          found.xy,
          options
        );
        if (feature !== f) {
          wax.tooltip.unselect(feature, $(that.container).parent(), 0);
          wax.tooltip.select(feature, $(that.container).parent(), 0);
          f = feature;
        }
    });
  }, 50));
  // google.maps.event.addListener(this.map, 'click', function(evt) {
  //   var options = { format: 'full' };
  //   var found = find(this.map, evt);
  //   if (!found) return;
  //   gm.getGrid($(found.tile).attr('src'), function(g) {
  //       if (!g) return;
  //       var feature = g.getFeature(
  //         evt.pixel.x + $(that.map.d).offset().left,
  //         evt.pixel.y + $(that.map.d).offset().top,
  //         found.tile,
  //         options
  //       );
  //       feature && wax.tooltip.click(feature, $(that.map.d), 0);
  //   });
  // });
  return this;
};



$(function() {
    var map = { 'wax':
        ['@group',
            ['@call org.polymaps.map'],
            ['@chain container',
                ['@group', 
                    ['@call document.getElementById', 'polymaps-canvas'],
                    ['@chain appendChild',
                        ['@call org.polymaps.svg', 'svg']
                    ]
                ]
            ],
            ['@chain add',
                ['@call org.polymaps.interact']
            ],
            ['@chain add',
                ['@group', 
                    ['@call org.polymaps.image'],
                    ['@chain url',
                        ['@call mbUrl', 'http://localhost:9000/1.0.0/batch/{Z}/{X}/{Y}.png']
                    ]
                ]
            ],
            ['@chain zoom', 2]
        ]
    };
    p = wax.Record(map);
    var c = new wax.p.Controls(p.wax);
    c.Interaction();
});
