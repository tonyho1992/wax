// Wax: Fullscreen
// -----------------
// A simple fullscreen control for Modest Maps

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

// Add zoom links, which can be styled as buttons, to a `modestmaps.Map`
// control. This function can be used chaining-style with other
// chaining-style controls.
com.modestmaps.Map.prototype.fullscreen = function() {
    $('<a class="wax-fullscreen" href="#fullscreen">fullscreen</a>')
        .click($.proxy(function() {
            $(this.parent).toggleClass('wax-fullscreen-map');
            this.setSize(
                $(this.parent).outerWidth(),
                $(this.parent).outerHeight());
            return false;
        }, this))
        .appendTo(this.parent);
    return this;
};
