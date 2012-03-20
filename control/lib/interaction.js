wax = wax || {};

wax.interaction = function() {
    var gm = wax.gm(),
        interaction = {},
        _downLock = false,
        _clickTimeout = false,
        // Active feature
        _af,
        // Down event
        _d,
        // Touch tolerance
        tol = 4,
        grid,
        parent,
        tileGrid;

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
        var g = grid();
        for (var i = 0; i < g.length; i++) {
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

        var pos = wax.u.eventoffset(e),
            tile = getTile(pos),
            feature;

        if (tile) gm.getGrid(tile.src, function(err, g) {
            if (err || !g) return;
            feature = g.tileFeature(pos.x, pos.y, tile);
            if (feature) {
                if (feature && _af !== feature) {
                    _af = feature;
                    bean.fire(interaction, 'on', {
                        parent: parent(),
                        data: feature,
                        formatter: gm.formatter().format,
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
        // Ignore double-clicks by ignoring clicks within 300ms of
        // each other.
        if (killTimeout()) { return; }

        // Prevent interaction offset calculations happening while
        // the user is dragging the map.
        //
        // Store this event so that we can compare it to the
        // up event
        _downLock = true;
        _d = wax.u.eventoffset(e);
        if (e.type === 'mousedown') {
            bean.add(document.body, 'mouseup', onUp);

        // Only track single-touches. Double-touches will not affect this
        // control
        } else if (e.type === 'touchstart' && e.touches.length === 1) {
            // Don't make the user click close if they hit another tooltip
            bean.fire(interaction, 'off');
            // Touch moves invalidate touches
            bean.add(parent(), touchEnds);
        }
    }

    function touchCancel() {
        bean.remove(parent(), touchEnds);
        _downLock = false;
    }

    function onUp(e) {
        var evt = {},
            pos = wax.u.eventoffset(e);
        _downLock = false;

        // TODO: refine
        for (var key in e) {
          evt[key] = e[key];
        }

        bean.remove(document.body, 'mouseup', onUp);
        bean.remove(parent(), touchEnds);

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
        var tile = getTile(pos);
        if (tile) gm.getGrid(tile.src, function(err, g) {
            if (err || !g) return;
            var feature = g.tileFeature(pos.x, pos.y, tile);
            if (!feature) return;
            bean.fire(interaction, 'on', {
                parent: parent(),
                data: feature,
                formatter: gm.formatter().format,
                e: e
            });
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
        bean.add(parent(), defaultEvents);
        bean.add(parent(), 'touchstart', onDown);
        if (attach) attach(map);
        return interaction;
    };

    interaction.grid = function(x) {
        if (!arguments.length) return grid;
        grid = x;
        return interaction;
    };

    interaction.remove = function() {
        for (var i = 0; i < clearingEvents.length; i++) {
            map.removeCallback(clearingEvents[i], clearTileGrid);
        }
        bean.remove(parent(), defaultEvents);
        bean.fire(interaction, 'remove');
        return interaction;
    };

    interaction.tilejson = function(x) {
        if (!arguments.length) return tilejson;
        gm.tilejson(x);
        return interaction;
    };

    interaction.formatter = function() {
        return gm.formatter();
    };

    interaction.on = function(ev, fn) {
        bean.add(interaction, ev, fn);
        return interaction;
    };

    interaction.parent  = function(x) {
        parent = x;
        return interaction;
    };

    interaction.off = function(ev, fn) {
        bean.remove(interaction, ev, fn);
        return interaction;
    };

    return interaction;
};