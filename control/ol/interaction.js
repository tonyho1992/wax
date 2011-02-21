// An interaction toolkit for tiles that implement the
// [MBTiles UTFGrid spec](https://github.com/mapbox/mbtiles-spec)
//
// Class: OpenLayers.Control.StyleWriterInteraction
// Inherits from:
// - <OpenLayers.Control>
OpenLayers.Control.Interaction =
    OpenLayers.Class(OpenLayers.Control, {
    feature: {},
    handlerOptions: null,
    handlers: null,

    gm: new GridManager(),

    initialize: function(options) {
      options = options || {};
      options.handlerOptions = options.handlerOptions || {};
      OpenLayers.Control.prototype.initialize.apply(this, [options || {}]);

      this.handlers = {
        hover: new OpenLayers.Handler.Hover(
          this, {
            move: this.cancelHover,
            pause: this.getInfoForHover
          },
          // Be nice to IE, making it determine interaction
          // every 40ms instead of 10ms
          OpenLayers.Util.extend(this.handlerOptions.hover || {}, {
            delay: ($.browser.msie) ? 40 : 10
          })
        ),
        click: new OpenLayers.Handler.Click(
          this, {
            click: this.getInfoForClick
        })
      };

      this.callbacks = {
          out:   MapTooltips.unselect,
          over:  MapTooltips.select,
          click: MapTooltips.click
      };
    },

    // Add handlers to the map
    setMap: function(map) {
      this.handlers.hover.setMap(map);
      this.handlers.click.setMap(map);
      OpenLayers.Control.prototype.setMap.apply(this, arguments);
      this.activate();
    },

    // boilerplate
    activate: function() {
      if (!this.active) {
        this.handlers.hover.activate();
        this.handlers.click.activate();
      }
      return OpenLayers.Control.prototype.activate.apply(
        this, arguments
      );
    },

    // boilerplate
    deactivate: function() {
      return OpenLayers.Control.prototype.deactivate.apply(
        this, arguments
      );
    },

    // Get an Array of the stack of tiles under the mouse.
    // This operates with pixels only, since there's no way
    // to bubble through an element which is sitting on the map
    // (like an SVG overlay).
    //
    // If no tiles are under the mouse, returns an empty array.
    getTileStack: function(layers, sevt) {
      var found = false;
      var gridpos = {};
      var tiles = [];
      // All of these loops break once found is made true.
      for (var x = 0; x < layers[0].grid.length && !found; x++) {
        for (var y = 0; y < layers[0].grid[x].length && !found; y++) {
          var divpos = $(layers[0].grid[x][y].imgDiv).offset();
          found = ((divpos.top < sevt.pY) &&
            ((divpos.top + 256) > sevt.pY) &&
             (divpos.left < sevt.pX) &&
            ((divpos.left + 256) > sevt.pX));
          if (found) {
            gridpos = {
                x: x,
                y: y
            };
          }
        }
      }
      if (found) {
        for (var j = 0; j < layers.length; j++) {
          layers[j].grid[gridpos.x] && layers[j].grid[gridpos.x][gridpos.y] &&
            tiles.push(layers[j].grid[gridpos.x][gridpos.y]);
        }
      }
      return tiles;
    },

    // Get all interactable layers
    viableLayers: function() {
      if (this._viableLayers) return this._viableLayers;
      return this._viableLayers = $(this.map.layers).filter(
        function(i) {
          // TODO: make better indication of whether
          // this is an interactive layer
          return (this.map.layers[i].visibility === true) &&
            (this.map.layers[i].CLASS_NAME === 'OpenLayers.Layer.TMS');
        }
      );
    },

    // React to a click mouse event
    // This is the `pause` handler attached to the map.
    getInfoForClick: function(evt) {
      var layers = this.viableLayers();
      var sevt = this.makeEvent(evt);
      var tiles = this.getTileStack(this.viableLayers(), sevt);
      var feature = null;
      this.target = sevt.target;
      for (var t = 0; t < tiles.length; t++) {
        var code_string = StyleWriterUtil.hashString(tiles[t].url);
        if (this.archive[code_string]) {
          this.getGridFeature(sevt, tiles[t], function(feature) {
              feature && this.callbacks['click'](feature, tiles[t].layer);
          });
        }
      }
    },

    // React to a hover mouse event, by finding all tiles,
    // finding features, and calling `this.callbacks[]`
    // This is the `click` handler attached to the map.
    getInfoForHover: function(evt) {
      var layers = this.viableLayers();
      var sevt = this.gm.makeEvent(evt);
      var tiles = this.getTileStack(this.viableLayers(), sevt);
      var feature = null,
          g = null;
      this.target = sevt.target;
      var that = this;

      for (var t = 0; t < tiles.length; t++) {
        // This features has already been loaded, or
        // is currently being requested.
        this.gm.getGrid(tiles[t].url, function(g) {
            if (g) {
                var feature = g.getFeature(sevt.pX, sevt.pY, tiles[t].imgDiv);
                if (feature) {
                  if (!tiles[t]) return;
                  if (feature && that.feature !== feature) {
                    this.feature = feature;
                    that.callbacks['out'] (feature, tiles[t].layer.map.viewPortDiv, t);
                    that.callbacks['over'](feature, tiles[t].layer.map.viewPortDiv, t);
                  } else if (!feature) {
                    this.feature[t] = null;
                    that.callbacks['out'](feature, tiles[t].layer.map.viewPortDiv, t);
                  }
                } else {
                  // Request this feature
                  // TODO(tmcw) re-add layer
                  if (tiles[t]) {
                    that.callbacks['out']({}, tiles[t].layer.map.viewPortDiv, t);
                  } else {
                    that.callbacks['out']({}, false, t);
                  }
               }
            }
        });
      }
    },
    CLASS_NAME: 'OpenLayers.Control.Interaction'
});
