// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

// A layer connector for Modest Maps
//
// Takes a `base_url` first argument that can be a string for a single
// server or an array to hit multiple servers or CNAMEs.
//
// Also takes a `layername` argument.
//
// Also takes a `filetype` argument.
com.modestmaps.WaxProvider = function(base_url, layername, filetype) {
    this.layername = layername;
    this.base_urls = (typeof(base_url) == 'string') ? [base_url] : base_url;
    this.n_urls = this.base_urls.length;
    this.filetype = filetype || '.png';
};

com.modestmaps.WaxProvider.prototype = {
    key: null,
    style: null,
    getTileUrl: function(coord) {
        coord = this.sourceCoordinate(coord);
        var worldSize = Math.pow(2, coord.zoom);
        coord.row = Math.pow(2, coord.zoom) - coord.row - 1;
        if (this.n_urls === 1) {
            var server = this.base_urls[0];
        } else {
            var server = this.base_urls[parseInt(worldSize * coord.row + coord.column) % this.n_urls];
        }
        var imgPath = new Array('1.0.0', this.layername, coord.zoom, coord.column, coord.row).join('/');
        return server + imgPath + this.filetype;
    }
};

com.modestmaps.extend(com.modestmaps.WaxProvider, com.modestmaps.MapProvider);
