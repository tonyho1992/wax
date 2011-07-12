wax = wax || {};
wax.g = wax.g || {};

// Legend Control
// --------------
// Adds legends to a google Map object.
wax.g.legend = function(map, options) {
    options = options || {};
    var l, // parent legend
        legend = {};

    legend.add = function() {
        l = wax.legend()
            .content(options.legend || '');
        return this;
    };

    legend.element = function() {
        return l.element();
    };

    legend.appendTo = function(elem) {
        wax.util.$(elem).appendChild(l.element());
        return this;
    };

    return legend.add();
};
