var wax = wax || {};
wax.ol = wax.ol || {};

wax.ol.connector = function(tilejson) {
    return new OpenLayers.Layer.XYZ(
        tilejson.name,
        tilejson.tiles, {
            zoomOffset: tilejson.minzoom,
            maxZoom: tilejson.maxzoom - tilejson.minzoom
        });
};
