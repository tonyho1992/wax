wax = wax || {};
wax.mm = wax.mm || {};

wax.mm.legend = function() {
    var l = wax.legend(), // parent legend
        legend = {};

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

    return legend;
};
