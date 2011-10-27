// Templating
// ---------
wax.template = function(x) {
    var template = {};

    function urlX(url) {
        // Data URIs are subject to a bug in Firefox
        // https://bugzilla.mozilla.org/show_bug.cgi?id=255107
        // which let them be a vector. But WebKit does 'the right thing'
        // or at least 'something' about this situation, so we'll tolerate
        // them.
        if (/^(https?\/\/:|data:image)/.test(url)) {
            return url;
        }
    }

    function idX(id) {
        return id;
    }

    // Wrap the given formatter function in order to
    // catch exceptions that it may throw.
    template.format = function(options, data) {
        if (options.format) {
            data['__' + options.format + '__'] = true;
        }
        console.log(data);
        return html_sanitize(Mustache.to_html(x, data), urlX, idX);
    };

    return template;
};
