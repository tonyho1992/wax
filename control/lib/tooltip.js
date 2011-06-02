// Requires: jQuery
//
// Wax GridUtil
// ------------

// Wax header
var wax = wax || {};
wax.tooltip = {};

// TODO: make this a non-global
var _currentTooltip;

var waxRemoveTooltip = function() {
    this.parentNode.removeChild(this);
    if (_currentTooltip) {
        _currentTooltip = undefined;
    }
};

wax.tooltip = function(options) {
    options = options || {};
    if (options.animationOut) this.animationOut = options.animationOut;
    if (options.animationIn) this.animationIn = options.animationIn;
};

// Get the active tooltip for a layer or create a new one if no tooltip exists.
// Hide any tooltips on layers underneath this one.
wax.tooltip.prototype.getToolTip = function(feature, context, index, evt) {
    tooltip = document.createElement('div');
    tooltip.className = 'wax-tooltip wax-tooltip-' + index;
    tooltip.innerHTML = feature;
    context.appendChild(tooltip);
    return tooltip;
};

// Expand a tooltip to be a "popup". Suspends all other tooltips from being
// shown until this popup is closed or another popup is opened.
wax.tooltip.prototype.click = function(feature, context, index) {
    var tooltip = this.getToolTip(feature, context, index);
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
wax.tooltip.prototype.select = function(feature, context, layer_id, evt) {
    if (!feature) return;
    _currentTooltip = this.getToolTip(feature, context, layer_id, evt);
    context.style.cursor = 'pointer';
};


// Hide all tooltips on this layer and show the first hidden tooltip on the
// highest layer underneath if found.
wax.tooltip.prototype.unselect = function(context) {
    context.style.cursor = 'default';
    if (_currentTooltip) {
        // In WebKit browsers, support nice CSS animations.
        // This is possible in -moz browsers but will need writing.
        if (_currentTooltip.style['-webkit-animationName'] !== undefined && this.animationOut) {
            _currentTooltip.addEventListener('webkitAnimationEnd', waxRemoveTooltip, false);
            _currentTooltip.className += ' ' + this.animationOut;
        } else {
            _currentTooltip.parentNode.removeChild(_currentTooltip);
            _currentTooltip = undefined;
        }
    }
};

wax.tooltip.prototype.out = wax.tooltip.prototype.unselect;
wax.tooltip.prototype.over = wax.tooltip.prototype.select;
wax.tooltip.prototype.click = wax.tooltip.prototype.click;
