---
layout: default
title: Wax
---

Wax is your gateway into putting maps on the web. It makes it easier to
use APIs like [Modest Maps](http://github.com/stamen/modestmaps-js), and
documents, from the very start, the basics of web maps.

If you're just starting out, follow along and by the end, you'll be a
web-mapping pro.

<div class='live'>
{% highlight html %}
<div id='intro-map'></div>
<script>
var mm = com.modestmaps;
var url = 'http://api.tiles.mapbox.com/v3/mapbox.geography-class.jsonp';

wax.tilejson(url, function(tilejson) {
  var m = new mm.Map('intro-map',
    new wax.mm.connector(tilejson),
    new mm.Point(700,400));

  m.setCenterZoom(new mm.Location(tilejson.center[1],
    tilejson.center[0]),
    tilejson.center[2] - 3);

  wax.mm.zoomer(m).appendTo(m.parent);
  wax.mm.interaction(m);
});
</script>
{% endhighlight %}
</div>

## Get Wax

To follow this quick tutorial, you'll need a copy of Wax: unlike Google Maps,
it's a Javascript library you copy to your server, so you have control over it.

If you just want to download the source code for Wax,
[get a zip file from GitHub](https://github.com/mapbox/wax/tags).
If you want to develop Wax, or keep it up to date more easily, [check out the
project from GitHub](https://github.com/mapbox/wax) with git.

See [Making Your First Map](#making-your-first-map) below for instructions on
how to include Wax in your project.

## A Quick Intro

Suppose you're making cool map designs with [TileMill](http://tilemill.com/)
or you want to use maps from [MapBox Hosting](http://tiles.mapbox.com), and you want to
get famous by putting them somewhere online - your blog, a big CMS, or anywhere else.

Don't be afraid! It's not too hard to do, and once you've learned how to do it,
you'll have the power to make super-custom maps with minimal effort.

So your ingredients will be:

* A map server, like [TileStream](http://github.com/mapbox/tilestream) or
  [MapBox Hosting](http://tiles.mapbox.com). All of the examples you'll see
  here use MapBox Hosting, so you can copy & paste at will and it'll all work.
* A Javascript API, like [Modest Maps](http://github.com/stamen/modestmaps-js)
* Wax
* Your website

The mapping server serves up **tiles** of rendered data - tiles being 256 pixel
square images covering some of the world. Here's a tile of Europe from the
[World Light tileset](http://tiles.mapbox.com/mapbox/map/world-light).

![Europe](http://a.tiles.mapbox.com/v3/mapbox.world-light/2/2/1.png)

Of course, things will get a lot cooler than this: Wax lets you use your own
tiles, add zoom buttons, interaction, and a lot more. But it all starts out
with tiles.

<h2 id='making-your-first-map'>Making Your First Map</h2>

The first step is to download and include the necessary Javascript code to
make your map work. We'll also include a CSS file to start rolling with style:

- `wax/ext/modestmaps.min.js` contains the Modest Maps library.
- `wax/dist/wax.mm.js` contains the Wax controls and integration code for
  Modest Maps.
- `wax/theme/controls.css` contains default styles for controls. You can always
  swap in your own later on.

{% highlight html %}
<html>
  <head>
    <script src='wax/ext/modestmaps.min.js' type='text/javascript'></script>
    <script src='wax/dist/wax.mm.js' type='text/javascript'></script>
    <link href='wax/theme/controls.css' rel='stylesheet' type='text/css' />
  ...
{% endhighlight %}

Here's your first map! If you've downloaded Wax and add the code above into the
<code>&lt;head&gt;</code> of your page, then you can put the following code into the
<code>&lt;body&gt;</code> of your page, and you'll get a map! Go ahead and
drag around the little map below -
Modest Maps is making the tiles move when you click and drag.

{% highlight html %}
<div id="modestmaps-setup"></div>
<script>
var tilejson = {
  tilejson: '1.0.0',
  scheme: 'xyz',
  tiles: ['http://a.tiles.mapbox.com/v3/mapbox.world-light/{z}/{x}/{y}.png']
};

var url = 'http://api.tiles.mapbox.com/v3/mapbox.world-light.jsonp';
// Alias com.modestmaps to mm. This isn't necessary -
// just nice for shorter code.
var mm = com.modestmaps;
wax.tilejson(url, function(tilejson) {
    // Set up a map in a div with the id 'modestmaps-setup'
    var m = new mm.Map('modestmaps-setup',
      // Use Wax's connector to add a new custom layer
      new wax.mm.connector(tilejson),
      // And it'll be 240px by 120px
      new mm.Point(240,120));

    // Center it on the United States, at zoom level 2.
    m.setCenterZoom(new mm.Location(39, -98), 2);
});
</script>
{% endhighlight %}
</pre>

Let's look at how that was done: the only thing on the page besides that
<code>&lt;script&gt;</code> tag and its code is a <code>&lt;div&gt;</code>
tag with the id `modestmaps-setup`. And, down below, you see the code

{% highlight js %}
var m = new mm.Map('modestmaps-setup'...
{% endhighlight %}

So, you're telling Modest Maps (`mm`) to create a new map contained by
this div element. It then does the work of putting a lot of images on the page
and lining them up.

What's this `tilejson` variable?
[TileJSON](http://github.com/mapbox/tilejson) is a way of
describing the basic stuff about a map - where tiles are, how they're
named, and optionally a lot more, like available zoom levels and legends.

Down the line, TileJSON will make your life a lot easier by letting you
skip a lot of steps of configuring maps, but we'll explain it in detail first.

## TileJSON

To start you'll need to know the URL of the tileset you want to use. Most
tilesets follow the convention of ending in `/{z}/{x}/{y}.[image format]`
where `{z}` is the *zoom level*, `{x}` is the *x coordinate* and `{y}` is
the *y coordinate*. TileJSON represents tileset URLs using these placeholders
so that a tile at any coordinate can be requested.

The URL of the tile above is `http://a.tiles.mapbox.com/v3/mapbox.world-light/2/2/1.png`.
By inference we can write the TileJSON needed to use the World Light tileset:

{% highlight js %}
{
  "version": "1.0.0",
  "scheme": "xyz",
  "tiles" ["http://a.tiles.mapbox.com/v3/mapbox.world-light/{z}/{x}/{y}.png"]
}
{% endhighlight %}

- The `version` key declares that we are implementing version `1.0.0` of the
  TileJSON spec. Since there's only one version of TileJSON so far, it'll be `1.0.0` for you, too.
- The `scheme` key defines the order in which tiles are saved. Don't worry about this right now -
  you'll want the `xyz` scheme in most cases, but may find servers that use the `tms` scheme.
- The `tiles` key contains an array of URLs from which tiles can be requested. Pro users can put
  multiple tile URLs here so that they can request tiles from multiple domains simultaneously.


## Autopilot for TileJSON

Some servers, like [MapBox Hosting](http://tiles.mapbox.com/) provide TileJSON
definitions for all of the tilesets they serve. This way, it's easy to configure maps, since
all you need to know is the URL of the TileJSON file, and that'll provide you with values
for urls, a centerpoint, zoom ranges, and more. Wax contains a helper function that just
pulls a TileJSON description from a server using [JSONP](http://en.wikipedia.org/wiki/JSONP)
and gives it to you as an argument to a callback function that you can use to configure
your map.

Here we're using the url `http://api.tiles.mapbox.com/v3/mapbox.dc-nightvision.jsonp` for
the TileJSON for dc-nightvision - using the [MapBox Hosting API](http://mapbox.com/hosting/api/).

{% highlight js %}
var url = 'http://api.tiles.mapbox.com/v3/mapbox.dc-nightvision.jsonp';
wax.tilejson(url, function(tilejson) {
  var mm = com.modestmaps;
  var m = new mm.Map('tilejson-url',
    new wax.mm.connector(tilejson),
    new mm.Point(240,120));
  m.setCenterZoom(new mm.Location(
    tilejson.center[1],  // lon
    tilejson.center[0]), // lat
    tilejson.center[2]); // zoom
});
{% endhighlight %}
