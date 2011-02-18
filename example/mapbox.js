// MapBox connector for Google Maps API v3.

function mbLogo(map) {
    var logoDiv = document.createElement('DIV');
    logoDiv.innerHTML = '<a href="http://mapbox.com">'
        + '<img src="http://mapbox-js.s3.amazonaws.com/img/mapbox.png"></a>';
    map.controls[google.maps.ControlPosition.BOTTOM_RIGHT]
        .push(logoDiv);
};

function MbMapType() {
    this.interactive = true;
}

MbMapType.prototype.tileSize = new google.maps.Size(256,256);
MbMapType.prototype.maxZoom = 19;

MbMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
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

MbMapType.prototype.releaseTile = function(tile) {
    // TODO: expire cache data.
    tile.parentNode.removeChild(tile);
};

MbMapType.prototype.getTileUrl = function(coord, z) {
    // Y coordinate is flipped in Mapbox, compared to Google
    // Simplistic predictable hashing
    return 'http://'
        + ['a', 'b', 'c', 'd'][(coord.x + coord.y) % 4]
        + '.tile.mapbox.com/1.0.0/' + // options.tileset
        'world-light'
        + '/' + z
        + '/' + coord.x
        + '/' + Math.abs(coord.y - (Math.pow(2, z) - 1)) + '.png';
};

MbMapType.prototype.getThing = function(coord, z) {
    return 'true';
};

MbMapType.prototype.name = "Raw MB";
MbMapType.prototype.alt = "world light";
