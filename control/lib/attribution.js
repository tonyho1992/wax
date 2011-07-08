wax = wax || {};

// Attribution
// -----------
wax.Attribution = function(context, container) {
    this.context = context;
    this.container = container;
    if (!this.container) {
        this.container = document.createElement('div');
        this.container.className = 'wax-attribution';
    }
    this.context.appendChild(this.container);
};

wax.Attribution.prototype.render = function(content) {
    if (typeof content !== 'undefined') {
        this.container.innerHTML = content;
    }
}

