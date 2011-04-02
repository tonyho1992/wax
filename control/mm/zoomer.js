// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

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
}
