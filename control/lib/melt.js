// TODO: rewrite without underscore
_.mixin({
    melt: function(self, func, obj) {
        func.apply(obj, [self, obj]);
        return self;
    }
});
