// Wax Header
var wax = wax || {};

// OpenLayers Wax machinery.
//
// Requirements:
//
// - OpenLayers
// - Underscore.js
wax.Wax = {
    // Get a function by string name without using eval
    //
    // - @return {Function} the requested function.
    get_function: function(head, cur) {
        var start = cur || window;
        return _.reduce(head.split('.'), function(part, segment) {
          return [part[1] || part[0], part[1] ? part[1][segment] : part[0][segment]];
        }, [cur || window, null]);
    },

    make_object: function(constructor, args) {
        // real browsers
        if (!$.browser.ie) {
            var obj = Object.create(constructor.prototype);
            constructor.apply(obj, args);
        // lord have mercy on your soul.
        } else {
            switch(args.length) {
                case 0: var obj = new obj(); break;
                case 1: var obj = new obj(args[0]); break;
                case 2: var obj = new obj(args[0], args[1]); break;
                case 3: var obj = new obj(args[0], args[1], args[3]); break;
                case 4: var obj = new obj(args[0], args[1], args[3], args[4]); break;
                case 5: var obj = new obj(args[0], args[1], args[3], args[4], args[5]); break;
                default: null;
            }
        }
        return obj;
    },

    runFunction: function(fn_name, args, cur) {
        var fn_obj = this.get_function(fn_name, cur);
        var fn_args = args.length ? wax.Wax.reify(args) : [];
        if (!fn_args.length) fn_args = [fn_args];
        if (cur) {
            return fn_obj[1].apply(cur, fn_args);
        } else {
            return fn_obj[1].apply(fn_obj[0], fn_args);
        }
    },

    // Instantiate JSON objects
    //
    // - @param {Object} a json object.
    // - @return {Object} an instantiated OpenLayers or another type object.
    reify: function(obj) {
        var itr = {};
        var fn = false;
        var cur = null;
        if (_.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
                if (itr = obj[i]['@chain']) {
                    for (var j = 0; j < itr.length; j++) {
                        if (itr[j][0]) {
                            cur = wax.Wax.runFunction(itr[j][0], itr[j][1], cur);
                        } else if (itr[j]['@inject']) {
                            wax.Wax.runFunction(itr[j]['@inject'][0], itr[j]['@inject'][1], cur);
                        } else if (itr[j]['@new']) {
                            if (fn = this.get_function(itr[j]['@new'][0])) {
                                var args = _.map(itr[j]['@new'][1], function(a) {
                                    return wax.Wax.reify(a);
                                });
                                cur = this.make_object(fn[1], args);
                            }
                        }
                    }
                } else if (itr = obj[i]['@new']) {
                    if (fn = this.get_function(itr[0])) {
                        var args = _.map(itr[1], function(a) {
                            return wax.Wax.reify(a);
                        });
                        cur = this.make_object(fn[1], args);
                        return cur;
                    }
                } else if (itr = obj[i]['@literal']) {
                    if (fn = this.get_function(itr)) {
                        cur = fn[1];
                    }
                } else {
                    // poor-man's object detection
                    try {
                        var k = _.keys(obj[i]);
                        for (var j = 0; j < k.length; j++) {
                            obj[i][k[j]] = wax.Wax.reify(obj[i][k[j]]);
                        }
                        return obj[i];
                    } catch (e) {
                        // vectors
                        if (_.isArray(obj[i])) {
                            return _.map(obj[i], function(o) {
                                return wax.Wax.reify(o);
                            });
                        // scalars
                        } else {
                            return obj[i];
                        }
                    }
                }
            }
        } else {
            // unwrapped scalars
            return obj;
        }
        // chained functions
        return cur;
    }
};
