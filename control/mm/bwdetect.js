wax = wax || {};
wax.mm = wax.mm || {};

// Bandwith Detection
// ------------------
wax.mm.bwdetect = function(map, options) {
    options = options || {};

    var detector = {},
        threshold = options.threshold || 400,
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
        if (bw) swap.reverse();
        for (var i = 0; i < x.options.tiles.length; i++) {
            x.options.tiles[i] = x.options.tiles[i]
                .replace(swap[0][0], swap[1][0])
                .replace(swap[0][1], swap[1][1]);
        }
        mm.Map.prototype.setProvider.call(map, x);
    }

    function bwTest() {
        wax.bw = -1;
        var im = new Image();
        im.src = testImage;
        var first = true;
        var timeout = setTimeout(function() {
            if (first) {
                detector.bw(0);
                first = false;
            }
        }, threshold);
        mm.addEvent(im, 'load', function() {
            if (first) {
                clearTimeout(timeout);
                detector.bw(1);
                first = false;
            }
        });
    }

    detector.bw = function(x) {
        if (!arguments.length) return bw;
        if (wax.bwlisteners && wax.bwlisteners.length) (function () {
            wax.bw = x;
            listeners = wax.bwlisteners;
            wax.bwlisteners = [];
            for (i = 0; i < listeners; i++) {
                listeners[i](x);
            }
        })();

        if (bw != (bw = x)) setProvider(map.provider);
    };

    detector.add = function(map) {
        map.setProvider = setProvider;
        if (auto) bwTest();
        return this;
    };

    if (wax.bw == -1) {
      wax.bwlisteners = wax.bwlisteners || [];
      wax.bwlisteners.push(detector.bw);
    }
    else if (wax.bw != undefined) {
        detector.bw(wax.bw);
    }
    else {
        return detector.add(map);
    }
};
