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
            _ct = null;
        }

        if (event) {
            // This code assumes that transform-supporting browsers
            // also support proper events. IE9 does both.
            bean.add(_ct, event, remove);
            _ct.className += ' ' + o.animationOut;
        } else {
            if (_ct.parentNode) _ct.parentNode.removeChild(_ct);
            _ct = null;
        }
    }

    // Expand a tooltip to be a "popup". Suspends all other tooltips from being
    // shown until this popup is closed or another popup is opened.
    function click(feature) {
        // Hide any current tooltips.
        if (_currentTooltip) {
            hide();
        }

        var tooltip = parent.appendChild(getTooltip(feature));
        tooltip.className += ' wax-popup';
        tooltip.innerHTML = feature;

        var close = tooltip.appendChild(document.createElement('a'));
        close.href = '#close';
        close.className = 'close';
        close.innerHTML = 'Close';
        popped = true;

        bean.add(close, 'click touchend', function closeClick(e) {
            e.stop();
            hide();
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
        if (!popped && _ct) hide();
    }

    t.parent = function(x) {
        if (!arguments.length) return parent;
        parent = x;
        return t;
    };

    return t;
};
