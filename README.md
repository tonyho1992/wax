# Wax

Tools for improving web maps. The centerpiece of the code is a client 
implementation of the [MBTiles interaction specification](https://github.com/mapbox/mbtiles-spec).

## Controls

* `wax.tooltip`
* `wax.legend`

#### OpenLayers

* `wax.ol.Interaction`
* `wax.ol.Legend`

#### Google Maps API v3

* `wax.g.Interaction`
* `wax.g.Legend`
* `wax.g.MapType`
* `wax.g.mapBoxLogo`

#### Lib

* `jquery.jsonp-2.1.4.js`, [from jquery-jsonp](http://code.google.com/p/jquery-jsonp/)

#### Records

The main usage of mapping frameworks through Wax is via records. Records are pure JSON objects that have a 1:1 representation with function Javascript code, but, unlike imperative code, can be stored and manipulated as configuration. Records are tested with [polymaps](http://polymaps.org), [openlayers](http://openlayers.org/) and Google Maps API v3, but the system (`/lib/record.js`) is generalized beyond mapping tools of any sort, to exist as a basic Javascript AST interpreter.

Currently records support several control techniques:

* `@new` instantiates objects
* `@chain` runs functions, changing the value of `this` with each run
* `@inject` runs a function in a `@chain` without changing the reference to `this`
* `@call` runs a function from the global scope changing the value of `this`
* `@literal` allows an object attribute to be referenced
* `@group` runs a set of record statements (e.g. using the keywords above) in order

These techniques (with arbitrary levels of nesting), are sufficient to construct maps in each mapping framework.

## Requirements

* [jQuery](http://jquery.com/) - tested with 1.5
* (build only) [UglifyJS](https://github.com/mishoo/UglifyJS/)

## Building

* Requires [UglifyJS](https://github.com/mishoo/UglifyJS/)

Install mainline UglifyJS:

    npm install https://github.com/mishoo/UglifyJS/tarball/master

Make the combined & minified OpenLayers & Google Maps libraries:

    make build

## Includes

Wax includes two libraries in `/lib` which are included in builds

* [underscore.js](http://documentcloud.github.com/underscore/) (MIT)
* [jquery-jsonp](http://code.google.com/p/jquery-jsonp/) (MIT)

## Authors

- Tom MacWright (tmcw)
- Young Hahn (yhahn)
- Will White (willwhite)
