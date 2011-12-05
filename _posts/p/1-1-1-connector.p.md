---
title: Connector
tags: Polymaps
layout: control-p
---

The Polymaps connector lets you quickly configure a MapBox map with
[Polymaps](http://polymaps.org/).

This connector is a bit different than the others: since Polymaps
does not configure per-layer min & max zoom levels, you'll need to
use <code>tilejson.maxzoom</code> and <code>tilejson.minzoom</code>,
as in the example below, to prevent overzooming.

{% highlight html %}
<html>
<head>
  <script src='wax/ext/polymaps.js' type='text/javascript'></script>
  <script src='wax/dist/wax.p.js' type='text/javascript'></script>
{% endhighlight %}

## Example

<div class='live'>
{% highlight html %}
<div id='map-div'></div>
<script>
wax.tilejson('http://a.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jul-bw.jsonp',
  function(tilejson) {
  var po = org.polymaps;
  var map = po.map()
    .container(document.getElementById('map-div').appendChild(po.svg('svg')))
    .zoomRange([tilejson.minzoom, tilejson.maxzoom])
    .zoom(2)
    .center({lat: 0, lon:0})
    .add(wax.p.connector(tilejson))
    .add(po.interact())
    .add(po.compass().pan('none'));
});
</script>
{% endhighlight %}
</div>

## API

<dl>
  <dt>{% highlight js %}var layer = new wax.p.connector(tilejson){% endhighlight %}</dt>
  <dd>
  Creates a new Polymaps layer that's addable with .add() on a map.
  </dd>
</dl>

