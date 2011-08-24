---
title: Hash
tags: ModestMaps
layout: control
---

Save the map position to the URL so that links hit the map in the same state as
the initial user.

By default, this control uses [pushState](https://developer.mozilla.org/en/DOM/Manipulating_the_browser_history),
a feature found in modern webbrowsers, to give you the history of the map without
changing the page URL. You can use traditional hashes (`#/0/0/etc`) by
specifying `manager: wax.mm.locationHash` in its options object.

## Example

{% highlight js %}
var mm = com.modestmaps;
var tilejson = {
  tilejson: '1.0.0',
  scheme: 'tms',
  tiles: ['http://a.tiles.mapbox.com/mapbox/1.0.0/natural-earth-2/{z}/{x}/{y}.png']
};

var m = new mm.Map('modestmaps-hash',
  new wax.mm.connector(tilejson),
  new mm.Point(240,120));

wax.mm.hash(m, tilejson, {
  defaultCenter: new mm.Location(39, -98),
  defaultZoom: 4,
  manager: wax.mm.pushState
});
{% endhighlight %}

## API

<dl>
  <dt>{% highlight js %}var hash = wax.mm.hash(map, tilejson, options){% endhighlight %}</dt>
  <dd>
    Create a new hash object with a given map, TileJSON, and options object.
    The hash control takes a TileJSON argument as a point of uniformity
    but does not use it in operation.

    Hashes take an options argument:

    <dl>
      <dt>defaultCenter: com.modestmaps.Location, defaultZoom: number</dt>
      <dd>The center and zoom to be set on the map that will be set if a
      hash is not present in the URL or pushState history</dd>
      <dt>manager: object</dt>
      <dd>The hash manager. Wax provides wax.mm.pushState and wax.mm.locationHash.</dd>
    </dl>
  </dd>
</dl>

