---
title: Interaction
tags: Leaflet touch
layout: control-leaf
---

The interaction control adds quite a bit of logic to the map, adding
interactivity - mouse hovers and clicks - to layers that support it, like those
made with [TileMill](http://tilemill.com/) and the interactive
[UTFGrid section](https://github.com/mapbox/mbtiles-spec/blob/master/1.1/utfgrid.md)
of the [MBTiles spec](https://github.com/mapbox/mbtiles-spec).

The interaction control takes a parameter, `callbacks`, that has the
default value of `new wax.tooltip()` - the default tooltip library that comes
with wax. Any other library that implements the same interface
(see `tooltips.js`) can be passed into the callbacks parameter.

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
var tilejson = {
  tilejson: '1.0.0',
  scheme: 'tms',
  tiles: ['http://a.tiles.mapbox.com/mapbox/1.0.0/geography-class/{z}/{x}/{y}.png'],
  grids: ['http://a.tiles.mapbox.com/mapbox/1.0.0/geography-class/{z}/{x}/{y}.grid.json'],
  formatter: function(options, data) { return data.NAME }
};
var map = new L.Map('map-div')
  .addLayer(new wax.leaf.connector(tilejson))
  .setView(new L.LatLng(51.505, -0.09), 1);
wax.leaf.interaction(map, tilejson);
</script>
{% endhighlight %}
</div>

## API

<dl>
  <dt>{% highlight js %}var interaction = wax.leaf.interaction(map, tilejson, options){% endhighlight %}</dt>
  <dd>
    Create a new interaction object with a given map, TileJSON, and options object.

    Interaction takes an options argument:

    <dl>
      <dt>callbacks: wax.tooltip or equivalent</dt>
        <dd>By default, this control triggers tooltips for when the user
        hovers over things and clicks them. You can spot in any other object
        that implements all of the functions that wax.tooltip does.
        </dd>
      <dt>clickAction: ['full', 'teaser', 'location']</dt>
        <dd>When a user clicks an element, a number of different things can
        happen. By default, this control tries the 'full' formatter, and then
        the 'location' formatter, and, according to what they do, either
        opens a tooltip with the 'full' content, or goes to the location
        specified by the 'location' content. You can specify your own list
        - an array of strings is necessary - of things that will happen instead.
        </dd>
      <dt>clickHandler: function(url) {}</dt>
        <dd>By default, this control will simply set <code>window.location</code>
        when the 'location' formatter is used. In some cases, like when you're using
        Backbone or another Javascript framework, you might want a different
        Javascript link-follower, or do things like redirecting users to a 'leaving this site'
        page. You can provide one with a clickHandler function.</dd>
    </dl>
  </dd>
  <dt>{% highlight js %}interaction.remove(){% endhighlight %}</dt>
    <dd>Disengage an interaction object from the map it is bound to: this
    removes all of its event listeners and hides any tooltips, if any are
    being shown.</dd>
</dl>

