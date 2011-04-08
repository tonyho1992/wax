// Wax: Zoom Control
// -----------------

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
com.modestmaps.Map.prototype.zoomer = function() {
    $('<a class="zoomer zoomin" href="#zoomin">+</a>')
        .click($.proxy(function() {
            this.zoomIn();
            return false;
        }, this))
        .prependTo(this.parent);
    $('<a class="zoomer zoomout" href="#zoomout">-</a>')
        .click($.proxy(function() {
            this.zoomOut();
            return false;
        }, this))
        .prependTo(this.parent);
    return this;
};
