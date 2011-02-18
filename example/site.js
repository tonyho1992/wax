var map;
$(window).load(function() {
    var l = new MbMapType();
    map = new google.maps.Map(
        document.getElementById("google-canvas"), {
            center: new google.maps.LatLng(0, 0),
            zoom: 2,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'mapbox']
            }
    });

    map.mapTypes.set('mb', l);

    // Set the default map to world light
    map.setMapTypeId('mb');

    // Add the MapBox logo to the map
    mbLogo(map);

    makeInteraction(map);
});
