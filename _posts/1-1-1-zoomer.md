---
title: "Zoomer"
tags: ModestMaps
layout: control
---

A simple zoom control offering zoom in &amp; out buttons. It creates links and
appends them to the map.

### Example

{% highlight html %}
<div id='map-div'></div>
<script>
var tilejson = {
  tilejson: '1.0.0',
  scheme: 'tms',
  tiles: ['http://a.tiles.mapbox.com/mapbox/1.0.0/world-glass/{z}/{x}/{y}.png']
};
var mm = com.modestmaps;
var m = new mm.Map('map-div',
  new wax.mm.connector(tilejson),
  new mm.Point(600,300));
wax.mm.zoomer(m, tilejson).appendTo(m.parent);
m.setCenterZoom(new mm.Location(39, -98), 2);
</script>
{% endhighlight %}

### API

<dl>
  <dt>{% highlight js %}var zoomer = wax.mm.zoomer(map){% endhighlight %}</dt>
  <dd>Create your own zoomer that controls a map called 'map'</dd>

  <dt>{% highlight js %}zoomer.appendTo(element){% endhighlight %}</dt>
  <dd>Add the zoom in &amp; zoom out div elements to another element.</dd>
</dl>
