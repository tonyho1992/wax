function GridInstance(grid_tile, formatter) {
    this.grid_tile = grid_tile;
    this.formatter = formatter;
    this.tileRes = 4;
}

GridInstance.prototype.resolveCode = function(key) {
  // See: Encoding IDs
  (key >= 93) && key--;
  (key >= 35) && key--;
  key -= 32;
  return key;
};

GridInstance.prototype.getFeature = function(x, y, tile_element) {
  if (Math.floor((y - $(tile_element).offset().top) / this.tileRes) > 256 ||
    Math.floor((x - $(tile_element).offset().left) / this.tileRes) > 256) return;


  var key = this.grid_tile.grid.grid[
     Math.floor((y - $(tile_element).offset().top) / this.tileRes)
  ].charCodeAt(
     Math.floor((x - $(tile_element).offset().left) / this.tileRes)
  );

  key = this.resolveCode(key);

  // If this layers formatter hasn't been loaded yet,
  // download and load it now.
  if (this.grid_tile.grid.keys[key]) {
    return this.formatter.format({ format: 'full' }, this.grid_tile.grid_data[this.grid_tile.grid.keys[key]]);
  }
};

// GridManager
// -----------
//
// Interface:
//
// var g = new GridManager();
//
// if (var grid = g.getGrid(g.gridUrl(grid_url))) {
//   grid.getFeature(x, y);
// }
function GridManager() {
    this.grid_tiles = {};
    this.key_maps = {};
    this.formatters = {};
}

GridManager.prototype.getGrid = function(url, callback) {
  var that = this;
  var formatter = this.getFormatter(this.formatterUrl(url), function(f) {
      var grid_tile = that.grid_tiles[url];
      // downloaded
      if (grid_tile) {
        callback(new GridInstance(grid_tile, f));
      // not locked
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
      // locked
      } else {
        callback(false);
      }
  });
};

// Generate a function-safe string from a URL string
GridManager.prototype.hashString = function(src) {
    /*
  if (!src) return;
  var pts = src.split('/').slice(-4).join('_');
      .join('_').replace(/=/g, '_').split('.');
  pts.pop();

  return pts.pop();
  */
};

// Create a cross-browser event object
GridManager.prototype.makeEvent = function(evt) {
  return {
    target: evt.target || evt.srcElement,
    pX: evt.pageX || evt.clientX,
    pY: evt.pageY || evt.clientY,
    evt: evt
  };
};

GridManager.prototype.tileDataUrl = function(url) {
  return url.replace(/(.png|.jpg|.jpeg)/, '.grid.json');
};

// Simplistically derive the URL of the formatter function from a tile URL
GridManager.prototype.formatterUrl = function(url) {
  return url.replace(/\d+\/\d+\/\d+\.\w+/, 'formatter.json');
};

// Request and save a formatter, calling `formatterReqDone` when finished.
GridManager.prototype.getFormatter = function(formatter_url, callback) {
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
    // callback: this.hashString(formatter_url),
    callbackParameter: 'callback'
  });
};

// Load retrieved data into this.archive, which
// contains grid objects indexed by code_string
//
// - @param {Object} data
// - @param {String} code_string
GridManager.prototype.readDone = function(data, code_string) {
    this.grid_tiles[code_string] = data;
};

// The callback on `reqTile` -
//
// - @param {Object} data
// - @param {String} layer
GridManager.prototype.formatterReadDone = function(data, url, callback) {
    this.formatters[url] = new Formatter(data);
    callback(this.formatters[url]);
};

// Formatter
// ---------
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
