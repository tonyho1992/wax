---
title: Connector
tags: Polymaps
layout: control-p
---

The Polymaps connector lets you quickly configure a MapBox map with
[Polymaps](http://polymaps.org/)

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
wax.tilejson('http://api.tiles.mapbox.com/v2/mapbox.geography-class.jsonp',
    function(tilejson) {
    var po = org.polymaps;

    var map = po.map()
        .container(document.getElementById('map-div').appendChild(po.svg('svg')))
        .zoomRange([0, 9])
        .zoom(7)
        .add(po.image().url('http://s3.amazonaws.com/com.modestmaps.bluemarble/{Z}-r{Y}-c{X}.jpg'))
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
  </dd>
</dl>

