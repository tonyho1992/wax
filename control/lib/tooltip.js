var wax = wax || {};
wax.tooltip = {};

wax.tooltip = function() {
    var _ct, // current tooltip
        popped = false,
        animate = false,
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

        function remove() {
            if (parentNode) parentNode.removeChild(this);
            _ct = null;
        }

        if (_ct.style['-webkit-transition'] !== undefined) {
            event = 'webkitTransitionEnd';
        } else if (_ct.style.MozTransition !== undefined) {
            event = 'transitionend';
        }

        if (animate && event) {
            // This code assumes that transform-supporting browsers
            // also support proper events. IE9 does both.
            bean.add(_ct, event, remove);
            _ct.className += ' ' + o.animationOut;
        } else {
            if (_ct.parentNode) _ct.parentNode.removeChild(_ct);
            _ct = null;
        }
    }

    function on(o) {
        var content;
        if ((o.e.type === 'mousemove' || !o.e.type) && !popped) {
            content = o.formatter({ format: 'teaser' }, o.data);
            if (!content) return;
            parent.style.cursor = 'pointer';
            _ct = getTooltip(content);
            parent.appendChild(_ct);
        } else {
            hide();
            content = o.formatter({ format: 'full' }, o.data);
            if (!content) return;
            _ct = parent.appendChild(getTooltip(content));
            _ct.className += ' wax-popup';

            var close = _ct.appendChild(document.createElement('a'));
            close.href = '#close';
            close.className = 'close';
            close.innerHTML = 'Close';
            popped = true;

            bean.add(close, 'click touchend', function closeClick(e) {
                e.stop();
                hide();
                popped = false;
            });
        }
    }

    function off() {
        parent.style.cursor = 'default';
        if (!popped && _ct) hide();
    }

    t.parent = function(x) {
        if (!arguments.length) return parent;
        parent = x;
        return t;
    };

    t.animate = function(x) {
        if (!arguments.lenght) return animate;
        animate = x;
        return t;
    };

    t.events = function() {
        return {
            on: on,
            off: off
        };
    };

    return t;
};
