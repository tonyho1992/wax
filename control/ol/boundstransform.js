// Wax BoundsTransform
// -------------------

// Wax header
var wax = wax || {};
wax.ol = wax.ol || {};

// Bounds object with built-in transformation step. Useful for setting
// `maxExtent` of a layer from wax when a reprojection is required.
wax.ol.BoundsTransform = OpenLayers.Class(OpenLayers.Bounds, {
    initialize: function(left, bottom, right, top, from, to) {
        OpenLayers.Bounds.prototype.initialize.call(this, left, bottom, right, top);
        this.transform(
            new OpenLayers.Projection(from),
            new OpenLayers.Projection(to)
        );
    }
});
