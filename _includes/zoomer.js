var tilejson = {
  tilejson: '1.0.0',
  scheme: 'tms',
  tiles: ['http://a.tiles.mapbox.com/mapbox/1.0.0/world-glass/{z}/{x}/{y}.png']
};
var mm = com.modestmaps;
var m = new mm.Map('map',
  new wax.mm.connector(tilejson),
  new mm.Point(600,300));
wax.mm.zoomer(m, tilejson).appendTo(m.parent);
m.setCenterZoom(new mm.Location(39, -98), 2);
