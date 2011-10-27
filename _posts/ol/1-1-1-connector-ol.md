---
title: Connector
tags: OpenLayers
layout: control-ol
---

<div class='live'>
{% highlight html %}
<div id='map-div'></div>
<a class='attribution' href='http://mapbox.com/tileset/geography-class'>Geography Class</a>
<script>
wax.tilejson('http://d.tiles.mapbox.com/v2/mapbox.blue-marble-topo-bathy-jan.jsonp', function(tilejson) {
    var map = new OpenLayers.Map({
        div: 'map-div',
        controls: [
            new OpenLayers.Control.Navigation(),
        ],
        layers: [
            wax.ol.connector(tilejson)
        ]
    });
    map.zoomTo(2);
});
</script>
{% endhighlight %}
</div>
