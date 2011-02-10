// Zoom a map to a point on load
// The point is expected to be in `EPSG:4326`, and
// the map in `EPSG:900913`.
var OpenLayersWaxZoomOnLoad = function(opts, lon, lat, zoom) {
    if (opts) {
        pt = new OpenLayers.LonLat(lon, lat);
        pt.transform(new OpenLayers.Projection('EPSG:4326'),
            new OpenLayers.Projection('EPSG:900913'));
        $(opts).data('map').setCenter(pt, zoom);
    }
}
