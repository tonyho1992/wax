---
title: Interaction
tags: OpenLayers
layout: control-ol
---

The interaction control adds quite a bit of logic to the map, adding
interactivity - mouse hovers and clicks - to layers that support it, like those
made with [TileMill](http://tilemill.com/) and the interactive
[UTFGrid section](https://github.com/mapbox/mbtiles-spec/blob/master/1.1/utfgrid.md)
of the [MBTiles spec](https://github.com/mapbox/mbtiles-spec).

While we provide an interaction control for OpenLayers for projects that must
use OpenLayers, it is not recommended for new projects, and may be discontinued
in the future.

<div class='live'>
{% highlight html %}
<div id='map-div'></div>
<a class='attribution' href='http://mapbox.com/tileset/geography-class'>Geography Class</a>
<script>
wax.tilejson('http://d.tiles.mapbox.com/v2/mapbox.blue-marble-topo-bathy-jan.jsonp', function(tilejson) {
    var map = new OpenLayers.Map({
        div: 'map-div',
        maxExtent: new OpenLayers.Bounds(
          -20037500,
          -20037500,
          20037500,
          20037500
        ),
        maxZoom:18,
        maxResolution: 156543.0339,
        theme: 'http://js.mapbox.com/theme/dark.css',
        projection: new OpenLayers.Projection('EPSG:900913'),
        units: 'm',
        layers: [
            wax.ol.connector(tilejson)
        ]
    });
    map.zoomToExtent(extent);
});
</script>
{% endhighlight %}
</div>

## API

<dl>
  <dt>{% highlight js %}var interaction = wax.ol.Interaction(map, tilejson, options){% endhighlight %}</dt>
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
