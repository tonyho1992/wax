// Wrapper to support legacy Controls object interface.
wax = wax || {};

wax.g = wax.g || {};

wax.g.Controls = function(map) {
    this.map = map;
};

wax.g.Controls.prototype.legend = function(options) {
    return wax.g.legend(this.map, options);
};

wax.g.Controls.prototype.interaction = function(options) {
    return wax.g.interaction(this.map, options);
};

