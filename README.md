# Wax

Tools for improving web maps. The centerpiece of the code is a client
implementation of the [MBTiles interaction specification](https://github.com/mapbox/mbtiles-spec).

## Controls

* `wax.tooltip`
* `wax.legend`

#### Modest Maps

Modest Maps is the primary target for Wax, given its simplicity and high quality.

* `wax.interaction()`
* `wax.zoomer()`
* `wax.zoombox()`
* `wax.boxselect()`
* `wax.pointselector()`
* `wax.legend()`
* `wax.mobile()`
* `wax.fullscreen()`
* `wax.zoombox()`
* `wax.hash()`

#### OpenLayers

* `wax.ol.Interaction`
* `wax.ol.Legend`
* `wax.ol.Embedder`
* `wax.ol.Switcher`

#### Google Maps API v3

* `wax.g.Controls`
* `wax.g.MapType`
* `wax.g.mapBoxLogo`


#### Records

The main usage of mapping frameworks through Wax is via records. Records are pure JSON objects that have a 1:1 representation with function Javascript code, but, unlike imperative code, can be stored and manipulated as configuration. Records are tested with [polymaps](http://polymaps.org), [openlayers](http://openlayers.org/), [Modest Maps](https://github.com/stamen/modestmaps-js) and Google Maps API v3, but the system (`/lib/record.js`) is generalized beyond mapping tools of any sort, to exist as a basic Javascript AST interpreter.

Currently records support several control techniques:

* `@new` instantiates objects
* `@chain` runs functions, changing the value of `this` with each run
* `@inject` runs a function in a `@chain` without changing the reference to `this`
* `@call` runs a function from the global scope changing the value of `this`
* `@literal` allows an object attribute to be referenced
* `@group` runs a set of record statements (e.g. using the keywords above) in order

These techniques (with arbitrary levels of nesting), are sufficient to construct maps in each mapping framework.

## Requirements

* (docs only) [docco](https://github.com/jashkenas/docco)
* (build only) [UglifyJS](https://github.com/mishoo/UglifyJS/)

## Usage Examples

Samples of usage can be found in examples/. These depend on localizing copies of each API code.

To set up the examples first run:

    make ext

Then check out the example html files.

## Building library

For wax users, a minified library is already provided in build/.

But for developers you can rebuild a minified library by running:

    make build

* Requires [UglifyJS](https://github.com/mishoo/UglifyJS/)

Install mainline UglifyJS:

    npm install https://github.com/mishoo/UglifyJS/tarball/master

Make the combined & minified OpenLayers & Google Maps libraries:

    rm -r build
    make build

## Building docs

Wax uses docco for documention. Install it like:

    npm install --dev

Make the docs:

    make doc

## Includes

Wax currently includes one external:

* [reqwest](https://github.com/ded/reqwest) (MIT)

## Authors

- Tom MacWright (tmcw)
- Young Hahn (yhahn)
- Will White (willwhite)
