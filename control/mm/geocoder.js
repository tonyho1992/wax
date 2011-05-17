// Wax: Geocoder
// -------------
//
// Requires: jQuery, jquery-jsonp

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

var geocoders = {
    mapquest: function(opts) {
        return function(location, callback) {
            $.jsonp({
                url: 'http://platform.beta.mapquest.com/geocoding/v1/address',
                data: {
                  key: opts.key,
                  location: location
                },
                callbackParameter: 'callback',
                context: this,
                success: function(data) {
                    // TODO: simplify
                    if (data.results && data.results.length && data.results[0].locations) {
                        callback(null, data.results[0].locations[0].latLng);
                    }
                },
                error: function() {
                    callback('Geocoding service could not be reached.');
                }
            });
        };
    }
};

com.modestmaps.Map.prototype.geocoder = function(opts) {
    var MM = com.modestmaps;

    this.geocoder = {
        geocode: function(location) {
            opts.geocoder(location, function(err, point) {
                if (!err) opts.success(new MM.Location(point.lat, point.lon));
            });
        }
    };
    return this;
};


