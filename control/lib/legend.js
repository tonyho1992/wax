// Wax Legend
// ----------

// Wax header
var wax = wax || {};

wax.Legend = function(context, container) {
    this.context = context;
    this.container = container || $('<div class="wax-legends"></div>');
    this.legends = {};
    $(this.context).append(this.container);
};

wax.Legend.prototype.render = function(urls) {
    $('.wax-legend', this.container).hide();

    var that = this;
    var render = function(content) {
        if (!content) {
            that.legends[url] = false;
        } else if (that.legends[url]) {
            that.legends[url].show();
        } else {
            that.legends[url] = $("<div class='wax-legend'></div>").append(content);
            that.container.append(that.legends[url]);
        }
    };
    for (var i = 0; i < urls.length; i++) {
        var url = this.legendUrl(urls[i]);
        wax.request.get(url, function(data) {
            (data && data.legend) && (render(data.legend));
        });
    }
};

wax.Legend.prototype.legendUrl = function(url) {
    return url.replace(/\d+\/\d+\/\d+\.\w+/, 'layer.json');
};

