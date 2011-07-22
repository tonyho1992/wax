describe('bwdetect', function() {
    var map, initial_zoom = 10;

    beforeEach(function() {
        var div = document.createElement('div');
        div.style.width = '400px';
        div.style.height = '400px';

        map = new com.modestmaps.Map(div, new com.modestmaps.TemplatedMapProvider(
            'http://{S}tile.openstreetmap.org/{Z}/{X}/{Y}.png', ['a.']));
        map.setCenterZoom(new com.modestmaps.Location(37.811530, -122.2666097), 10);
        wax.mm.bwdetect(map);
    });

    it('marks as unzoomable when zoom is eighteen', function() {
        // expect($('.zoomin', map.parent).hasClass('zoomdisabled')).toEqual(true);
    });
});
