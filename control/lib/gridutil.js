// Wax GridUtil
// ------------

// Wax header
var wax = wax || {};

// Request
// -------
// Request data cache. `callback(data)` where `data` is the response data.
wax.request = {
    cache: {},
    locks: {},
    promises: {},
    get: function(url, callback) {
        // Cache hit.
        if (this.cache[url]) {
            return callback(this.cache[url][0], this.cache[url][1]);
        // Cache miss.
        } else {
            this.promises[url] = this.promises[url] || [];
            this.promises[url].push(callback);
            // Lock hit.
            if (this.locks[url]) return;
            // Request.
            var that = this;
            this.locks[url] = true;
            reqwest({
                url: url + '?callback=grid',
                type: 'jsonp',
                jsonpCallback: 'callback',
                success: function(data) {
                    that.locks[url] = false;
                    that.cache[url] = [null, data];
                    for (var i = 0; i < that.promises[url].length; i++) {
                        that.promises[url][i](that.cache[url][0], that.cache[url][1]);
                    }
                },
                error: function(err) {
                    that.locks[url] = false;
                    that.cache[url] = [err, null];
                    for (var i = 0; i < that.promises[url].length; i++) {
                        that.promises[url][i](that.cache[url][0], that.cache[url][1]);
                    }
                }
            });
        }
    }
};

// GridInstance
// ------------
// GridInstances are queryable, fully-formed
// objects for acquiring features from events.
wax.GridInstance = function(grid_tile, formatter, options) {
    options = options || {};
    this.grid_tile = grid_tile;
    this.formatter = formatter;
    // resolution is the grid-elements-per-pixel ratio of gridded data.
    this.resolution = options.resolution || 4;
    // The size of a tile element. For now we expect tiles to be squares.
    this.tileSize = options.tileSize || 256;
};

// Resolve the UTF-8 encoding stored in grids to simple
// number values.
// See the [utfgrid section of the mbtiles spec](https://github.com/mapbox/mbtiles-spec/blob/master/1.1/utfgrid.md)
// for details.
wax.GridInstance.prototype.resolveCode = function(key) {
  if (key >= 93) key--;
  if (key >= 35) key--;
  key -= 32;
  return key;
};

// Get a feature:
//
// * `x` and `y`: the screen coordinates of an event
// * `tile_element`: a DOM element of a tile, from which we can get an offset.
// * `options` options to give to the formatter: minimally having a `format`
//   member, being `full`, `teaser`, or something else.
wax.GridInstance.prototype.getFeature = function(x, y, tile_element, options) {
    if (!(this.grid_tile && this.grid_tile.grid)) return;

    // IE problem here - though recoverable, for whatever reason
    var offset = wax.util.offset(tile_element);
    var tileX = offset.left;
    var tileY = offset.top;

    // This tile's resolution. larger tiles will have lower, aka coarser, resolutions
    var res = (offset.width / this.tileSize) * this.resolution;

    if (y - tileY < 0) return;
    if (x - tileX < 0) return;
    if (Math.floor(y - tileY) > this.tileSize) return;
    if (Math.floor(x - tileX) > this.tileSize) return;

    // Find the key in the grid. The above calls should ensure that
    // the grid's array is large enough to make this work.
    var key = this.grid_tile.grid[
       Math.floor((y - tileY) / res)
    ].charCodeAt(
       Math.floor((x - tileX) / res)
    );

    key = this.resolveCode(key);

    // If this layers formatter hasn't been loaded yet,
    // download and load it now.
    var key_counter = 0;
    for (var layer = 0; layer < this.grid_tile.keys.length; layer++) {

        if ((key < (key_counter + this.grid_tile.keys[layer].length)) &&
            this.grid_tile.data[layer][this.grid_tile.keys[layer][key - key_counter]]) {

            return this.formatter.format(
                options,
                this.grid_tile.data[layer][this.grid_tile.keys[layer][key - key_counter]],
                layer);
        }

        key_counter += this.grid_tile.keys[layer].length;
    }
};

// GridManager
// -----------
// Generally one GridManager will be used per map.
//
// It takes one options object, which current accepts a single option:
// `resolution` determines the number of pixels per grid element in the grid.
// The default is 4.
wax.GridManager = function(options) {
    options = options || {};
    this.resolution = options.resolution || 4;
    this.grid_tiles = {};
    this.key_maps = {};
    this.formatters = {};
    this.locks = {};
};

// Get a grid - calls `callback` with either a `GridInstance`
// object or false. Behind the scenes, this calls `getFormatter`
// and gets grid data, and tries to avoid re-downloading either.
wax.GridManager.prototype.getGrid = function(url, callback) {
    var that = this;
    that.getFormatter(that.formatterUrl(url), function(err, f) {
        if (err || !f) return callback(err, null);

        wax.request.get(that.tileDataUrl(url), function(err, t) {
            if (err) return callback(err, null);
            callback(null, new wax.GridInstance(t, f, {
                resolution: that.resolution || 4
            }));
        });
    });
};

// Simplistically derive the URL of the grid data endpoint from a tile URL
wax.GridManager.prototype.tileDataUrl = function(url) {
  return url.replace(/(\.png|\.jpg|\.jpeg)(\d*)/, '.grid.json');
};

// Simplistically derive the URL of the formatter function from a tile URL
wax.GridManager.prototype.formatterUrl = function(url) {
  return url.replace(/\d+\/\d+\/\d+\.\w+/, 'layer.json');
};

// Request and save a formatter, passed to `callback()` when finished.
wax.GridManager.prototype.getFormatter = function(url, callback) {
    var that = this;
    // Formatter is cached.
    if (typeof this.formatters[url] !== 'undefined') {
        callback(null, this.formatters[url]);
        return;
    } else {
        wax.request.get(url, function(err, data) {
            if (data && data.formatter) {
                that.formatters[url] = new wax.Formatter(data);
            } else {
                that.formatters[url] = false;
            }
            callback(err, that.formatters[url]);
        });
    }
};

// Formatter
// ---------
wax.Formatter = function(obj) {
    // Prevent against just any input being used.
    try {
        this.f = [];
        for (var i = 0; i < obj.formatter.length; i++) {
            eval('this.f.push(' + obj.formatter[i] + ')');
        }
    } catch (e) {
        // Syntax errors in formatter
        if (console) console.log(e);
    }
};

// Wrap the given formatter function in order to
// catch exceptions that it may throw.
wax.Formatter.prototype.format = function(options, data, n) {
    try {
        return this.f[n](options, data);
    } catch (e) {
        if (console) console.log(e, typeof this.f[n], options, data);
    }
};
