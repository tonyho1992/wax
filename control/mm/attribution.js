wax = wax || {};
wax.mm = wax.mm || {};

wax.mm.attribution = function(map, tilejson) {
    tilejson = tilejson || {};

    var a, // internal attribution control
        attribution = {};

    attribution.element = function() {
        return a.element();
    };

    attribution.map = function(x) {
        if (!arguments.length) return map;
        map = x;
        return attribution;
    };

    attribution.add = function() {
        if (!map) return false;
        map.parent.appendChild(a.element());
        return attribution;
    };

    attribution.remove = function() {
        if (!map) return false;
        if (a.element().parentNode) a.element().parentNode.removeChild(a.element());
        return attribution;
    };

    attribution.appendTo = function(elem) {
        wax.u.$(elem).appendChild(a.element());
        return attribution;
    };

    attribution.init = function() {
        a = wax.attribution();
        a.content(tilejson.attribution);
        a.element().className = 'map-attribution map-mm';
        return attribution;
    };

    return attribution.init();
};
