wax = wax || {};
wax.mm = wax.mm || {};

// Attribution
// -----------
wax.mm.attribution = function(map, options) {
    options = options || {};
    this.map = map;
    if (!this.container) {
        this.container = document.createElement('div');
        this.container.className = 'wax-attribution';
    }
    this.map.parent.appendChild(this.container);
    if (options.attribution) {
        this.container.innerHTML = options.attribution;
    }
};
