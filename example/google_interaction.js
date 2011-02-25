// Google Maps Interaction Example
var map;
$(window).load(function() {
    map = new google.maps.Map(
        document.getElementById("google-canvas"), {
            center: new google.maps.LatLng(0, 0),
            zoom: 2,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP]
            }
        }
    );

    // Create an assign the new maptype
    map.mapTypes.set('mapbox', new wax.g.MapType());
    map.setMapTypeId('mapbox');

    wax.g.Interaction(map);
    wax.g.Legend(map);
});
