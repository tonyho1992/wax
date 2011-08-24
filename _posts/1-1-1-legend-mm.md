---
title: Legend
tags: ModestMaps
layout: control
---

Display legend information on the map. This internally creates the legend,
and then you can add it to a map by chaining `.appendTo(map.parent)`.

{% highlight js %}
var mm = com.modestmaps;
wax.tilejson(
  'http://tiles.mapbox.com/mapbox/api/Tileset/geography-class',
  function(tilejson) {
    var m = new mm.Map('modestmaps-legend',
      new wax.mm.connector(tilejson),
      new mm.Point(240,120));
    wax.mm.legend(m, tilejson).appendTo(m.parent);
    m.setCenterZoom(new mm.Location(39, -98), 2);
  }
);
{% endhighlight %}
