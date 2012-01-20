var wax = wax || {};
wax.tooltip = {};

wax.tooltip = function(o) {
    var _currentTooltip;
    o = o || {};

    // Helper function to determine whether a given element is a wax popup.
    function isPopup(el) {
        return el && el.className.indexOf('wax-popup') !== -1;
    }

    // Get the active tooltip for a layer or create a new one if no tooltip exists.
    // Hide any tooltips on layers underneath this one.
    function getTooltip(feature, context) {
        var tooltip = document.createElement('div');
        tooltip.className = 'wax-tooltip wax-tooltip-0';
        tooltip.innerHTML = feature;
        context.appendChild(tooltip);
        return tooltip;
    }

    // Hide a given tooltip.
    function hideTooltip(el) {
        if (!el) return;
        var event,
            remove = function() {
            if (parentNode) parentNode.removeChild(this);
        };

        if (el.style['-webkit-transition'] !== undefined && o.animationOut) {
            event = 'webkitTransitionEnd';
        } else if (el.style.MozTransition !== undefined && o.animationOut) {
            event = 'transitionend';
        }

        if (event) {
            // This code assumes that transform-supporting browsers
            // also support proper events. IE9 does both.
            el.addEventListener(event, remove, false);
            el.addEventListener('transitionend', remove, false);
            el.className += ' ' + o.animationOut;
        } else {
            if (el.parentNode) el.parentNode.removeChild(el);
        }
    }

    // Expand a tooltip to be a "popup". Suspends all other tooltips from being
    // shown until this popup is closed or another popup is opened.
    function click(feature, context) {
        // Hide any current tooltips.
        if (_currentTooltip) {
            hideTooltip(_currentTooltip);
            _currentTooltip = undefined;
        }

        var tooltip = getTooltip(feature, context);
        tooltip.className += ' wax-popup';
        tooltip.innerHTML = feature;

        var close = document.createElement('a');
        close.href = '#close';
        close.className = 'close';
        close.innerHTML = 'Close';
        tooltip.appendChild(close);

        function closeClick(ev) {
            hideTooltip(tooltip);
            _currentTooltip = undefined;
            ev.returnValue = false; // Prevents hash change.
            if (ev.stopPropagation) ev.stopPropagation();
            if (ev.preventDefault) ev.preventDefault();
            return false;
        }

        // IE compatibility.
        if (close.addEventListener) {
            close.addEventListener('click', closeClick, false);
            close.addEventListener('touchend', closeClick, false);
        } else if (close.attachEvent) {
            close.attachEvent('onclick', closeClick);
        }

        _currentTooltip = tooltip;
    }

    // Show a tooltip.
    function over(feature, context) {
        if (!feature) return;
        context.style.cursor = 'pointer';

        if (this.isPopup(this._currentTooltip)) {
            return;
        } else {
            this._currentTooltip = this.getTooltip(feature, context);
        }
    }

    // Hide all tooltips on this layer and show the first hidden tooltip on the
    // highest layer underneath if found.
    function out(context) {
        context.style.cursor = 'default';

        if (isPopup(_currentTooltip)) {
            return;
        } else if (_currentTooltip) {
            hideTooltip(_currentTooltip);
            _currentTooltip = undefined;
        }
    }
};



