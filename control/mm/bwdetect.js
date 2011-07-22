wax = wax || {};
wax.mm = wax.mm || {};

// Bandwith Detection
// ------------------
wax.mm.bwdetect = function(map, options) {
    options = options || {};

    var detector = {},
        mm = com.modestmaps,
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

    function setProvider(x) {
        // More or less detect the Wax version
        if (!(x.options && x.options.scheme)) mm.Map.prototype.setProvider.call(map, x);
        var swap = [['.png', '.jpg'], [lowpng, lowjpg]];
        if (bw === 1) swap.reverse();
        for (var i = 0; i < x.options.tiles.length; i++) {
            x.options.tiles[i] = x.options.tiles[i]
                .replace(swap[0][0], swap[1][0])
                .replace(swap[0][1], swap[1][1]);
        }
        mm.Map.prototype.setProvider.call(map, x);
    }

    function testReturn() {
        var duration = (+new Date()) - start;
        if (duration > 200) detector.bw(0);
    }

    function bwTest() {
        var im = new Image();
        im.src = testImage;
        start = +new Date();
        mm.addEvent(im, 'load', testReturn);
    }

    detector.bw = function(x) {
        if (!arguments.length) return bw;
        if (bw !== (bw = x)) setProvider(map.provider);
    };

    detector.add = function(map) {
        map.setProvider = setProvider;
        if (options.auto) bwTest();
        return this;
    };

    return detector.add(map);
};
