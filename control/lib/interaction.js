wax = wax || {};

wax.interaction = function() {
    var gm = wax.gm(),
        clickAction = ['full', 'location'],
        eventoffset = wax.u.eventoffset,
        interaction = {},
        _downLock = false,
        _clickTimeout = false,
        // Active feature
        _af,
        // Down event
        _d,
        // Touch tolerance
        tol = 4,
        tileGrid;

    var clickHandler = function(url) {
        window.top.location = url;
    };

    var defaultEvents = {
        mousemove: onMove,
        touchstart: onDown,
        mousedown: onDown
    };

    var touchEnds = {
        touchend: onUp,
        touchmove: onUp,
        touchcancel: touchCancel
    };

    // Abstract getTile method. Depends on a tilegrid with
    // grid[ [x, y, tile] ] structure.
    function getTile(e) {
        for (var i = 0, g = grid(); i < grid.length; i++) {
            if ((g[i][0] < e.y) &&
               ((g[i][0] + 256) > e.y) &&
                (g[i][1] < e.x) &&
               ((g[i][1] + 256) > e.x)) return g[i][2];
        }
        return false;
    }

    // Clear the double-click timeout to prevent double-clicks from
    // triggering popups.
    function killTimeout() {
        if (_clickTimeout) {
            window.clearTimeout(_clickTimeout);
            _clickTimeout = null;
            return true;
        } else {
            return false;
        }
    }

    function onMove(e) {
        // If the user is actually dragging the map, exit early
        // to avoid performance hits.
        if (_downLock) return;
        if (e.target.className !== 'map-tile-loaded') return;

        var pos = eventoffset(e),
            tile = getTile(pos),
            feature;

        if (tile) gm.getGrid(tile.src, function(err, g) {
            if (err || !g) return;
            feature = g.tileFeature(pos.x, pos.y, tile, {
                format: 'teaser'
            });
            if (feature) {
                if (feature && _af !== feature) {
                    _af = feature;
                    bean.fire(interaction, 'on', {
                        parent: map.parent,
                        feature: feature,
                        e: e
                    });
                } else if (!feature) {
                    _af = null;
                    bean.fire(interaction, 'off');
                }
            } else {
                _af = null;
                bean.fire(interaction, 'off');
            }
        });
    }

    // A handler for 'down' events - which means `mousedown` and `touchstart`
    function onDown(e) {
        if (e.target.className !== 'map-tile-loaded') return;
        // Ignore double-clicks by ignoring clicks within 300ms of
        // each other.
        if (killTimeout()) { return; }

        // Prevent interaction offset calculations happening while
        // the user is dragging the map.
        //
        // Store this event so that we can compare it to the
        // up event
        _downLock = true;
        _d = eventoffset(e);
        if (e.type === 'mousedown') {
            bean.add(document.body, 'mouseup', onUp);

        // Only track single-touches. Double-touches will not affect this
        // control
        } else if (e.type === 'touchstart' && e.touches.length === 1) {

            // turn this into touch-mode. Fallback to teaser and full.
            clickAction = ['full', 'teaser'];

            // Don't make the user click close if they hit another tooltip
            bean.fire(interaction, 'off');

            // Touch moves invalidate touches
            bean.add(map.parent, touchEnds);
        }
    }

    function touchCancel() {
        bean.remove(map.parent, touchEnds);
        _downLock = false;
    }

    function onUp(e) {
        var evt = {},
            pos = eventoffset(e);
        _downLock = false;

        // TODO: refine
        for (var key in e) {
          evt[key] = e[key];
        }

        bean.remove(document.body, 'mouseup', onUp);
        bean.remove(map.parent, touchEnds);

        if (e.type === 'touchend') {
            // If this was a touch and it survived, there's no need to avoid a double-tap
            click(e, _d);
        } else if (Math.round(pos.y / tol) === Math.round(_d.y / tol) &&
            Math.round(pos.x / tol) === Math.round(_d.x / tol)) {
            // Contain the event data in a closure.
            _clickTimeout = window.setTimeout(
                function() {
                    _clickTimeout = null;
                    click(evt, pos);
                }, 300);
        }
        return onUp;
    }

    // Handle a click event. Takes a second
    function click(e, pos) {
        var tile = getTile(pos),
            feature;

        if (tile) gm.getGrid(tile.src, function(err, g) {
            for (var i = 0; g && (i < clickAction.length); i++) {
                feature = g.tileFeature(pos.x, pos.y, tile, {
                    format: clickAction[i]
                });
                if (feature) {
                    switch (clickAction[i]) {
                        case 'full':
                        // clickAction can be teaser in touch interaction
                        case 'teaser':
                            return callbacks.click(feature, map.parent, e);
                        case 'location':
                            return clickHandler(feature);
                    }
                }
            }
        });
    }

    interaction.attach = function(x) {
        if (!arguments.length) return attach;
        attach = x;
        return interaction;
    };

    // Attach listeners to the map
    interaction.map = function(x) {
        if (!arguments.length) return map;
        map = x;
        bean.add(map.parent, defaultEvents);
        bean.add(map.parent, 'touchstart', onDown);
        if (attach) attach();
        return interaction;
    };

    interaction.trigger = function(pt) {
        // TODO: trigger an interaction at a screen point.
    };

    interaction.grid = function(x) {
        if (!arguments.length) return grid;
        grid = x;
        return interaction;
    };

    // Remove this control from the map.
    interaction.remove = function() {
        for (var i = 0; i < clearingEvents.length; i++) {
            map.removeCallback(clearingEvents[i], clearTileGrid);
        }
        bean.remove(map.parent, defaultEvents);
        bean.fire(interaction, 'remove');
        return this;
    };

    interaction.tilejson = function(x) {
        if (!arguments.length) return tilejson;
        gm.tilejson(x);
        return interaction;
    };


    // Ensure chainability
    return interaction;
};
