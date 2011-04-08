// Wax: Legend Control
// -------------------
// Requires:
// 
// * modestmaps
// * wax.Legend

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

// A chaining-style control that adds
// interaction to a modestmaps.Map object.
com.modestmaps.Map.prototype.legend = function(options) {
    options = options || {};
    this.legend = new wax.Legend(this.parent, options.container);
    this.legend.render([
        this.provider.getTileUrl({
            zoom: 0,
            column: 0,
            row: 0
        })
    ]);
    return this;
};
