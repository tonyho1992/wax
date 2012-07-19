describe('control spec', function() {
    var map, callbackResult, controls;
    controls = {
        pointselector: wax.mm.pointselector(),
        boxselector: wax.mm.boxselector(),
        zoomer: wax.mm.zoomer(),
        zoombox: wax.mm.zoombox()
    };

    beforeEach(function() {
        var div = document.createElement('div');
        div.style.width = '400px';
        div.style.height = '400px';

        map = new MM.Map(div, new MM.TemplatedMapProvider(
            'http://{S}tile.openstreetmap.org/{Z}/{X}/{Y}.png', ['a.']));
        map.setCenterZoom(new MM.Location(37.811530, -122.2666097), 10);
        
    });

    afterEach(function() {
        div = null;
        map.destroy();
    });

    for (var i in controls) {
        describe(i, function() {
            it('can get and set the map', function() {
                expect(controls[i].map(map)).toEqual(controls[i]);
                expect(controls[i].map()).toEqual(map);
                expect(controls[i].map(map)).toEqual(controls[i]);
            });

            it('can be added', function() {
                expect(controls[i].add()).toEqual(controls[i]);
            });
        });
    }
});
