// An interaction toolkit for tiles that implement the
// [MBTiles UTFGrid spec](https://github.com/mapbox/mbtiles-spec)
//
// Create a new formatter from an object in the form
//
//     { formatter: "function(obj, data) { ... }" }
// Class: OpenLayers.Control.StyleWriterInteraction
// Inherits from:
// - <OpenLayers.Control>
OpenLayers.Control.Interaction =
    OpenLayers.Class(OpenLayers.Control, {
    feature: {},
    format: null,
    handlerOptions: null,
    handlers: null,
    hoverRequest: null,
    archive: {},
    keymap: {},
    tileRes: 4,

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
          out: StyleWriterTooltips.unselect,
          over: StyleWriterTooltips.select,
          click: StyleWriterTooltips.click
      };
    },

    // Add handlers to the map
    setMap: function(map) {
      this.handlers.hover.setMap(map);
      this.handlers.click.setMap(map);
      OpenLayers.Control.prototype.setMap.apply(this, arguments);
      this.activate();
    },

    activate: function() {
      if (!this.active) {
        this.handlers.hover.activate();
        this.handlers.click.activate();
      }
      return OpenLayers.Control.prototype.activate.apply(
        this, arguments
      );
    },

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

    // Simplistically derive the URL of interaction data from a tile URL
    tileDataUrl: function(tile) {
      return tile.url.replace(/(.png|.jpg|.jpeg)/, '.grid.json');
    },

    // Simplistically derive the URL of the formatter function from a tile URL
    formatterUrl: function(tile) {
      return tile.url.replace(/\d+\/\d+\/\d+\.\w+/, 'formatter.json');
    },

    // The callback on `reqTile` -
    // Load retrieved data into this.archive, which
    // contains grid objects indexed by code_string
    //
    // - @param {Object} data
    // - @param {String} code_string
    readDone: function(data, code_string) {
        this.archive[code_string] = data.grid;
        for (var i in data.grid_data) {
            this.keymap[i] = data.grid_data[i];
        }
    },


    // The callback on `reqTile` -
    //
    // - @param {Object} data
    // - @param {String} layer
    formatterReadDone: function(data, layer, callback) {
        layer.formatter = new Formatter(data);
        callback(layer.formatter);
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
      var sevt = StyleWriterUtil.makeEvent(evt);
      var tiles = this.getTileStack(this.viableLayers(), sevt);
      var feature = null;
      this.target = sevt.target;
      for (var t = 0; t < tiles.length; t++) {
        var code_string = StyleWriterUtil.fString(tiles[t].url);
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
      var sevt = StyleWriterUtil.makeEvent(evt);
      var tiles = this.getTileStack(this.viableLayers(), sevt);
      var feature = null;
      this.target = sevt.target;

      for (var t = 0; t < tiles.length; t++) {
        var code_string = StyleWriterUtil.fString(tiles[t].url);
        // This features has already been loaded, or
        // is currently being requested.
        if (this.archive[code_string]) {
            this.getGridFeature(sevt, tiles[t], function(feature) {
              if (!tiles[t]) return;
              if (feature && this.feature[t] !== feature) {
                this.feature[t] = feature;
                this.callbacks['out'](feature, tiles[t].layer, sevt);
                this.callbacks['over'](feature, tiles[t].layer, sevt);
              } else if (!feature) {
                this.feature[t] = null;
                this.callbacks['out'](feature, tiles[t].layer, sevt);
              }
            });
        } else {
          // Request this feature
          this.callbacks['out']({}, tiles[t].layer);
          this.feature[t] = null;
          if (!this.archive[code_string]) {
            try {
              this.archive[code_string] = true;
              this.target.hoverRequest = this.reqTile(tiles[t]);
            } catch (err) {
              // If jsonp fails with an exception, reset the archive
              // so that it can be retried.
              this.archive[code_string] = false;
            }
          }
        }
      }
    },

    CLASS_NAME: 'OpenLayers.Control.Interaction'
});
