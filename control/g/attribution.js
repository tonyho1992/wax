wax = wax || {};
wax.g = wax.g || {};

// Attribution
// -----------
// Attribution wrapper for Google Maps API.
wax.g.attribution = function(map, options) {
    options = options || {};
    var attribution = {
        add: function() {
            this.attribution = new wax.Attribution(map.getDiv(), options.container);
            this.attribution.render(options.attribution);
            this.attribution.container.className = 'wax-attribution wax-g';
        }
    };
    return attribution.add();
};
