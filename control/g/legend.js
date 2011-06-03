wax = wax || {};

// Adds legends to a google Map object.
wax.legend = function(map, options) {
    options = options || {};
    var legend = {
        add: function() {
            var url;
            this.legend = new wax.Legend(map.getDiv(), options.container);
            // Ideally we would use the 'tilesloaded' event here. This doesn't seem to
            // work so we use the much less appropriate 'idle' event.
            google.maps.event.addListener(map, 'idle', wax.util.bind(function() {
                if (url) return;

                // Get a tile URL for each relevant layer, from which legend URLs
                // are derived.
                url = [];
                for (var i in map.mapTypes) {
                    if (!map.mapTypes[i].interactive) continue;
                    var mapType = map.mapTypes[i];
                    for (var key in mapType.cache) {
                        url.push(mapType.cache[key].src);
                        break;
                    }
                };
                url.length && this.legend.render(url);
            }, this));
            return this;
        }
    };
    return legend.add(map);
};

