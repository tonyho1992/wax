var wax = wax || {};
wax.mm = wax.mm || {};

// A layer connector for Modest Maps conformant to TileJSON
// https://github.com/mapbox/tilejson
wax.mm.connector = function(tj) {
    this.options = {
        tiles: tj.tiles,
        scheme: tj.scheme || 'xyz',
        minzoom: tj.minzoom || 0,
        maxzoom: tj.maxzoom || 22,
        bounds: tj.bounds || [-180, -90, 180, 90]
    };

    if (tj.bounds[0] == -180 && tj.bounds[1] == -90 &&
        tj.bounds[2] == 180 && tj.bounds[3] == 90) {
        this.tileLimits = [
            new MM.Coordinate(0,0,0).zoomTo(tj.minzoom),             // top left outer
            new MM.Coordinate(1,1,0).zoomTo(tj.maxzoom)
        ];
    } else {
        var p = new MM.MercatorProjection(0,
          MM.deriveTransformation(-Math.PI,  Math.PI, 0, 0,
               Math.PI,  Math.PI, 1, 0,
              -Math.PI, -Math.PI, 0, 1));

        this.tileLimits = [
            p.locationCoordinate(
                new MM.Location(tj.bounds[1], tj.bounds[0])).zoomTo(tj.minzoom),
            p.locationCoordinate(
                new MM.Location(tj.bounds[3], tj.bounds[2])).zoomTo(tj.maxzoom)
        ];
    }
};

wax.mm.connector.prototype = {
    getTile: function(c) {
        if (!(coord = this.sourceCoordinate(c))) return null;

        coord.row = (this.options.scheme === 'tms') ?
            Math.pow(2, coord.zoom) - coord.row - 1 :
            coord.row;

        return this.options.tiles[parseInt(Math.pow(2, coord.zoom) * coord.row + coord.column, 10) %
            this.options.tiles.length]
            .replace('{z}', coord.zoom.toFixed(0))
            .replace('{x}', coord.column.toFixed(0))
            .replace('{y}', coord.row.toFixed(0));
    }
};

// Wax shouldn't throw any exceptions if the external it relies on isn't
// present, so check for modestmaps.
if (MM) {
    MM.extend(wax.mm.connector, MM.MapProvider);
}

wax.mm.limit = function(tj) {
    var p = new MM.MercatorProjection(0);

    return [
        p.locationCoordinate(
            new MM.Location(tj.bounds[1], tj.bounds[0])).zoomTo(tj.minzoom),
        p.locationCoordinate(
            new MM.Location(tj.bounds[3], tj.bounds[2])).zoomTo(tj.maxzoom)
    ];
};
