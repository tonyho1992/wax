// Requires: jQuery
//
// Wax GridUtil
// ------------

// Wax header
var wax = wax || {};
wax.tooltip = {};

// TODO: make this a non-global
var _currentTooltip;

// Get the active tooltip for a layer or create a new one if no tooltip exists.
// Hide any tooltips on layers underneath this one.
wax.tooltip.getToolTip = function(feature, context, index, evt) {
    tooltip = document.createElement('div');
    tooltip.className = 'wax-tooltip wax-tooltip-' + index;
    tooltip.innerHTML = feature;
    context.appendChild(tooltip);
    return tooltip;
};

// Expand a tooltip to be a "popup". Suspends all other tooltips from being
// shown until this popup is closed or another popup is opened.
wax.tooltip.click = function(feature, context, index) {
    var tooltip = wax.tooltip.getToolTip(feature, context, index);
    var close = document.createElement('a');
    close.href = '#close';
    close.className = 'close';
    close.innerHTML = 'Close';
    close.addListener('click', function() {
        tooltip.parentNode.removeChild(tooltip);
        return false;
    });
    tooltip.className += ' wax-popup';
    tooltip.innerHTML = feature;
    tooltip.appendChild(close);
};

// Show a tooltip.
wax.tooltip.select = function(feature, context, layer_id, evt) {
    if (!feature) return;
    _currentTooltip = wax.tooltip.getToolTip(feature, context, layer_id, evt);
    context.style.cursor = 'pointer';
};

// Hide all tooltips on this layer and show the first hidden tooltip on the
// highest layer underneath if found.
wax.tooltip.unselect = function(feature, context, layer_id, evt) {
    context.style.cursor = 'default';
    if (_currentTooltip) {
      _currentTooltip.parentNode.removeChild(_currentTooltip);
      _currentTooltip = undefined;
    }
};
