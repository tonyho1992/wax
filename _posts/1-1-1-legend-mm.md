---
title: Legend
tags: ModestMaps
layout: control
---

Display legend information on the map. This internally creates the legend,
and then you can add it to a map by chaining `.appendTo(map.parent)`.

## Example

<div class='live'>
{% highlight html %}
<div id='map-div'></div>
<script>
var mm = com.modestmaps;
wax.tilejson(
  'http://tiles.mapbox.com/mapbox/api/Tileset/geography-class',
  function(tilejson) {
    var m = new mm.Map('map-div',
      new wax.mm.connector(tilejson));
    wax.mm.legend(m, tilejson).appendTo(m.parent);
    m.setCenterZoom(new mm.Location(39, -98), 2);
  }
);
</script>
{% endhighlight %}
</div>

## API

<dl>
  <dt>{% highlight js %}legend = wax.mm.legend(map, tilejson){% endhighlight %}</dt>
  <dd>Create a new legend object. This control requires the TileJSON object
  to be valid and contain a valid legend attribute.</dd>
  <dt>{% highlight js %}legend.appendTo(element){% endhighlight %}</dt>
  <dd>Add the legend element - a div of the form
  {% highlight html %}<div class='wax-legends'><div class='wax-legend'>legend content</div></div>{% endhighlight %}
  </dd>
</dl>
