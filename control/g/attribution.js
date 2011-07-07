wax = wax || {};
wax.g = wax.g || {};

// Attribution
// -----------
// Attribution wrapper for Google Maps API.
wax.g.attribution = function(map, options) {
    options = options || {};
    var attribution = {
        add: function() {
            this.attribution = new wax.Attribution(map.getDiv(), options.container, 'wax-g');
            this.attribution.render(options.attribution);
        }
    };
    return attribution.add();
};
