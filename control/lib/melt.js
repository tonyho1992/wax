// TODO: rewrite without underscore
_.mixin({
  revbind: function(func, obj) {
    var nativeBind = Function.prototype.bind;
    var slice = Array.prototype.slice;
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    var args = slice.call(arguments, 2);
    return function() {
      // return func.apply(obj, args.concat(slice.call(arguments)));
      return func.apply(obj, arguments.concat(slice.call(args)));
    };
  }
});

_.mixin({
    melt: function(self, func, obj) {
        func.apply(obj, [self, obj]);
        return self;
    }
});
