var mapView = new ol.View ({
    center: ol.proj.fromLonLat([-7.7820602,110.3724855]),
    zoom: 12
});

var map = new ol.Map({
    target: 'map',
    view: mapView
});

///Adding Basemap
var noneTile = new ol.layer.Tile ({
    title: 'None',
    type: 'base',
    visible: false
});

var lightTile = new ol.layer.Tile ({
    title: 'OSM Light',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});

// map.addLayer(osmTile);
var baseGroup = new ol.layer.Tile({
    title: 'Base Maps',
    layers: [lightTile, noneTile]
});

map.addLayer(baseGroup)

/// Adding Vector Overlay
var overlays = new ol.layer.Group({
    'title': 'Legenda',
    fold: true,
    layers: [
    new ol.layer.Image({
        title: 'Halte',
        // extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/wms',
            params: {'LAYERS': 'test_transjogja:halte'},
            ratio: 1,
            serverType: 'geoserver'
        })
    }),
    new ol.layer.Image({
        title: 'Rute 1B',
        // extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/wms',
            params: {'LAYERS': 'test_transjogja:rute_1b'},
            ratio: 1,
            serverType: 'geoserver'
        })
    }),
    new ol.layer.Image({
        title: 'Rute 4A',
        // extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/wms',
            params: {'LAYERS': 'test_transjogja:rute_4a'},
            ratio: 1,
            serverType: 'geoserver'
        })
    }),
    new ol.layer.Image({
        title: 'Rute 4B',
        // extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/wms',
            params: {'LAYERS': 'test_transjogja:rute_4b'},
            ratio: 1,
            serverType: 'geoserver'
        })
    }),
    new ol.layer.Image({
        title: 'Rute 5A',
        // extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/wms',
            params: {'LAYERS': 'test_transjogja:rute_5a'},
            ratio: 1,
            serverType: 'geoserver'
        })
    }),
    new ol.layer.Image({
        title: 'Rute 5B',
        // extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/wms',
            params: {'LAYERS': 'test_transjogja:rute_5b'},
            ratio: 1,
            serverType: 'geoserver'
        })
    }),
    new ol.layer.Image({
        title: 'Rute 8',
        // extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/wms',
            params: {'LAYERS': 'test_transjogja:rute_8'},
            ratio: 1,
            serverType: 'geoserver'
        })
    }),
    new ol.layer.Image({
        title: 'Rute 14',
        // extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/wms',
            params: {'LAYERS': 'test_transjogja:rute_14'},
            ratio: 1,
            serverType: 'geoserver'
        })
    }),
    new ol.layer.Image({
        title: 'Rute K1J',
        // extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/wms',
            params: {'LAYERS': 'test_transjogja:rute_k1j'},
            ratio: 1,
            serverType: 'geoserver'
        })
    })
    ]
});

map.addLayer(overlays);

var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    startActive: false,
    groupSelectStyle: 'children'
});

map.addControl(layerSwitcher);
