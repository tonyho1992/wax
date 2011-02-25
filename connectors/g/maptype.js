// Wax for Google Maps API v3
// --------------------------

// Wax header
var wax = wax || {};
wax.g = wax.g || {};

// MapBox connector for Google Maps API v3.
wax.g.mapBoxLogo = function(map) {
    var logoDiv = document.createElement('DIV');
    logoDiv.innerHTML = '<a href="http://mapbox.com">'
        + '<img src="http://mapbox-js.s3.amazonaws.com/img/mapbox.png"></a>';
    map.controls[google.maps.ControlPosition.BOTTOM_RIGHT]
        .push(logoDiv);
};

wax.g.MapType = function(options) {
    this.interactive = true;
    this.name = options.name || '';
    this.alt = options.alt || '';
    this.maxZoom = options.maxZoom : 18;
    this.minZoom = options.minZoom : 0;
};

wax.g.MapType.prototype.tileSize = new google.maps.Size(256, 256);

wax.g.MapType.prototype.getTile = function(coord, zoom, ownerDocument) {
  // TODO: handle out-of-map tiles
  var div = ownerDocument.createElement('DIV');
  div.style.width = this.tileSize.width + 'px';
  div.style.height = this.tileSize.height + 'px';
  $(div).addClass('interactive-div-' + zoom);
  var img = ownerDocument.createElement('IMG');
  img.setAttribute('src', this.getTileUrl(coord, zoom));
  img.style.width = '256px';
  img.style.height = '256px';
  div.appendChild(img);
  return div;
};

wax.g.MapType.prototype.releaseTile = function(tile) {
    // TODO: expire cache data.
    tile.parentNode.removeChild(tile);
};

wax.g.MapType.prototype.getTileUrl = function(coord, z) {
    // Y coordinate is flipped in Mapbox, compared to Google
    // Simplistic predictable hashing
    return 'http://'
        + 'localhost:9000/1.0.0/' + // options.tileset
        'inter_10c67f'
        + '/' + z
        + '/' + coord.x
        + '/' + Math.abs(coord.y - (Math.pow(2, z) - 1)) + '.png';
};
