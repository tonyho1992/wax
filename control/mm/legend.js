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

    legend.map = function(x) {
        if (!arguments.length) return map;
        map = x;
        return legend;
    };

    legend.add = function() {
        if (!map) return false;
        legend.appendTo(map.parent);
        return legend;
    };

    legend.remove = function() {
        if (legend.element().parentNode) {
            legend.element().parentNode.removeChild(legend.element());
        }
        return legend;
    };
        
    legend.appendTo = function(elem) {
        wax.u.$(elem).appendChild(l.element());
        return legend;
    };

    return legend;
};
