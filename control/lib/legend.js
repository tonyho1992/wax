// Wax Legend
// ----------

// Wax header
var wax = wax || {};

wax.Legend = function(context) {
    var legend = {},
        legends = {},
        container;

    function legendUrl(url) {
        return url.replace(/\d+\/\d+\/\d+\.\w+/, 'layer.json');
    }

    legend.element = function() {
        return container;
    };

    legend.write = function(content) {
        legends[0] = document.createElement('div');
        legends[0].className = 'wax-legend';
        legends[0].innerHTML = content;
        container.appendChild(legends[0]);
    };

    legend.render = function(urls) {
        var url;
        for (url in legends) {
            legends[url].style.display = 'none';
        }

        var subrender = function(url, content) {
            if (!content) {
                legends[url] = false;
            } else if (legends[url]) {
                legends[url].style.display = 'block';
            } else {
                legends[url] = document.createElement('div');
                legends[url].className = 'wax-legend';
                legends[url].innerHTML = content;
                container.appendChild(legends[url]);
            }
        };

        for (var i = 0; i < urls.length; i++) {
            url = legendUrl(urls[i]);
            wax.request.get(url, function(err, data) {
                if (data && data.legend) subrender(url, data.legend);
            });
        }
    };

    legend.add = function() {
        container = document.createElement('div');
        container.className = 'wax-legends';
        return this;
    };

    return legend.add();
};
