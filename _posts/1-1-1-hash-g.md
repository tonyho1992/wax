---
title: Hash
tags: Google
layout: control-g
---

Save the map position to the URL so that links hit the map in the same state as
the initial user.

{% highlight html %}
<html>
<head>
  <script
    src='http://maps.google.com/maps/api/js?sensor=false'
    type='text/javascript'></script>
  <script
    src='wax/dist/wax.g.min.js'
    type='text/javascript'></script>
  <link
    href='wax/theme/controls.css'
    rel='stylesheet'
    type='text/css' />
{% endhighlight %}

Wax has a custom Google map type that can display tilesets described by
the TileJSON format at `wax.g.connector`.

<div class='live'>
{% highlight html %}
<div id='map-div'></div>
<a class='attribution' href='http://mapbox.com/tileset/geography-class'>Geography Class</a>
<script>
var tilejson = {
  tilejson: '1.0.0',
  scheme: 'tms',
  tiles: ['http://a.tiles.mapbox.com/mapbox/1.0.0/geography-class/{z}/{x}/{y}.png'],
  grids: ['http://a.tiles.mapbox.com/mapbox/1.0.0/geography-class/{z}/{x}/{y}.grid.json'],
  formatter: function(options, data) { return data.NAME }
};

var map = new google.maps.Map(
  document.getElementById('map-div'), {
    center: new google.maps.LatLng(0, 0),
    disableDefaultUI: true,
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.ROADMAP });
map.mapTypes.set('mb', new wax.g.connector(tilejson));
map.setMapTypeId('mb');
wax.g.hash(map);
</script>
{% endhighlight %}
</div>

## API

<dl>
  <dt>{% highlight js %}var interaction = wax.g.hash(map){% endhighlight %}</dt>
  <dd>
    Create a new interaction object with a given map, TileJSON, and options object.
  </dd>
</dl>

