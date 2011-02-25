// Wax header
var wax = wax || {};
wax.g = wax.g || {};

wax.g.Legend = function(map) {
    var legend = new wax.Legend($(map.d)),
        url = null;

    // Ideally we would use the 'tilesloaded' event here. This doesn't seem to
    // work so we use the much less appropriate 'idle' event.
    google.maps.event.addListener(map, 'idle', function() {
        if (url) return;
        var img = $('.interactive-div-' + map.getZoom() + ' img:first', map.d);
        img && (url = img.attr('src')) && legend.render([url]);
    });
};

