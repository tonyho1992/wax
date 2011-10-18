---
title: Connector
tags: Leaflet
layout: control-leaf
---

The Leaflet connector lets you quickly configure a MapBox map with
[Leaflet](http://leaflet.cloudmade.com)

{% highlight html %}
<html>
<head>
  <script src='wax/ext/leaflet.js' type='text/javascript'></script>
  <script src='wax/dist/wax.leaf.js' type='text/javascript'></script>
  <link href='wax/ext/leaflet.css' rel='stylesheet' type='text/css' />
{% endhighlight %}

## Example

<div class='live'>
{% highlight html %}
<div id='map-div'></div>
<script>
wax.tilejson('http://api.tiles.mapbox.com/v2/mapbox.geography-class.jsonp',
    function(tilejson) {
        var map = new L.Map('map-div')
          .addLayer(new wax.leaf.connector(tilejson))
          .setView(new L.LatLng(51.505, -0.09), 1);
});
</script>
{% endhighlight %}
</div>

## API

<dl>
  <dt>{% highlight js %}var layer = new wax.leaf.connector(tilejson){% endhighlight %}</dt>
  <dd>
    Returns a new <code>L.TileLayer</code> object.
  </dd>
</dl>

