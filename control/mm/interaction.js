wax = wax || {};
wax.mm = wax.mm || {};

// A chaining-style control that adds
// interaction to a modestmaps.Map object.
//
// Takes an options object with the following keys:
//
// * `callbacks` (optional): an `out`, `over`, and `click` callback.
//   If not given, the `wax.tooltip` library will be expected.
// * `clickAction` (optional): **full** or **location**: default is
//   **full**.
// * `clickHandler` (optional): if not given, `clickAction: 'location'` will
//   assign a location to your window with `window.location = 'location'`.
//   To make location-getting work with other systems, like those based on
//   pushState or Backbone, you can provide a custom function of the form
//
//
//     `clickHandler: function(url) { ... go to url ... }`
wax.mm.interaction = function(map, tilejson, options) {
    options = options || {};
    tilejson = tilejson || {};

    var waxGM = wax.GridManager(tilejson),
        clickAction = options.clickAction || ['full', 'location'],
        clickHandler = options.clickHandler || function(url) {
            window.top.location = url;
        },
        eventoffset = wax.util.eventoffset,
        interaction = {},
        _downLock = false,
        _clickTimeout = false,
        touchable = ('ontouchstart' in document.documentElement),
        // Active feature
        _af,
        // Down event
        _d,
        // Touch tolerance
        tol = 4,
        tileGrid,
        clearingEvents = ['zoomed', 'panned', 'centered',
            'extentset', 'resized', 'drawn'];

    // Search through `.tiles` and determine the position,
    // from the top-left of the **document**, and cache that data
    // so that `mousemove` events don't always recalculate.
    function getTileGrid() {
        // TODO: don't build for tiles outside of viewport
        // Touch interaction leads to intermediate
        var zoomLayer = map.getLayerAt(0).levels[Math.round(map.getZoom())];
        // Calculate a tile grid and cache it, by using the `.tiles`
        // element on this map.
        return tileGrid || (tileGrid =
            (function(t) {
                var o = [];
                for (var key in t) {
                    if (t[key].parentNode === zoomLayer) {
                        var offset = wax.util.offset(t[key]);
                        o.push([offset.top, offset.left, t[key]]);
                    }
                }
                return o;
            })(map.getLayerAt(0).tiles));
    }

    // When the map moves, the tile grid is no longer valid.
    function clearTileGrid(map, e) {
        tileGrid = null;
    }

    function getTile(e) {
        for (var i = 0, grid = getTileGrid(); i < grid.length; i++) {
            if ((grid[i][0] < e.y) &&
               ((grid[i][0] + 256) > e.y) &&
                (grid[i][1] < e.x) &&
               ((grid[i][1] + 256) > e.x)) return grid[i][2];
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
        var t = e.target || e.srcElement;
        if (t.className !== 'map-tile-loaded') return;

        var pos = eventoffset(e),
            tile = getTile(pos),
            feature;

        if (tile) waxGM.getGrid(tile.src, function(err, g) {
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
            bean.add(map.parent, 'touchend', onUp);
            bean.add(map.parent, 'touchmove', touchCancel);
            bean.add(map.parent, 'touchcancel', touchCancel);
        }
    }

    function touchCancel() {
        bean.remove(map.parent, 'touchend', onUp);
        bean.remove(map.parent, 'touchmove', onUp);
        bean.remove(map.parent, 'touchcancel', touchCancel);
        _downLock = false;
    }

    function onUp(e) {
        var evt = {},
            pos = eventoffset(e);
        _downLock = false;

        for (var key in e) {
          evt[key] = e[key];
        }

        bean.remove(document.body, 'mouseup', onUp);

        if (touchable) {
            bean.remove(map.parent, {
                'touchend': onUp,
                'touchmove': touchCancel,
                'touchcancel': touchCancel
            });
        }

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

        if (tile) waxGM.getGrid(tile.src, function(err, g) {
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

    // Attach listeners to the map
    interaction.add = function() {
        for (var i = 0; i < clearingEvents.length; i++) {
            map.addCallback(clearingEvents[i], clearTileGrid);
        }
        bean.add(map.parent, 'mousemove', onMove);
        bean.add(map.parent, 'mousedown', onDown);
        if (touchable) {
            bean.add(map.parent, 'touchstart', onDown);
        }
        return this;
    };

    // Remove this control from the map.
    interaction.remove = function() {
        for (var i = 0; i < clearingEvents.length; i++) {
            map.removeCallback(clearingEvents[i], clearTileGrid);
        }
        bean.remove(map.parent, {
            mousemove: onMove,
            mousedown: onDown
        });
        if (touchable) {
            bean.remove(map.parent, 'touchstart', onDown);
        }
        bean.fire(interaction, 'remove');
        return this;
    };

    // Ensure chainability
    return interaction.add(map);
};
