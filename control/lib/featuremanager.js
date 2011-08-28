wax.FeatureManager = function(options) {
    options = options || {};

    var manager = {},
        data = {},
        features = {};

    var callbacks = {};
    manager.emit = function(ev, a, b) {
        var c = callbacks[ev]
        if (c) for (var l = c.length, i = 0; i < l; i++) c[i](a, b);
    }

    manager.addCallback = function(ev, fn) {
        var c = callbacks[ev];
        if (!c) c = callbacks[ev] = [];
        if (c.indexOf(fn) < 0) c.push(fn);
    };

    manager.removeCallback = function(ev, fn) {
        var c = callbacks[ev];
        var index = c ? c.indexOf(fn) : -1;
        if (index >= 0) c.splice(index, 1);
    };

    manager.add = function(key, grid) {
        data[key] = grid.data();
        for (var id in data[key]) {
            var feature = features[id];
            if (!feature) {
                features[id] = { keys: [ key ], data: data[key][id] };
                manager.emit('added', features[id], id);
            } else if (feature.keys.indexOf(key) < 0) {
                feature.keys.push(key);
            }
        }
    };

    manager.remove = function(key) {
        for (var id in data[key]) {
            var keys = features[id].keys, index = keys.indexOf(key);
            if (index >= 0) keys.splice(index, 1);
            if (!keys.length) {
                manager.emit('removed', features[id], id);
                delete features[id];
            }
        }
        delete data[key];
    }
    
    manager.features = features;

    return manager;
};
