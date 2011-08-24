---
title: Pointselector
tags: ModestMaps
layout: control
---

A control that enables users to add points to a map by clicking the map, and
then clicking those points to remove them. Like the boxselector control, it
calls a callback with the current map data, and also exposes an API,
`addLocation(com.modestmaps.Location)`, if you wish to add points on pageload.

{% highlight js %}
var mm = com.modestmaps;

wax.tilejson(
  'http://tiles.mapbox.com/mapbox/api/Tileset/blue-marble-topo-bathy-jul',
  function(tilejson) {
    var m = new mm.Map('modestmaps-pointselector',
      new wax.mm.connector(tilejson),
      new mm.Point(240,120))

    wax.mm.pointselector(m, tilejson, {
      callback: function(coords) {
        $('#pointselector-text').text(coords.join(' - '));
      }
    });

    m.setCenterZoom(new mm.Location(39, -98), 2);
  }
);
{% endhighlight %}
