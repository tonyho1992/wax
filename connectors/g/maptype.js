// Wax for Google Maps API v3
// --------------------------

// Wax header
var wax = wax || {};
wax.g = wax.g || {};

// Wax Google Maps MapType: takes an object of options in the form
//
//     {
//       name: '',
//       alt: '',
//       minZoom: 0,
//       minZoom: 18,
//       baseUrl: 'a url',
//     }
wax.g.MapType = function(options) {
    options = options || {};
    this.name = options.name || '';
    this.alt = options.alt || '';
    this.maxZoom = options.maxZoom || 18;
    this.minZoom = options.minZoom || 0;
    this.baseUrl = options.baseUrl ||
        'http://a.tile.mapbox.com/1.0.0/world-light';

    // non-configurable options
    this.interactive = true;
    this.tileSize = new google.maps.Size(256, 256);
};

// Get a tile element from a coordinate, zoom level, and an ownerDocument.
wax.g.MapType.prototype.getTile = function(coord, zoom, ownerDocument) {
  return $('<div></div>')
        .addClass('interactive-div-' + zoom)
        .width(256).height(256).append(
            $('<img />').attr('src', this.getTileUrl(coord, zoom))
            .width(256).height(256))[0];
};

// Remove a tile that has fallen out of the map's viewport.
//
// TODO: expire cache data.
wax.g.MapType.prototype.releaseTile = function(tile) {
    $(tile).remove();
};

// Get a tile url, based on x, y coordinates and a z value.
wax.g.MapType.prototype.getTileUrl = function(coord, z) {
    // Y coordinate is flipped in Mapbox, compared to Google
    return this.baseUrl + '/' + z +
        '/' + coord.x + '/' + Math.abs(coord.y - (Math.pow(2, z) - 1)) + '.png';
};
