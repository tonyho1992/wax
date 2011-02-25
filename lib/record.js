// Wax Header
var wax = wax || {};

// Instantiate objects based on a JSON "record". The record must be a statement
// array in the following form:
//
//     [ "{verb} {subject}", arg0, arg1, arg2, ... argn ]
//
// Each record is processed from a passed `context` which starts from the
// global (ie. `window`) context if unspecified.
//
// - `@literal` Evaluate `subject` and return its value as a scalar. Useful for
//   referencing API constants, object properties or other values.
// - `@new` Call `subject` as a constructor with args `arg0 - argn`. The
//   newly created object will be the new context.
// - `@call` Call `subject` as a function with args `arg0 - argn` in the
//   global namespace. The return value will be the new context.
// - `@chain` Call `subject` as a method of the current context with args `arg0
//   - argn`. The return value will be the new context.
// - `@inject` Call `subject` as a method of the current context with args
//   `arg0 - argn`. The return value will *not* affect the context.
// - `@group` Treat `arg0 - argn` as a series of statement arrays that share a
//   context. Each statement will be called in serial and affect the context
//   for the next statement.
//
// Requirements:
//
// - Underscore.js
// - jQuery @TODO: only used for $.browser check. Could probably be removed.
//
// Usage:
//
//     var gmap = ['@new google.maps.Map',
//         ['@inject document.getElementById', 'gmap'],
//         {
//             center: [ '@new google.maps.LatLng', 0, 0 ],
//             zoom: 2,
//             mapTypeId: [ '@literal google.maps.MapTypeId.ROADMAP' ]
//         }
//     ];
//     wax.Wax.reify(gmap);
wax.Wax = {
    getFunction: function(head, cur) {
        var ret = _.reduce(head.split('.'), function(part, segment) {
            return [part[1] || part[0], part[1] ? part[1][segment] : part[0][segment]];
        }, [cur || window, null]);
        return ret;
    },

    makeObject: function(fn_name, args) {
        var fn_obj = this.getFunction(fn_name),
            obj;
        args = args.length ? wax.Wax.reify(args) : [];

        // real browsers
        if (!$.browser.ie) {
            obj = Object.create(fn_obj[1].prototype);
            fn_obj[1].apply(obj, args);
        // lord have mercy on your soul.
        } else {
            switch(args.length) {
                case 0: obj = new fn_obj[1](); break;
                case 1: obj = new fn_obj[1](args[0]); break;
                case 2: obj = new fn_obj[1](args[0], args[1]); break;
                case 3: obj = new fn_obj[1](args[0], args[1], args[3]); break;
                case 4: obj = new fn_obj[1](args[0], args[1], args[3], args[4]); break;
                case 5: obj = new fn_obj[1](args[0], args[1], args[3], args[4], args[5]); break;
                default: break;
            }
        }
        return obj;
    },

    runFunction: function(fn_name, args, cur) {
        var fn_obj = this.getFunction(fn_name, cur);
        var fn_args = args.length ? wax.Wax.reify(args) : [];
        if (cur) {
            return fn_obj[1].apply(cur, fn_args);
        } else {
            return fn_obj[1].apply(fn_obj[0], fn_args);
        }
    },

    isKeyword: function(string) {
        return _.isString(string) && ([
            '@new',
            '@call',
            '@literal',
            '@chain',
            '@inject',
            '@group'
        ].indexOf(string.split(' ')[0]) !== -1);
    },

    altersContext: function(string) {
        return _.isString(string) && ([
            '@new',
            '@call',
            '@chain'
        ].indexOf(string.split(' ')[0]) !== -1);
    },

    parse: function(obj) {
        if (_.isArray(obj) && obj[0] && this.isKeyword(obj[0])) {
            return {
                verb: obj[0].split(' ')[0],
                subject: obj[0].split(' ')[1],
                object: obj.slice(1)
            };
        }
        return false;
    },

    reify: function(obj, context) {
        var i,
            fn = false,
            ret = null,
            child = null,
            statement = this.parse(obj);
        if (statement) {
            switch (statement.verb) {
            case '@group':
                for (i = 0; i < statement.object.length; i++) {
                    ret = wax.Wax.reify(statement.object[i], context);
                    child = this.parse(statement.object[i]);
                    if (child && this.altersContext(child.verb)) {
                        context = ret;
                    }
                }
                return ret;
            case '@new':
                return this.makeObject(statement.subject, statement.object);
            case '@literal':
                fn = this.getFunction(statement.subject);
                return fn ? fn[1] : null;
            case '@inject':
                return this.runFunction(statement.subject, statement.object, context);
            case '@chain':
                return this.runFunction(statement.subject, statement.object, context);
            case '@call':
                return this.runFunction(statement.subject, statement.object, null);
            }
        } else {
            // Reify object/arrays.
            try {
                var keys = _.keys(obj);
                for (i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    obj[key] = wax.Wax.reify(obj[key], context);
                }
                return obj;
            // Unwrapped scalars
            } catch(e) {
                return obj;
            }
        }
    }
};
