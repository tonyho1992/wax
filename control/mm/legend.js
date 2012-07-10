wax = wax || {};
wax.mm = wax.mm || {};

wax.mm.legend = function(map, tilejson) {
    tilejson = tilejson || {};
    var l, // parent legend
        legend = {};

    legend.add = function() {
        l = wax.legend()
            .content(tilejson.legend);
        return legend;
    };

    legend.content = function(x) {
        if (!arguments.length) return l.content();
        l.content(legend);
        return legend;
    };

    legend.element = function() {
        return l.element();
    };

    legend.appendTo = function(elem) {
        wax.u.$(elem).appendChild(l.element());
        return legend;
    };

    return legend.add();
};
