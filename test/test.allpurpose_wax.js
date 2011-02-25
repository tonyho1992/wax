// likely shortcuts:
// @chain instead of @chainhain
// single-arguments can be just string
$(function() {
var gmap = { 'wax':
    ['@new google.maps.Map',
        ['@call document.getElementById', 'gmap'],
        {
            center: [ '@new google.maps.LatLng', 0, 0 ],
            zoom: 2,
            mapTypeId: [ '@literal google.maps.MapTypeId.ROADMAP' ]
        }
    ]
};

var poly = { 'wax':
    ['@group',
        ['@call org.polymaps.map'],
        ['@chain container',
            ['@group', 
                ['@call document.getElementById', 'pmap'],
                ['@chain appendChild',
                    ['@call org.polymaps.svg', 'svg']
                ]
            ]
        ],
        ['@chain add',
            ['@call org.polymaps.interact']
        ],
        ['@chain add',
            ['@group', 
                ['@call org.polymaps.image'],
                ['@chain url', "http://a.tile.cloudmade.com"
                    + "/1a1b06b230af4efdbb989ea99e9841af" // http://cloudmade.com/register
                    + "/998/256/{Z}/{X}/{Y}.png"]
            ]
        ]
    ]
};

var open = { 'wax':
    ['@group',
        ['@new OpenLayers.Map',
            'olmap',
            {
                'maxExtent': [
                    '@new OpenLayers.Bounds',
                    -20037508.34,
                    -20037508.34,
                    20037508.34,
                    20037508.34
                ],
                "theme": "http://mapbox-js.s3.amazonaws.com/ol/2.8/mapbox.css",
                "maxResolution": 1.40625,
                "projection": [
                    '@new OpenLayers.Projection',
                    'EPSG:900913'
                ],
                "displayProjection": [
                    '@new OpenLayers.Projection',
                    'EPSG:900913'
                ],
                "units": "m"
            }
        ],
        ['@inject addLayer',
            ['@new OpenLayers.Layer.TMS',
                'Test Layer', 
                'http://a.tile.mapbox.com/',
                {
                    "layername": 'world-light',
                    "type": 'png',
                    "projection": [
                        "@new OpenLayers.Projection",
                        "EPSG:900913"
                    ],
                    "serverResolutions": [
                        156543.0339,78271.51695,39135.758475,19567.8792375,9783.93961875,
                        4891.96980938,2445.98490469,1222.99245234,611.496226172,
                        305.748113086,152.874056543,76.4370282715,38.2185141357,
                        19.1092570679,9.55462853394,4.77731426697,2.38865713348,
                        1.19432856674,0.597164283371
                    ],
                    "resolutions": [
                        156543.0339,78271.51695,39135.758475,19567.8792375,9783.93961875,
                        4891.96980938,2445.98490469,1222.99245234,611.496226172,
                        305.748113086,152.874056543,76.4370282715,38.2185141357,
                        19.1092570679,9.55462853394,4.77731426697,2.38865713348,
                        1.19432856674,0.597164283371
                    ],
                    'maxExtent': [
                        '@new OpenLayers.Bounds',
                        -20037508.34,
                        -20037508.34,
                        20037508.34,
                        20037508.34
                    ]
                }
            ]
        ],
        ['@inject zoomTo', 3]
    ]
};

OpenLayers.ImgPath = "http://js.mapbox.com/theme/dark/";

wax.Wax.reify(gmap.wax);
wax.Wax.reify(open.wax);
wax.Wax.reify(poly.wax);

});
