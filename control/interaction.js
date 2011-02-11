// An interaction toolkit for tiles that implement the
// [MBTiles UTFGrid spec](https://github.com/mapbox/mbtiles-spec)
//
// Requires:
// - jQuery
// - jquery-jsonp
var StyleWriterUtil = {
  // url-safe base64 encoding for mapfile urls in tile urls
  encode_base64: function(data) {
    var out = '', c1, c2, c3, e1, e2, e3, e4;
    var tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij' +
        'klmnopqrstuvwxyz0123456789+/=';
    for (var i = 0; i < data.length; ) {
       c1 = data.charCodeAt(i++);
       c2 = data.charCodeAt(i++);
       c3 = data.charCodeAt(i++);
       e1 = c1 >> 2;
       e2 = ((c1 & 3) << 4) + (c2 >> 4);
       e3 = ((c2 & 15) << 2) + (c3 >> 6);
       e4 = c3 & 63;
       if (isNaN(c2))
         e3 = e4 = 64;
       else if (isNaN(c3))
         e4 = 64;
       out += tab.charAt(e1) + tab.charAt(e2) + tab.charAt(e3) + tab.charAt(e4);
    }
    return out;
  },
  // Create a cross-browser event object
  makeEvent: function(evt) {
    return {
      target: evt.target || evt.srcElement,
      pX: evt.pageX || evt.clientX,
      pY: evt.pageY || evt.clientY,
      evt: evt
    };
  },
  // Generate a function-safe string from a URL string
  // TODO: rewrite
  fString: function(src) {
    if (!src) return;
    var pts = src.split('/').slice(-4)
        .join('_').replace(/=/g, '_').split('.');
    pts.pop();
    return pts.pop();
  }
};

// Create a new formatter from an object in the form
//
//     { formatter: "function(obj, data) { ... }" }
function Formatter(obj) {
    // Prevent against just any input being used.
    if (obj.formatter && typeof obj.formatter === 'string') {
        try {
            // Ugly, dangerous use of eval.
            eval('this.f = ' + obj.formatter);
        } catch (e) {
            // Syntax errors in formatter
            console && console.log(e);
        }
    }
}

// Wrap the given formatter function in order to
// catch exceptions that it may throw.
Formatter.prototype.format = function(options, data) {
    try {
        return this.f(options, data);
    } catch (e) {
        console && console.log(e);
    }
};

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

    // Given an event with a location and a tile (from getTileStack),
    // grab the feature (currently the key) if it exists - otherwise,
    // return undefined.
    getGridFeature: function(sevt, tile, callback) {
      callback = $.proxy(callback, this);
      var grid = this.archive[StyleWriterUtil.fString(tile.url)];
      if (grid === true) {
        // If the grid is currently downloading, return undefined.
        return;
      } else {
        var key = grid.grid[
           Math.floor((sevt.pX - $(tile.imgDiv).offset().left) / this.tileRes)].charCodeAt(
           Math.floor((sevt.pY - $(tile.imgDiv).offset().top) / this.tileRes));

        // See: Encoding IDs
        (key >= 93) && key--;
        (key >= 35) && key--;
        key -= 32;

        // If this layers formatter hasn't been loaded yet,
        // download and load it now.
        this.reqFormatter(tile, function(formatter) {
            callback(formatter.format(sevt, grid.keys[key]));
        });
      }
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
      return tile.url.replace(/(png|jpg|jpeg)$/, 'grid.json');
    },

    // Simplistically derive the URL of the formatter function from a tile URL
    formatterUrl: function(tile) {
      return tile.url.replace(/\d+\/\d+\/\d+\.\w+/, 'formatter.json');
    },

    // Request and save a tile, calling `reqDone` when finished.
    reqTile: function(tile) {
      return $.jsonp({
        'url': this.tileDataUrl(tile),
        context: this,
        success: function(data) {
          return this.readDone(data, StyleWriterUtil.fString(tile.url));
        },
        error: function() {},
        callback: StyleWriterUtil.fString(tile.url),
        callbackParameter: 'callback'
      });
    },

    // The callback on `reqTile` -
    // Load retrieved data into this.archive, which
    // contains grid objects indexed by code_string
    // - @param {Object} data
    // - @param {String} code_string
    readDone: function(data, code_string) {
        this.archive[code_string] = data;
    },

    // Request and save a formatter, calling `formatterReqDone` when finished.
    reqFormatter: function(tile, callback) {
      if (tile.layer.formatter) {
        callback(tile.layer.formatter);
      }
      return $.jsonp({
        'url': this.formatterUrl(tile),
        context: this,
        success: function(data) {
          return this.formatterReadDone(data, tile.layer, callback);
        },
        error: function() {},
        callback: StyleWriterUtil.fString(tile.url),
        callbackParameter: 'callback'
      });
    },

    // The callback on `reqTile` -
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
              if (feature) {
                if (feature !== this.feature[t]) {
                  this.feature[t] = feature;
                  this.callbacks['out'](feature, tiles[t].layer, sevt);
                  if (feature) {
                    this.callbacks['over'](feature, tiles[t].layer, sevt);
                  }
                }
              } else {
                if (tiles[t]) {
                    this.callbacks['out'](feature, tiles[t].layer, sevt);
                    this.feature[t] = null;
                }
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
