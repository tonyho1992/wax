wax = wax || {};
wax.mm = wax.mm || {};

// Attribution
// -----------
// Attribution wrapper for Modest Maps.
wax.mm.attribution = function(map, options) {
    options = options || {};
    var a, // internal attribution control
        attribution = {};

    attribution.add = function() {
        a = new wax.Attribution(map.parent);
        a.render(options.attribution);
        a.container.className = 'wax-attribution wax-mm';
    };

    return attribution.add();
};
