// Wax: Legend Control
// -------------------
// Requires:
//
// * modestmaps
// * wax.Legend

// namespacing!
wax = wax || {};

// The Modest Maps version of this control is a very, very
// light wrapper around the `/lib` code for legends.
wax.legend = function(map, options) {
    options = options || {};
    var legend = {
        add: function() {
            this.legend = new wax.Legend(map.parent, options.container);
            this.legend.render([
                map.provider.getTileUrl({
                    zoom: 0,
                    column: 0,
                    row: 0
                })
            ]);
        }
    };
    return legend.add(map);
};
