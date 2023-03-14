var wms_layers = [];


        var lyr_GOOGLESATELLITE_0 = new ol.layer.Tile({
            'title': 'GOOGLE SATELLITE',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Polyline_FeatureToPolygon3_1 = new ol.format.GeoJSON();
var features_Polyline_FeatureToPolygon3_1 = format_Polyline_FeatureToPolygon3_1.readFeatures(json_Polyline_FeatureToPolygon3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polyline_FeatureToPolygon3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polyline_FeatureToPolygon3_1.addFeatures(features_Polyline_FeatureToPolygon3_1);
var lyr_Polyline_FeatureToPolygon3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polyline_FeatureToPolygon3_1, 
                style: style_Polyline_FeatureToPolygon3_1,
                interactive: true,
                title: '<img src="styles/legend/Polyline_FeatureToPolygon3_1.png" /> Polyline_FeatureToPolygon3'
            });

lyr_GOOGLESATELLITE_0.setVisible(true);lyr_Polyline_FeatureToPolygon3_1.setVisible(true);
var layersList = [lyr_GOOGLESATELLITE_0,lyr_Polyline_FeatureToPolygon3_1];
lyr_Polyline_FeatureToPolygon3_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Polyline_FeatureToPolygon3_1.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', });
lyr_Polyline_FeatureToPolygon3_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Polyline_FeatureToPolygon3_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});