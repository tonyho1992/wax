---
title: Hash
tags: ModestMaps touch
layout: control
---

Save the map position to the URL so that links hit the map in the same state as
the initial user.

## Example

<div class='live'>
{% highlight html %}
<div id='map-div'></div>
<script>
var mm = com.modestmaps;
var url = 'http://api.tiles.mapbox.com/v3/mapbox.natural-earth-2.jsonp';

wax.tilejson(url, function(tilejson) {
    var map = new mm.Map('map-div',
      new wax.mm.connector(tilejson));

    wax.mm.hash(map);

    map.setCenterZoom(new mm.Location(10, 20), 2);
});
</script>
{% endhighlight %}
</div>

## API

<dl>
  <dt>{% highlight js %}var hash = wax.mm.hash(map){% endhighlight %}</dt>
  <dd>
    Create a new hash object with a given map.
  </dd>
</dl>
