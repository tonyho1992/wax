---
title: Interaction
tags: Google
layout: control-g
---

The interaction control adds quite a bit of logic to the map, adding
interactivity - mouse hovers and clicks - to layers that support it, like those
made with [TileMill](http://tilemill.com/) and the interactive
[UTFGrid section](https://github.com/mapbox/mbtiles-spec/blob/master/1.1/utfgrid.md)
of the [MBTiles spec](https://github.com/mapbox/mbtiles-spec).

- Include the Google Maps API V3 according to the [API documentation](http://code.google.com/apis/maps/documentation/javascript/tutorial.html#Loading_the_Maps_API).
- `wax/dist/wax.g.js` contains the Wax controls and integration code for
  Google Maps.
- `wax/theme/controls.css` contains default styles for controls. You can always
  swap in your own later on.

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

var m = new google.maps.Map(
  document.getElementById('map-div'), {
    center: new google.maps.LatLng(0, 0),
    disableDefaultUI: true,
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.ROADMAP });
m.mapTypes.set('mb', new wax.g.connector(tilejson));
m.setMapTypeId('mb');
wax.g.interaction(m, tilejson);
</script>
{% endhighlight %}
</div>

## API

<dl>
  <dt>{% highlight js %}var interaction = wax.g.interaction(map, tilejson, options){% endhighlight %}</dt>
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

