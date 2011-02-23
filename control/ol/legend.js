// Wax: Legend Control
// -------------------

// Wax header
var wax = wax || {};
wax.ol = wax.ol || {};

wax.ol.Legend = OpenLayers.Class(OpenLayers.Control, {
    CLASS_NAME: 'wax.ol.Legend',
    container: null,
    attached: false,

    initialize: function(options) {
        options = options || {};
        this.container = options.container || null;
        OpenLayers.Control.prototype.initialize.apply(this, [options || {}]);
    },

    activate: function() {
        // Append an OL legends container div if not provided.
        if (!this.container) {
            this.container = $('<div class="wax-legends"></div>');
            this.attached = true;
            $(this.map.viewPortDiv).append(this.container);
        }
        return OpenLayers.Control.prototype.activate.apply(this, arguments);
    },

    deactivate: function() {
        // Tear down OL legends container.
        if (this.attached) {
            this.container.remove();
            delete this.container;
        }
        return OpenLayers.Control.prototype.deactivate.apply(this, arguments);
    },

    // Add handlers to the map
    setMap: function(map) {
      OpenLayers.Control.prototype.setMap.apply(this, arguments);
      this.activate();
      this.map.events.on({
          "addlayer": this.setLegend,
          "changelayer": this.setLegend,
          "removelayer": this.setLegend,
          "changebaselayer": this.setLegend,
          scope: this
      });
    },

    setLegend: function(layer) {
        for (var i = 0; i < this.map.layers.length; i++) {
            var layer = this.map.layers[i],
                url = this.legendUrl(layer);
            if ('legend' in layer) {
                this.render(layer);
            } else if (url) {
                return $.jsonp({
                    'url': url,
                    context: this,
                    success: function(data) {
                        (data && data.legend) && (layer.legend = data.legend);
                        this.render(layer);
                    },
                    error: function() {
                        layer.legend = false;
                    },
                    callback: layer.layername, // @TODO make callback safe
                    callbackParameter: 'callback'
                });
            }
        }
    },

    render: function(layer) {
        // Layer has no legend. Do nothing.
        if (!layer.legend) return;
        // Layer is visible but so is legend. Do nothing.
        if (layer.visibility && ('legendDiv' in layer)) return;
        // Hide legend if layer is no longer visible.
        if (!layer.visibility && ('legendDiv' in layer)) {
            layer.legendDiv.remove();
            delete layer.legendDiv;
            return;
        }
        layer.legendDiv = $("<div class='wax-legend'></div>").append(layer.legend);
        this.container.append(layer.legendDiv);
    },

    // Generate the legend URL from the layer tile URL.
    legendUrl: function(layer) {
        var url = layer.getURL(new OpenLayers.Bounds());
        return url.replace(/\d+\/\d+\/\d+\.\w+/, 'layer.json');
    }
});

