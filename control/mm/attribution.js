wax = wax || {};
wax.mm = wax.mm || {};

// Attribution
// -----------
// Attribution wrapper for Modest Maps.
wax.mm.attribution = function(map, options) {
    options = options || {};
    var a, // internal attribution control
        attribution = {};

    attribution.element = function() {
        return a.element();
    };

    attribution.appendTo = function(elem) {
        elem.appendChild(a.element());
        return this;
    };

    attribution.init = function() {
        a = wax.attribution();
        a.set(options.attribution);
        return this;
    };

    return attribution.init();
};
