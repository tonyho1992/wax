# wax

Tools for improving web maps. The centerpiece of the code is a client 
implementation of the [MBTiles interaction specification](https://github.com/mapbox/mbtiles-spec).

## Controls

* `wax.tooltip`

#### OpenLayers

* `wax.ol.Interaction`
* `wax.ol.BoundsTransform`
* `wax.ol.Legend`
* `wax.ol.ZoomOnLoad`

#### Google Maps API v3

* `wax.g.Interaction`
* `wax.g.MapType`
* `wax.g.mapBoxLogo`

#### Lib

* `jquery.jsonp-2.1.4.js`, [from jquery-jsonp](http://code.google.com/p/jquery-jsonp/)

#### Records

The main usage of mapping frameworks through Wax is via records. Records are pure JSON objects that have a 1:1 representation with function Javascript code, but, unlike imperative code, can be stored and manipulated as configuration. Records are tested with [polymaps](http://polymaps.org), [openlayers](http://openlayers.org/) and Google Maps API v3, but the system (`/lib/record.js`) is generalized beyond mapping tools of any sort, to exist as a basic Javascript AST interpreter.

Currently records support three control techniques:

* `@new` instantiates objects
* `@chain` runs functions, changing the value of `this` with each run
* `@inject` runs a function in a `@chain` without changing the reference to `this`

These three techniques (with arbitrary levels of nesting), are sufficient to construct maps in each mapping framework.

## Notes

This module does not provide thorough theming or accessory images.

## Changelog

## Authors

- Tom MacWright (tmcw)
- Will White (willwhite)
