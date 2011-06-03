wax = wax || {};
wax.mm = wax.mm || {};

// Ripped from underscore.js
// Internal function used to implement `_.throttle` and `_.debounce`.
var limit = function(func, wait, debounce) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var throttler = function() {
      timeout = null;
      func.apply(context, args);
    };
    if (debounce) clearTimeout(timeout);
    if (debounce || !timeout) timeout = setTimeout(throttler, wait);
  };
};

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time.
var throttle = function(func, wait) {
  return limit(func, wait, false);
};

// A basic manager dealing only in hashchange and `location.hash`.
// This **will interfere** with anchors, so a HTML5 pushState
// implementation will be prefered.
var locationHash = {
  stateChange: function(callback) {
    com.modestmaps.addEvent(window, 'hashchange', function() {
      callback(location.hash);
    }, false);
  },
  getState: function() {
    return location.hash;
  },
  pushState: function(state) {
    location.hash = state;
  }
};

// Hash
// ----
wax.mm.hash = function(map, options) {
    // cached location.hash
    var s0,
        // allowable latitude range
        lat = 90 - 1e-8;

    var hash = {
        map: this,
        parser: function(s) {
            var args = s.split('/');
            for (var i = 0; i < args.length; i++) {
                if (isNaN(args[i])) return true;
                args[i] = Number(args);
            }
            if (args.length < 3) {
                // replace bogus hash
                return true;
            } else if (args.length == 3) {
                map.setCenterZoom(new com.modestmaps.Location(args[1], args[2]), args[0]);
            }
        },
        add: function(map) {
            if (options.manager.getState()) {
                hash.stateChange(options.manager.getState());
            } else {
                hash.initialize();
                hash.move();
            }
            map.addCallback('drawn', throttle(hash.move, 500));
            options.manager.stateChange(hash.stateChange);
        },
        // Currently misnamed. Get the hash string that will go in the URL,
        // pulling from the map object
        formatter: function() {
            var center = map.getCenter(),
                zoom = map.getZoom(),
                precision = Math.max(0, Math.ceil(Math.log(zoom) / Math.LN2));
            return '#' + [zoom.toFixed(2),
              center.lat.toFixed(precision),
              center.lon.toFixed(precision)].join('/');
        },
        move: function() {
            var s1 = hash.formatter();
            if (s0 !== s1) {
                s0 = s1;
                // don't recenter the map!
                options.manager.pushState(s0);
            }
        },
        stateChange: function(state) {
            // ignore spurious hashchange events
            if (state === s0) return;
            if (hash.parser((s0 = state).substring(1))) {
              // replace bogus hash
              hash.move();
            }
        },
        // If a state isn't present when you initially load the map, the map should
        // still get a center and zoom level.
        initialize: function() {
            if (options.defaultCenter) map.setCenter(options.defaultCenter);
            if (options.defaultZoom) map.setZoom(options.defaultZoom);
        }
    };
    return hash.add(map);
};
