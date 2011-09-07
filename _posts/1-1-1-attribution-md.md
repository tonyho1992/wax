---
title: Attribution
tags: ModestMaps touch
layout: control
---

Display attribution information on the map. This internally creates the attribution,
and then you can add it to a map by chaining `.appendTo(map.parent)`.

## Example

<div class='live'>
{% highlight html %}
<div id='map-div'></div>
<script type='text/javascript'>
var mm = com.modestmaps;

wax.tilejson(
  'http://tiles.mapbox.com/mapbox/api/Tileset/haiti-terrain',
  function(tilejson) {
    var m = new mm.Map('map-div',
      new wax.mm.connector(tilejson));
    wax.mm.attribution(m, tilejson).appendTo(m.parent);
    m.setCenterZoom(new mm.Location(tilejson.center[1], tilejson.center[0]), 10);
  }
);
</script>
{% endhighlight %}
</div>

## API

<dl>
  <dt>{% highlight js %}attribution = wax.mm.attribution(map, tilejson){% endhighlight %}</dt>
  <dd>Create a new legend object. This control requires the TileJSON object
  to be valid and contain a valid attribution attribute.</dd>
  <dt>{% highlight js %}attribution.appendTo(element){% endhighlight %}</dt>
  <dd>Add the attribution element - a div of the form
  {% highlight html %}<div class='wax-attribution'>legend content</div>{% endhighlight %}
  </dd>
</dl>
