// TODO: rewrite without underscore
var w = function(self) {
    self.melt = function(func, obj) {
        func.apply(obj, [self, obj]);
        return self;
    };
    return self;
};
