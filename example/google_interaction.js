$(function() {
    var map = ['@group',
        ['@new wax.g.Controls',
            ['@group',
                ['@new google.maps.Map',
                    ['@call document.getElementById', 'google-canvas'],
                    {
                        center: ['@new google.maps.LatLng', 0, 0],
                        zoom: 2,
                        mapTypeId: [ '@literal google.maps.MapTypeId.ROADMAP' ]
                    }
                ],
                ['@inject mapTypes.set', 'mb', ['@new wax.g.MapType']],
                ['@inject setMapTypeId', 'mb']
            ]
        ],
        ['@chain Interaction'],
        ['@chain Legend']
    ];
    wax.Wax.reify(map);
});
