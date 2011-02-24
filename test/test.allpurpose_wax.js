// likely shortcuts:
// @c instead of @chain
// single-arguments can be just string
$(function() {
var gmap = {
    'wax': [{
        '@n': ['google.maps.Map', [
                [{
                    '@c': [
                        ['document.getElementById', ['gmap']]
                    ]
                }],
                [{
                    center: [{
                        '@n': ['google.maps.LatLng', [0, 0]]
                    }],
                    zoom: 2,
                    mapTypeId: [{
                        '@l': 'google.maps.MapTypeId.ROADMAP'
                    }]
                }]
            ]
        ]
    }]
};

var poly = {
    'wax': [{
        '@c': [
            ['org.polymaps.map', []],
            ['container', [{
                '@c': [
                    ['document.getElementById', ['pmap']],
                    ['appendChild', [{
                            '@c': [
                                ['org.polymaps.svg', ['svg']]
                            ]
                        }]
                    ]
                ]
            }]],
            ['add', [{
                '@c': [
                    ['org.polymaps.interact', []],
                ]
            }]],
            ['add', [{
                '@c': [
                    ['org.polymaps.image', []],
                    ['url', ["http://a.tile.cloudmade.com"
                        + "/1a1b06b230af4efdbb989ea99e9841af" // http://cloudmade.com/register
                        + "/998/256/{Z}/{X}/{Y}.png"]]
                ]
            }]]
    ]}
]};

wax.Wax.reify(gmap.wax);
wax.Wax.reify(poly.wax);

});
