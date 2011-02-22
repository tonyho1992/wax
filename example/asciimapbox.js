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

wax.g.ASCIIMapType = function() {
    this.interactive = true;
};

wax.g.ASCIIMapType.prototype.tileSize = new google.maps.Size(256, 256);
wax.g.ASCIIMapType.prototype.maxZoom = 19;

wax.g.gridReadDone = function(data, pre) {
  $(pre).html(data.grid.join('\n'));
};

wax.g.ASCIIMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
  // TODO: handle out-of-map tiles
  var pre = ownerDocument.createElement('PRE');
  pre.style.width = this.tileSize.width + 'px';
  pre.style.height = this.tileSize.height + 'px';
  $(pre).addClass('interactive-pre');
  $(pre).addClass('interactive-div-' + zoom);
  $.jsonp({
    url: this.getTileUrl(coord, zoom),
    context: this,
    success: function(data) {
      return wax.g.gridReadDone(data, pre);
    },
    error: function() {},
    callback: 'grid',
    callbackParameter: 'callback'
  });
  return pre;
};

wax.g.ASCIIMapType.prototype.releaseTile = function(tile) {
    // TODO: expire cache data.
    tile.parentNode.removeChild(tile);
};

wax.g.ASCIIMapType.prototype.getTileUrl = function(coord, z) {
    // Y coordinate is flipped in Mapbox, compared to Google
    // Simplistic predictable hashing
    return 'http://'
        + 'localhost:9000/1.0.0/' + // options.tileset
        'inter_10c67f'
        + '/' + z
        + '/' + coord.x
        + '/' + Math.abs(coord.y - (Math.pow(2, z) - 1)) + '.grid.json';
};

wax.g.ASCIIMapType.prototype.name = 'Raw MB';
wax.g.ASCIIMapType.prototype.alt = 'world light';
