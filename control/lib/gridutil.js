// Wax GridUtil
// ------------

// Wax header
var wax = wax || {};

// GridInstance
// ------------
// GridInstances are queryable, fully-formed
// objects for acquiring features from events.
wax.GridInstance = function (grid_tile, formatter) {
    this.grid_tile = grid_tile;
    this.formatter = formatter;
    this.tileRes = 4;
}

// Resolve the UTF-8 encoding stored in grids to simple
// number values.
// See the [utfgrid section of the mbtiles spec](https://github.com/mapbox/mbtiles-spec/blob/master/1.1/utfgrid.md) 
// for details.
wax.GridInstance.prototype.resolveCode = function(key) {
  (key >= 93) && key--;
  (key >= 35) && key--;
  key -= 32;
  return key;
};

wax.GridInstance.prototype.getFeature = function(x, y, tile_element, options) {
  if (Math.floor((y - $(tile_element).offset().top) / this.tileRes) > 256 ||
    Math.floor((x - $(tile_element).offset().left) / this.tileRes) > 256) return;


  var key = this.grid_tile.grid[
     Math.floor((y - $(tile_element).offset().top) / this.tileRes)
  ].charCodeAt(
     Math.floor((x - $(tile_element).offset().left) / this.tileRes)
  );

  key = this.resolveCode(key);

  // If this layers formatter hasn't been loaded yet,
  // download and load it now.
  if (this.grid_tile.keys[key]) {
    return this.formatter.format(
      options,
      this.grid_tile.data[this.grid_tile.keys[key]]
    );
  }
};

// GridManager
// -----------
// Generally one GridManager will be used per map.
wax.GridManager = function () {
    this.grid_tiles = {};
    this.key_maps = {};
    this.formatters = {};
}

// Get a grid - calls `callback` with either a `GridInstance`
// object or false. Behind the scenes, this calls `getFormatter`
// and gets grid data, and tries to avoid re-downloading either.
wax.GridManager.prototype.getGrid = function(url, callback) {
  var that = this;
  var formatter = this.getFormatter(this.formatterUrl(url), function(f) {
      var grid_tile = that.grid_tiles[url];
      // If formatter & grid are finished, callback with `GridInstance`
      if (grid_tile) {
        callback(new wax.GridInstance(grid_tile, f));
      // The grid isn't downloading, so start a download request
      } else if (grid_tile !== false) {
        that.grid_tiles[url] = false;
        $.jsonp({
          url: that.tileDataUrl(url),
          context: this,
          success: function(data) {
            return that.readDone(data, url);
          },
          error: function() {},
          callback: 'grid',
          callbackParameter: 'callback'
        });
        callback(false);
      // The grid is downloading - just exit.
      } else {
        callback(false);
      }
  });
};

// Create a cross-browser event object
wax.GridManager.prototype.makeEvent = function(evt) {
  return {
    target: evt.target || evt.srcElement,
    pX: evt.pageX || evt.clientX,
    pY: evt.pageY || evt.clientY,
    evt: evt
  };
};

// Simplistically derive the URL of the grid data endpoint from a tile URL
wax.GridManager.prototype.tileDataUrl = function(url) {
  return url.replace(/(.png|.jpg|.jpeg)/, '.grid.json');
};

// Simplistically derive the URL of the formatter function from a tile URL
wax.GridManager.prototype.formatterUrl = function(url) {
  return url.replace(/\d+\/\d+\/\d+\.\w+/, 'formatter.json');
};

// Request and save a formatter, calling `formatterReadDone` when finished.
wax.GridManager.prototype.getFormatter = function(formatter_url, callback) {
  if (this.formatters[formatter_url]) {
    callback(this.formatters[formatter_url]);
    return;
  }
  return $.jsonp({
    url: formatter_url,
    context: this,
    success: function(data) {
      return this.formatterReadDone(data, formatter_url, callback);
    },
    error: function() {},
    callback: 'grid',
    callbackParameter: 'callback'
  });
};

// Load retrieved data into this.archive, which
// contains grid objects indexed by code_string
//
// - @param {Object} data
// - @param {String} code_string
wax.GridManager.prototype.readDone = function(data, code_string) {
    this.grid_tiles[code_string] = data;
};

// The callback on `reqTile` -
//
// - @param {Object} data
// - @param {String} layer
wax.GridManager.prototype.formatterReadDone = function(data, url, callback) {
    this.formatters[url] = new wax.Formatter(data);
    callback(this.formatters[url]);
};

// Formatter
// ---------
wax.Formatter = function(obj) {
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
wax.Formatter.prototype.format = function(options, data) {
    try {
        return this.f(options, data);
    } catch (e) {
        console && console.log(e);
    }
};
