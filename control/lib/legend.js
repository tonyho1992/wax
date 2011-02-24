// Wax Legend
// ----------

// Wax header
var wax = wax || {};

wax.Legend = function(context, container) {
    (!container) && (container = $('<div class="wax-legends"></div>'));
    this.context = context;
    this.container = container;
    this.legends = {};
    $(this.context).append(this.container);
};

wax.Legend.prototype.show = function(url) {
    var that = this;
    var url = this.legendUrl(url);
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

    if (this.legends[url] === false) {
        return;
    } else if (this.legends[url]) {
        this.legends[url].show();
    } else {
        $.jsonp({
            'url': url,
            context: this,
            callback: 'grid',
            callbackParameter: 'callback',
            success: function(data) {
                (data && data.legend) && (render(data.legend));
            },
            error: function() {
                render(false);
            }
        });
    }
};

wax.Legend.prototype.hide = function(url) {
    this.legends[url] && this.legends[url].hide();
};

wax.Legend.prototype.legendUrl = function(url) {
    return url.replace(/\d+\/\d+\/\d+\.\w+/, 'layer.json');
};

