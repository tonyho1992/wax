// Wax for Google Maps API v3
// --------------------------

// Wax header
var wax = wax || {};
wax.g = wax.g || {};

// Wax Google Maps MapType: takes an object of options in the form
//
//     {
//       name: '',
//       filetype: '.png',
//       layerName: 'world-light',
//       alt: '',
//       zoomRange: [0, 18],
//       baseUrl: 'a url',
//     }
wax.g.MapType = function(options) {
    options = options || {};
    this.name = options.name || '';
    this.alt = options.alt || '';
    this.filetype = options.filetype || '.png';
    this.layerName = options.layerName || 'world-light';
    if (options.zoomRange) {
        this.minZoom = options.zoomRange[0];
        this.maxZoom = options.zoomRange[1];
    } else {
        this.minZoom = 0;
        this.maxZoom = 18;
    }
    this.baseUrl = options.baseUrl ||
        'http://a.tile.mapbox.com/';
    this.blankImage = options.blankImage || '';

    // non-configurable options
    this.interactive = true;
    this.tileSize = new google.maps.Size(256, 256);

    // DOM element cache
    this.cache = {};
};

// Get a tile element from a coordinate, zoom level, and an ownerDocument.
wax.g.MapType.prototype.getTile = function(coord, zoom, ownerDocument) {
    var key = zoom + '/' + coord.x + '/' + coord.y;
    if (!this.cache[key]) {
        this.cache[key] = document.createElement('div');
        this.cache[key].className = 'interactive-div-' + zoom;
        this.cache[key].style.width = 256;
        this.cache[key].style.height = 256;
        this.cache[key].setAttribute('gTileKey', key);
        var img = document.createElement('img');
        img.width = 256;
        img.height = 256;
        img.src = this.getTileUrl(coord, zoom);
        img.onerror = function() { img.style.display = 'none'; };
        this.cache[key].appendChild(img);
    }
    return this.cache[key];
};

// Remove a tile that has fallen out of the map's viewport.
//
// TODO: expire cache data in the gridmanager.
wax.g.MapType.prototype.releaseTile = function(tile) {
    var key = tile.getAttribute('gTileKey');
    this.cache[key] && delete this.cache[key];
    tile.parentNode && tile.parentNode.removeChild(tile);
};

// Get a tile url, based on x, y coordinates and a z value.
wax.g.MapType.prototype.getTileUrl = function(coord, z) {
    // Y coordinate is flipped in Mapbox, compared to Google
    var mod = Math.pow(2, z),
        y = (mod - 1) - coord.y,
        x = (coord.x % mod);
        x = (x < 0) ? (coord.x % mod) + mod : x;

    return (y >= 0)
        ? (this.baseUrl + '1.0.0/' + this.layerName + '/' + z + '/' +
           x + '/' + y + this.filetype)
        : this.blankImage;
};
