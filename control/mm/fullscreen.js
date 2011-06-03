wax = wax || {};
wax.mm = wax.mm || {};

// Fullscreen
// ----------
// A simple fullscreen control for Modest Maps

// Add zoom links, which can be styled as buttons, to a `modestmaps.Map`
// control. This function can be used chaining-style with other
// chaining-style controls.
wax.mm.fullscreen = function(map, opts) {

    var fullscreen = {
        state: 1, // minimized

        // Modest Maps demands an absolute height & width, and doesn't auto-correct
        // for changes, so here we save the original size of the element and
        // restore to that size on exit from fullscreen.
        add: function(map) {
            this.a = document.createElement('a');
            this.a.className = 'wax-fullscreen';
            this.a.href = '#fullscreen';
            this.a.innerHTML = 'fullscreen';
            map.parent.appendChild(this.a);
            com.modestmaps.addEvent(this.a, 'click', this.click(map));
            return this;
        },

        click: function(map) {
            if (this._click) return this._click;
            else this._click = wax.util.bind(function(e) {
                if (e) com.modestmaps.cancelEvent(e);

                if (this.state) {
                    this.smallSize = [map.parent.offsetWidth, map.parent.offsetHeight];
                    map.parent.className += ' wax-fullscreen-map';
                    map.setSize(
                        map.parent.offsetWidth,
                        map.parent.offsetHeight);
                } else {
                    map.parent.className = map.parent.className.replace('wax-fullscreen-map', '');
                    map.setSize(
                        this.smallSize[0],
                        this.smallSize[1]);
                }
                this.state = !this.state;
            }, this);
            return this._click;
        }
    };

    return fullscreen.add(map);
};
