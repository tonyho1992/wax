// Wax: Legend Control
// -------------------

// Wax header
var wax = wax || {};
wax.ol = wax.ol || {};

wax.ol.Switcher = OpenLayers.Class(OpenLayers.Control, {
    CLASS_NAME: 'wax.ol.Switcher',

    initialize: function(options) {
        this.$element = $(options.e);
        this.options = options || {};
        OpenLayers.Control.prototype.initialize.apply(this, [options || {}]);
    },

    layerClick: function(evt) {
      var element = evt.currentTarget;
      var layer = $(element).data('layer');
      $('.layers.data .layers-content .activated').removeClass('activated');
      $.each(this.map.getLayersBy('isBaseLayer', false),
        function() {
          if (this.CLASS_NAME !== 'OpenLayers.Layer.Vector.RootContainer' &&
             this.displayInLayerSwitcher) {
            this.setVisibility(false);
          }
        }
      );
      layer.setVisibility(true);
      $(element).addClass('activated');
    },

    needsRedraw: function() {
        if (!this.layerStates || this.layerStates.length || (this.map.layers.length != this.layerStates.length)) {
            return true;
        }
        for (var i = 0, len = this.layerStates.length; i < len; i++) {
            var layerState = this.layerStates[i];
            var layer = this.map.layers[i];
            if ((layerState.name != layer.name) ||
                (layerState.inRange != layer.inRange) ||
                (layerState.id != layer.id) ||
                (layerState.visibility != layer.visibility)) {
              return true;
            }
        }
        return false;
    },

    redraw: function() {
      if (this.needsRedraw()) {
        // Clear out previous layers
        /*
        $('.layers.base .layers-content div', this.blockswitcher).remove();
        $('.layers.data .layers-content div', this.blockswitcher).remove();
        $('.layers.base', this.blockswitcher).hide();
        $('.layers.data', this.blockswitcher).hide();
        */
        this.$element.html('');

        // Save state -- for checking layer if the map state changed.
        // We save this before redrawing, because in the process of redrawing
        // we will trigger more visibility changes, and we want to not redraw
        // and enter an infinite loop.
        var len = this.map.layers.length;
        this.layerStates = [];
        for (var i = 0; i < len; i++) {
          var layerState = this.map.layers[i];
          this.layerStates[i] = {
              name: layerState.name,
              visibility: layerState.visibility,
              inRange: layerState.inRange,
              id: layerState.id
          };
        }

        var layers = this.map.layers.slice();
        for (i = 0, len = layers.length; i < len; i++) {
          var layer = layers[i];
          if (layer.displayInLayerSwitcher) {
            // Only check a baselayer if it is *the* baselayer, check data layers if they are visible
            var checked = layer.isBaseLayer ? (layer === this.map.baseLayer) : layer.getVisibility();
            var clickLayer = $.proxy(function(e) { this.layerClick(e); return false; }, this);
            var $layer_element = $('<a></a>');
            // Add states and click handler
            $layer_element
                .click(clickLayer)
                .attr('href', '#')
                .text(layer.name)
                .addClass('layer-toggle')
                .data('layer', layer)
                .attr('disabled', !layer.inRange);
                if (checked) {
                  $layer_element.addClass('activated');
                }
            }
            this.$element.append($layer_element);
          }
        }
    },

    setMap: function(map) {
        OpenLayers.Control.prototype.setMap.apply(this, arguments);
        this.map.events.on({
            'addlayer': this.redraw,
            'changelayer': this.redraw,
            'removelayer': this.redraw,
            'changebaselayer': this.redraw,
            scope: this
        });
        this.redraw();
    }
});
