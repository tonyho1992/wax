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

<div class='live'>
{% highlight html %}
<div id='map-div'></div>
<script>
var mm = com.modestmaps;
wax.tilejson('http://a.tiles.mapbox.com/mapbox/1.0.0/world-light/layer.json',
  function(tilejson) {
    var m = new mm.Map('map-div', new wax.mm.connector(tilejson));

    wax.mm.fullscreen(m, tilejson).appendTo(m.parent);
    m.setCenterZoom(new mm.Location(39, -98), 2);
});
</script>
{% endhighlight %}
</div>

## API

<dl>
  <dt>{% highlight js %}fullscreen = wax.mm.fullscreen(map, tilejson){% endhighlight %}</dt>
  <dd>Create a new fullscreen object attached to a map. This doesn't add any
  UI to the map - see appendTo()</dd>
  <dt>{% highlight js %}fullscreen.appendTo(element){% endhighlight %}</dt>
  <dd>Add the fullscreen control - a single element of the form
  {% highlight html %}<a class='wax-fullscreen'>fullscreen</a>{% endhighlight %}
  to an element given by 'element'.</dd>
  <dt>{% highlight js %}fullscreen.full(){% endhighlight %}</dt>
  <dd>Turn fullscreen mode on</dd>
  <dt>{% highlight js %}fullscreen.origin(){% endhighlight %}</dt>
  <dd>Turn off fullscreen mode and return to the original size of the map</dd>
</dl>
