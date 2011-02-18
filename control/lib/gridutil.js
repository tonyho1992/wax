// Requires:
// - jQuery
// - jquery-jsonp
var GridUtil = {
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
  getGridFeature: function(sevt, tile, callback) {
    callback = $.proxy(callback, this);
    var grid = this.archive[StyleWriterUtil.fString(tile.url)];
    if (grid === true) {
      // If the grid is currently downloading, return undefined.
      return;
    } else {
      var key = grid.grid[
         Math.floor((sevt.pY - $(tile.imgDiv).offset().top) / this.tileRes)
      ].charCodeAt(
         Math.floor((sevt.pX - $(tile.imgDiv).offset().left) / this.tileRes)
      );

      // See: Encoding IDs
      (key >= 93) && key--;
      (key >= 35) && key--;
      key -= 32;

      var km = this.keymap;

      // If this layers formatter hasn't been loaded yet,
      // download and load it now.
      if (grid.keys[key]) {
        this.reqFormatter(tile, function(formatter) {
            callback(formatter.format({ format: 'full' }, km[grid.keys[key]]));
        });
      } else {
        callback(null);
      }
    }
  },
  // Request and save a formatter, calling `formatterReqDone` when finished.
  reqFormatter: function(tile, callback) {
    if (tile.layer.formatter) {
      callback(tile.layer.formatter);
      return;
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
  }
};

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
