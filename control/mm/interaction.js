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
wax.mm.interaction = function(map, options) {
    var MM = com.modestmaps;
    options = options || {};

    var interaction = {
        modifyingEvents: ['zoomed', 'panned', 'centered',
            'extentset', 'resized', 'drawn'],

        // Our GridManager (from `gridutil.js`). This will keep the
        // cache of grid information and provide friendly utility methods
        // that return `GridTile` objects instead of raw data.
        waxGM: new wax.GridManager(),

        // This requires wax.Tooltip or similar
        callbacks: options.callbacks || new wax.tooltip(),

        clickAction: options.clickAction || ['full'],

        clickHandler: options.clickHandler || function(url) {
            window.location = url;
        },

        // Attach listeners to the map
        add: function() {
            for (var i = 0; i < this.modifyingEvents.length; i++) {
                map.addCallback(
                    this.modifyingEvents[i],
                    wax.util.bind(this.clearTileGrid, this)
                );
            }
            if (!wax.util.isArray(this.clickAction)) this.clickAction = [this.clickAction];
            MM.addEvent(map.parent, 'mousemove', this.onMove());
            MM.addEvent(map.parent, 'mousedown', this.onDown());
            this.touchable = ('ontouchstart' in document.documentElement);
            if (this.touchable) {
                MM.addEvent(map.parent, 'touchstart', this.onDown());
            }
            return this;
        },

        // Search through `.tiles` and determine the position,
        // from the top-left of the **document**, and cache that data
        // so that `mousemove` events don't always recalculate.
        getTileGrid: function() {
            // TODO: don't build for tiles outside of viewport
            // Touch interaction leads to intermediate
            var zoom = Math.round(map.getZoom());
            // Calculate a tile grid and cache it, by using the `.tiles`
            // element on this map.
            return this._getTileGrid || (this._getTileGrid =
                (function(t) {
                    var o = [];
                    for (var key in t) {
                        if (key.split(',')[0] == zoom) {
                            var offset = wax.util.offset(t[key]);
                            o.push([offset.top, offset.left, t[key]]);
                        }
                    }
                    return o;
                })(map.tiles));
        },

        // When the map moves, the tile grid is no longer valid.
        clearTileGrid: function(map, e) {
            this._getTileGrid = null;
        },

        getTile: function(evt) {
            var tile;
            var grid = this.getTileGrid();
            for (var i = 0; i < grid.length; i++) {
                if ((grid[i][0] < evt.y) &&
                   ((grid[i][0] + 256) > evt.y) &&
                    (grid[i][1] < evt.x) &&
                   ((grid[i][1] + 256) > evt.x)) {
                    tile = grid[i][2];
                    break;
                }
            }
            return tile || false;
        },

        // Clear the double-click timeout to prevent double-clicks from
        // triggering popups.
        clearTimeout: function() {
            if (this.clickTimeout) {
                window.clearTimeout(this.clickTimeout);
                this.clickTimeout = null;
                return true;
            } else {
                return false;
            }
        },

        onMove: function(evt) {
            if (!this._onMove) this._onMove = wax.util.bind(function(evt) {
                var pos = wax.util.eventoffset(evt);
                var tile = this.getTile(pos);
                if (tile) {
                    this.waxGM.getGrid(tile.src, wax.util.bind(function(err, g) {
                        if (err) return;
                        if (g) {
                            var feature = g.getFeature(pos.x, pos.y, tile, {
                                format: 'teaser'
                            });
                            // This and other Modest Maps controls only support a single layer.
                            // Thus a layer index of **0** is given to the tooltip library
                            if (feature) {
                                if (feature && this.feature !== feature) {
                                    this.feature = feature;
                                    this.callbacks.out(map.parent);
                                    this.callbacks.over(feature, map.parent, 0, evt);
                                } else if (!feature) {
                                    this.feature = null;
                                    this.callbacks.out(map.parent);
                                }
                            } else {
                                this.feature = null;
                                this.callbacks.out(map.parent);
                            }
                        }
                    }, this));
                }
            }, this);
            return this._onMove;
        },

        // A handler for 'down' events - which means `mousedown` and `touchstart`
        onDown: function(evt) {
            if (!this._onDown) this._onDown = wax.util.bind(function(evt) {
                // Ignore double-clicks by ignoring clicks within 300ms of
                // each other.
                if (this.clearTimeout()) {
                    return;
                }
                // Store this event so that we can compare it to the
                // up event
                this.downEvent = wax.util.eventoffset(evt);
                if (evt.type === 'mousedown') {
                    MM.addEvent(map.parent, 'mouseup', this.onUp());
                // Only track single-touches. Double-touches will not affect this
                // control
                } else if (evt.type === 'touchstart' && evt.touches.length === 1) {
                    // turn this into touch-mode. Fallback to teaser and full.
                    this.clickAction = ['full', 'teaser'];
                    // Don't make the user click close if they hit another tooltip
                    if (this.callbacks._currentTooltip) {
                        this.callbacks.hideTooltip(this.callbacks._currentTooltip);
                    }
                    // Touch moves invalidate touches
                    MM.addEvent(map.parent, 'touchend', this.onUp());
                    MM.addEvent(map.parent, 'touchmove', this.touchCancel());
                }
            }, this);
            return this._onDown;
        },

        // If we get a touchMove event, it isn't a tap.
        touchCancel: function() {
            if (!this._touchCancel) this._touchCancel = wax.util.bind(function(evt) {
                MM.removeEvent(map.parent, 'touchend', this.onUp());
                MM.removeEvent(map.parent, 'touchmove', this.onUp());
            }, this);
            return this._touchCancel;
        },

        onUp: function() {
            if (!this._onUp) this._onUp = wax.util.bind(function(evt) {
                MM.removeEvent(map.parent, 'mouseup', this.onUp());
                if (map.parent.ontouchend) {
                    MM.removeEvent(map.parent, 'touchend', this.onUp());
                    MM.removeEvent(map.parent, 'touchmove', this.touchCancel());
                }
                // Don't register clicks that are likely the boundaries
                // of dragging the map
                // The tolerance between the place where the mouse goes down
                // and where where it comes up is set at 4px.
                var tol = 4;
                var pos = wax.util.eventoffset(evt);
                if (evt.type === 'touchend') {
                    // If this was a touch and it survived, there's no need to avoid a double-tap
                    this.click()(this.downEvent);
                } else if (Math.round(pos.y / tol) === Math.round(this.downEvent.y / tol) &&
                    Math.round(pos.x / tol) === Math.round(this.downEvent.x / tol)) {
                    // Contain the event data in a closure.
                    this.clickTimeout = window.setTimeout(
                        wax.util.bind(function() { this.click()(pos); }, this), 300);
                }
            }, this);
            return this._onUp;
        },

        // Handle a click event. Takes a second
        click: function(evt) {
            if (!this._onClick) this._onClick = wax.util.bind(function(pos) {
                var tile = this.getTile(pos);
                if (tile) {
                    this.waxGM.getGrid(tile.src, wax.util.bind(function(err, g) {
                        if (g) {
                            for (var i = 0; i < this.clickAction.length; i++) {
                                var feature = g.getFeature(pos.x, pos.y, tile, {
                                    format: this.clickAction[i]
                                });
                                if (feature) {
                                    switch (this.clickAction[i]) {
                                        case 'full':
                                        // clickAction can be teaser in touch interaction
                                        case 'teaser':
                                            return this.callbacks.click(feature, map.parent, 0, evt);
                                            break;
                                        case 'location':
                                            return this.clickHandler(feature);
                                            break;
                                    }
                                }
                            }
                        }
                    }, this));
                }
            }, this);
            return this._onClick;
        }
    };

    // Ensure chainability
    return interaction.add(map);
};
