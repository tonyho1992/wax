wax = wax || {};
wax.mm = wax.mm || {};

// An adapter for the TileJSON spec that connects to the mm provider,
// or default MM implementation if the tiles are in XYZ format

wax.mm.tilejson = function(url, callback) {
    var urls = (typeof(url) == 'string') ?
            [url] : url,
    tj = function(url, cb) {
        reqwest({
            url: url + '?callback=grid',
            type: 'jsonp',
            jsonpCallback: 'callback',
            success: cb,
            error: callback
        });
    };

    for (var i = 0, count = 0, res = []; i < urls.length; i++) {
        tj(urls[i], (function(i) {
            return function(data) {
                res[i] = new wax.mm.connector(data);
                if (++count === urls.length) callback(res.length === 1 ? res[0] : res);
            };
        })(i));
    }
};
