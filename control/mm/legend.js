wax = wax || {};
wax.mm = wax.mm || {};

// Legend Control
// --------------
// The Modest Maps version of this control is a very, very
// light wrapper around the `/lib` code for legends.
wax.mm.legend = function(map, options) {
    options = options || {};
    var l, // parent legend
        legend = {};

    legend.add = function() {
        l = wax.Legend(map.parent);
        if (options.legend) {
            l.write(options.legend);
        } else {
            l.render([
                map.provider.getTileUrl({
                    zoom: 0,
                    column: 0,
                    row: 0
                })
            ]);
        }
        return this;
    };

    legend.element = function() {
        return l.element();
    };

    legend.appendTo = function(elem) {
        elem.appendChild(l.element());
        return this;
    };

    return legend.add(map);
};
