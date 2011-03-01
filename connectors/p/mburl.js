var mbUrl = function(template) {
    return function(t) {
        return template.replace('{Z}', t.zoom)
            .replace('{X}', t.column)
            .replace('{Y}', ((Math.pow(2, t.zoom) - 1) - t.row));
    };
};
