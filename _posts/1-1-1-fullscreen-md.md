---
title: Fullscreen
tags: ModestMaps
layout: control
---

The fullscreen control adds a link to the map that assigns a
fullscreen class to the map, which makes it fill the page.

You'll see that this control adds a fullscreen link to the map, and that it's
a bit ugly right now. Until Wax's theming improves, keep in mind that its
styling, which is contained in `theme/controls.css`, is completely optional
and you can replace it with your own.

## Example

{% highlight html %}
<div id='map-div'></div>
<script>
var mm = com.modestmaps;
var tilejson = {
  tilejson: '1.0.0',
  scheme: 'tms',
  tiles: ['http://a.tiles.mapbox.com/mapbox/1.0.0/world-light/{z}/{x}/{y}.png']
};

var m = new mm.Map('map-div',
  new wax.mm.connector(tilejson),
  new mm.Point(240,120));

wax.mm.fullscreen(m, tilejson).appendTo(m.parent);
m.setCenterZoom(new mm.Location(39, -98), 2);
</script>
{% endhighlight %}

## API

<dl>
  <dt>{% highlight js %}fullscreen = wax.mm.fullscreen(map, tilejson){% endhighlight %}</dt>
  <dd>Create a new fullscreen object attached to a map. This doesn't add any
  UI to the map - see appendTo()</dd>
  <dt>{% highlight js %}fullscreen.appendTo(element){% endhighlight %}</dt>
  <dd>Add the fullscreen control - a single element of the form
  {% highlight html %}<a class='wax-fullscreen'>fullscreen</a>{% endhighlight %}
  to an element given by 'element'.</dd>
</dl>
