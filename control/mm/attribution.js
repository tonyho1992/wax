wax = wax || {};
wax.mm = wax.mm || {};

// Attribution
// -----------
// Attribution wrapper for Modest Maps.
wax.mm.attribution = function(map, options) {
    options = options || {};
    var attribution = {
        add: function() {
            this.attribution = new wax.Attribution(map.parent, options.container);
            this.attribution.render(options.attribution);
            this.attribution.container.className = 'wax-attribution wax-mm';
        }
    };
    return attribution.add();
};
