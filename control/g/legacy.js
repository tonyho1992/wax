// Wrapper to support legacy Controls object interface.
wax = wax || {};

wax.g = wax.g || {};

wax.g.Controls = function(map) {
    this.map = map;
};

wax.g.Controls.prototype.legend = function(options) {
    return wax.legend(this.map, options);
};
wax.g.Controls.prototype.interaction = function(options) {

    return wax.interaction(this.map, options);
};

