var wax = wax || {};
wax.tooltip = {};

wax.tooltip = function(o) {
    o = o || {};

    var _ct, // current tooltip
        popped = false,
        t = {},
        parent;

    // Get the active tooltip for a layer or create a new one if no tooltip exists.
    // Hide any tooltips on layers underneath this one.
    function getTooltip(feature) {
        var tooltip = document.createElement('div');
        tooltip.className = 'wax-tooltip wax-tooltip-0';
        tooltip.innerHTML = feature;
        return tooltip;
    }

    // Hide a given tooltip.
    function hide() {
        if (!_ct) return;
        var event;

        if (_ct.style['-webkit-transition'] !== undefined && o.animationOut) {
            event = 'webkitTransitionEnd';
        } else if (_ct.style.MozTransition !== undefined && o.animationOut) {
            event = 'transitionend';
        }

        function remove() {
            if (parentNode) parentNode.removeChild(this);
        }

        if (event) {
            // This code assumes that transform-supporting browsers
            // also support proper events. IE9 does both.
            bean.add(_ct, event, remove);
            _ct.className += ' ' + o.animationOut;
        } else {
            if (_ct.parentNode) _ct.parentNode.removeChild(_ct);
        }
    }

    // Expand a tooltip to be a "popup". Suspends all other tooltips from being
    // shown until this popup is closed or another popup is opened.
    function click(feature) {
        // Hide any current tooltips.
        if (_currentTooltip) {
            hideTooltip(_currentTooltip);
            _currentTooltip = undefined;
        }

        var tooltip = getTooltip(feature);
        tooltip.className += ' wax-popup';
        tooltip.innerHTML = feature;

        var close = document.createElement('a');
        close.href = '#close';
        close.className = 'close';
        close.innerHTML = 'Close';
        tooltip.appendChild(close);
        popped = true;

        parent.appendChild(tooltip);

        bean.add(close, 'click touchend', function closeClick(e) {
            e.stop();
            hideTooltip(tooltip);
            _ct = undefined;
            popped = false;
        });

        _currentTooltip = tooltip;
    }

    // Show a tooltip.
    function over(feature) {
        if (!feature) return;
        parent.style.cursor = 'pointer';

        if (!popped) {
            _ct = getTooltip(feature);
            parent.appendChild(_ct);
        }
    }

    // Hide all tooltips on this layer and show the first hidden tooltip on the
    // highest layer underneath if found.
    function out(feature) {
        context.style.cursor = 'default';

        if (!popped && _ct) {
            hideTooltip(_ct);
            _ct = undefined;
        }
    }

    t.parent = function(x) {
        if (!arguments.length) return parent;
        parent = x;
        return t;
    };

    return t;
};
