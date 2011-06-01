// Wax Legend
// ----------

// Wax header
var wax = wax || {};

wax.Legend = function(context, container) {
    this.legends = {};
    this.context = context;
    this.container = container;
    if (!this.container) {
        this.container = document.createElement('div');
        this.container.className = 'wax-legends';
    }
    this.context.appendChild(this.container);
};

wax.Legend.prototype.render = function(urls) {
    var url;
    for (url in this.legends) {
        this.legends[url].style.display = 'none';
    }
    var render = wax.util.bind(function(url, content) {
        if (!content) {
            this.legends[url] = false;
        } else if (this.legends[url]) {
            this.legends[url].style.display = 'block';
        } else {
            this.legends[url] = document.createElement('div');
            this.legends[url].className = 'wax-legend';
            this.legends[url].innerHTML = content;
            this.container.appendChild(this.legends[url]);
        }
    }, this);
    for (var i = 0; i < urls.length; i++) {
        url = this.legendUrl(urls[i]);
        wax.request.get(url, function(err, data) {
            if (data && data.legend) render(url, data.legend);
        });
    }
};

wax.Legend.prototype.legendUrl = function(url) {
    return url.replace(/\d+\/\d+\/\d+\.\w+/, 'layer.json');
};

