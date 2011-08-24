---
title: Interaction
tags: ModestMaps
layout: control
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

## Examples

{% highlight js %}
wax.tilejson(
  'http://tiles.mapbox.com/mapbox/api/Tileset/geography-class',
  function(tilejson) {
    var m = new mm.Map('modestmaps-interaction',
      new wax.mm.connector(tilejson),
      new mm.Point(240,120));

    wax.mm.interaction(m, tilejson);
    m.setCenterZoom(new mm.Location(39, -98), 1);
  }
);
{% endhighlight %}

## API

<dl>
  <dt>{% highlight js %}var interaction = wax.mm.interaction(map, tilejson, options){% endhighlight %}</dt>
  <dd>
    Create a new interaction object with a given map, TileJSON, and options object.

    Interaction takes an options argument:

    <dl>
      <dt>callbacks: wax.tooltip or equivalent</dt>
      <dd>By default, this control triggers tooltips for when the user
      hovers over things and clicks them. You can spot in any other object
      that implements all of the functions that wax.tooltip does.</dd>
    </dl>
  </dd>
</dl>

