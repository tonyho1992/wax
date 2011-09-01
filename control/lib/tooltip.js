var wax = wax || {};
wax.tooltip = {};

wax.tooltip = function(options) {
    options = options || {};

    var tooltip = {},
        animationOut = options.animationOut,
        animationIn = options.animationIn;

    // Helper function to determine whether a given element is a wax popup.
    function isPopup(el) {
        return el && el.className.indexOf('wax-popup') !== -1;
    }

    // Get the active tooltip for a layer or create a new one if no tooltip exists.
    // Hide any tooltips on layers underneath this one.
    function getTooltip(feature, context, index, evt) {
        tooltip = document.createElement('div');
        tooltip.className = 'wax-tooltip wax-tooltip-' + index;
        tooltip.innerHTML = feature;
        context.appendChild(tooltip);
        return tooltip;
    }

    function closePopup() {
        hideTooltip(tooltip);
        _currentTooltip = undefined;
        ev.returnValue = false; // Prevents hash change.
        if (ev.stopPropagation) ev.stopPropagation();
        if (ev.preventDefault) ev.preventDefault();
        return false;
    }

    // Hide a given tooltip.
    function hideTooltip(el) {
        if (!el) return;
        var event;
        var remove = function() {
            if (this.parentNode) this.parentNode.removeChild(this);
        };
        if (el.style['-webkit-transition'] !== undefined && animationOut) {
            event = 'webkitTransitionEnd';
        } else if (el.style.MozTransition !== undefined && animationOut) {
            event = 'transitionend';
        }
        if (event) {
            el.addEventListener(event, remove, false);
            el.addEventListener('transitionend', remove, false);
            el.className += ' ' + animationOut;
        } else {
            if (el.parentNode) el.parentNode.removeChild(el);
        }
    }

    // Show a tooltip.
    tooltip.select = function(feature, context, layer_id, evt) {
        if (!feature) return;
        if (isPopup(_currentTooltip)) return;

        _currentTooltip = getTooltip(feature, context, layer_id, evt);
        context.style.cursor = 'pointer';
    };

    // Hide all tooltips on this layer and show the first hidden tooltip on the
    // highest layer underneath if found.
    tooltip.unselect = function(context) {
        if (isPopup(_currentTooltip)) return;

        context.style.cursor = 'default';
        if (_currentTooltip) {
            hideTooltip(_currentTooltip);
            _currentTooltip = undefined;
        }
    };

    // Expand a tooltip to be a "popup". Suspends all other tooltips from being
    // shown until this popup is closed or another popup is opened.
    tooltip.click = function(feature, context, index) {
        // Hide any current tooltips.
        this.unselect(context);

        var tooltip = getTooltip(feature, context, index);
        var close = document.createElement('a');
        close.href = '#close';
        close.className = 'close';
        close.innerHTML = 'Close';


        // IE compatibility.
        if (close.addEventListener) {
            close.addEventListener('click', closeClick, false);
        } else if (close.attachEvent) {
            close.attachEvent('onclick', closeClick);
        }

        tooltip.className += ' wax-popup';
        tooltip.innerHTML = feature;
        tooltip.appendChild(close);
        _currentTooltip = tooltip;
    };

    return tooltip;
};
