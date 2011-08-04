wax = wax || {};
wax.g = wax.g || {};

// Bandwidth Detection
// ------------------
wax.g.bwdetect = function(map, options) {
    options = options || {};

    var detector = {},
        threshold = options.threshold || 400,
        // test image: 30.29KB
        testImage = 'http://a.tiles.mapbox.com/mapbox/1.0.0/blue-marble-topo-bathy-jul/0/0/0.png?preventcache=' + (+new Date()),
        // High-bandwidth assumed
        // 1: high bandwidth (.png, .jpg)
        // 0: low bandwidth (.png128, .jpg70)
        bw = 1,
        // Alternative versions
        lowpng = options.png || '.png128',
        lowjpg = options.jpg || '.jpg70',
        auto = options.auto === undefined ? true : options.auto;

    // Create a low-bandwidth map type.
    if (!map.mapTypes['mb-low']) {
        var mb = map.mapTypes['mb'];
        var tilejson = {
            tiles: [],
            scheme: mb.options.scheme,
            blankImage: mb.options.blankImage,
            minzoom: mb.minZoom,
            maxzoom: mb.maxZoom,
            name: mb.name,
            description: mb.description
        };
        for (var i = 0; i < mb.options.tiles.length; i++) {
            tilejson.tiles.push(mb.options.tiles[i]
                .replace('.png', lowpng)
                .replace('.jpg', lowjpg));
        }
        console.warn(tilejson);
        m.mapTypes.set('mb-low', new wax.g.connector(tilejson));
    }

    function testReturn() {
        var duration = (+new Date()) - start;
        if (duration > threshold) detector.bw(0);
    }

    function bwTest() {
        var im = new Image();
        im.src = testImage;
        start = +new Date();
        im.onload = testReturn;
    }

    detector.bw = function(x) {
        if (!arguments.length) return bw;
        if (bw != (bw = x)) map.setMapTypeId(bw ? 'mb' : 'mb-low');
    };

    detector.add = function(map) {
        if (auto) bwTest();
        return this;
    };

    return detector.add(map);
};
