// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

com.modestmaps.WaxProvider = function(base_url, layername) {
    this.layername = layername;
    this.base_url = base_url;
}

com.modestmaps.WaxProvider.prototype = {
    key: null,
    style: null,
    getTileUrl: function(coord) {
        coord = this.sourceCoordinate(coord);
        var worldSize = Math.pow(2, coord.zoom);
        coord.row = Math.pow(2, coord.zoom) - coord.row - 1;
        var imgPath = new Array('1.0.0', this.layername, coord.zoom, coord.column, coord.row).join('/');
        return this.base_url + imgPath + '.png';
    }
}

com.modestmaps.extend(com.modestmaps.WaxProvider, com.modestmaps.MapProvider);
