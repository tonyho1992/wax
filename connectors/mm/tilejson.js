wax = wax || {};
wax.mm = wax.mm || {};

// An adapter for the TileJSON spec that connects to the mm provider,
// or default MM implementation if the tiles are in XYZ format

wax.mm.tilejson = function(url, callback) {
    reqwest({
        url: url + '?callback=grid',
        type: 'jsonp',
        jsonpCallback: 'callback',
        success: callback,
        error: callback
    });
};
