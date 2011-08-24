---
title: "Zoomer"
tags: ModestMaps
layout: control
---

A simple zoom control offering zoom in &amp; out buttons. It creates links and
appends them to the map.

### Example

<div id='map'></div>
<script>
{% include zoomer.js %}
</script>

{% highlight js %}
{% include zoomer.js %}
{% endhighlight %}

### API

<dl>
  <dt>{% highlight js %}var zoomer = wax.mm.zoomer(map){% endhighlight %}</dt>
  <dd>Create your own zoomer that controls a map called 'map'</dd>

  <dt>{% highlight js %}zoomer.appendTo(element){% endhighlight %}</dt>
  <dd>Add the zoom in &amp; zoom out div elements to another element.</dd>
</dl>
