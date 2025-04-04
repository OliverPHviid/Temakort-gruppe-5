var wms_layers = [];

var format_Frededeomrder_0 = new ol.format.GeoJSON();
var features_Frededeomrder_0 = format_Frededeomrder_0.readFeatures(json_Frededeomrder_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_0.addFeatures(features_Frededeomrder_0);
var lyr_Frededeomrder_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_0, 
                style: style_Frededeomrder_0,
                popuplayertitle: 'Fredede områder',
                interactive: false,
    title: 'Fredede områder<br />\
    <img src="styles/legend/Frededeomrder_0_0.png" /> Damhuså<br />\
    <img src="styles/legend/Frededeomrder_0_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/Frededeomrder_0_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/Frededeomrder_0_3.png" /> Vestvolden<br />\
    <img src="styles/legend/Frededeomrder_0_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/Frededeomrder_0_5.png" /> <br />' });
var format_Kommuneplan_1 = new ol.format.GeoJSON();
var features_Kommuneplan_1 = format_Kommuneplan_1.readFeatures(json_Kommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommuneplan_1.addFeatures(features_Kommuneplan_1);
var lyr_Kommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommuneplan_1, 
                style: style_Kommuneplan_1,
                popuplayertitle: 'Kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/Kommuneplan_1.png" /> Kommuneplan'
            });
var format_Lokalplaner_2 = new ol.format.GeoJSON();
var features_Lokalplaner_2 = format_Lokalplaner_2.readFeatures(json_Lokalplaner_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplaner_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplaner_2.addFeatures(features_Lokalplaner_2);
var lyr_Lokalplaner_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplaner_2, 
                style: style_Lokalplaner_2,
                popuplayertitle: 'Lokalplaner',
                interactive: true,
    title: 'Lokalplaner<br />\
    <img src="styles/legend/Lokalplaner_2_0.png" /> 1012930<br />\
    <img src="styles/legend/Lokalplaner_2_1.png" /> 1024399<br />\
    <img src="styles/legend/Lokalplaner_2_2.png" /> 1053515<br />\
    <img src="styles/legend/Lokalplaner_2_3.png" /> 1054617<br />\
    <img src="styles/legend/Lokalplaner_2_4.png" /> 1061002<br />\
    <img src="styles/legend/Lokalplaner_2_5.png" /> 1061022<br />\
    <img src="styles/legend/Lokalplaner_2_6.png" /> 1061038<br />\
    <img src="styles/legend/Lokalplaner_2_7.png" /> 1061103<br />\
    <img src="styles/legend/Lokalplaner_2_8.png" /> 1061140<br />\
    <img src="styles/legend/Lokalplaner_2_9.png" /> 1061206<br />\
    <img src="styles/legend/Lokalplaner_2_10.png" /> 1061209<br />\
    <img src="styles/legend/Lokalplaner_2_11.png" /> 1061210<br />\
    <img src="styles/legend/Lokalplaner_2_12.png" /> 1061704<br />\
    <img src="styles/legend/Lokalplaner_2_13.png" /> 1061715<br />\
    <img src="styles/legend/Lokalplaner_2_14.png" /> 1061718<br />\
    <img src="styles/legend/Lokalplaner_2_15.png" /> 1061734<br />\
    <img src="styles/legend/Lokalplaner_2_16.png" /> 1061739<br />\
    <img src="styles/legend/Lokalplaner_2_17.png" /> 1061746<br />\
    <img src="styles/legend/Lokalplaner_2_18.png" /> 1061753<br />\
    <img src="styles/legend/Lokalplaner_2_19.png" /> 1061756<br />\
    <img src="styles/legend/Lokalplaner_2_20.png" /> 1061757<br />\
    <img src="styles/legend/Lokalplaner_2_21.png" /> 1061824<br />\
    <img src="styles/legend/Lokalplaner_2_22.png" /> 1061828<br />\
    <img src="styles/legend/Lokalplaner_2_23.png" /> 1061829<br />\
    <img src="styles/legend/Lokalplaner_2_24.png" /> 1061833<br />\
    <img src="styles/legend/Lokalplaner_2_25.png" /> 1062026<br />\
    <img src="styles/legend/Lokalplaner_2_26.png" /> 1062080<br />\
    <img src="styles/legend/Lokalplaner_2_27.png" /> 1062111<br />\
    <img src="styles/legend/Lokalplaner_2_28.png" /> 1062117<br />\
    <img src="styles/legend/Lokalplaner_2_29.png" /> 1062118<br />\
    <img src="styles/legend/Lokalplaner_2_30.png" /> 1062121<br />\
    <img src="styles/legend/Lokalplaner_2_31.png" /> 1070479<br />\
    <img src="styles/legend/Lokalplaner_2_32.png" /> 1071381<br />\
    <img src="styles/legend/Lokalplaner_2_33.png" /> 1074662<br />\
    <img src="styles/legend/Lokalplaner_2_34.png" /> 1074664<br />\
    <img src="styles/legend/Lokalplaner_2_35.png" /> 1074665<br />\
    <img src="styles/legend/Lokalplaner_2_36.png" /> 1074675<br />\
    <img src="styles/legend/Lokalplaner_2_37.png" /> 1075214<br />\
    <img src="styles/legend/Lokalplaner_2_38.png" /> 1075219<br />\
    <img src="styles/legend/Lokalplaner_2_39.png" /> 1075387<br />\
    <img src="styles/legend/Lokalplaner_2_40.png" /> 1075393<br />\
    <img src="styles/legend/Lokalplaner_2_41.png" /> 1075550<br />\
    <img src="styles/legend/Lokalplaner_2_42.png" /> 1075552<br />\
    <img src="styles/legend/Lokalplaner_2_43.png" /> 1075553<br />\
    <img src="styles/legend/Lokalplaner_2_44.png" /> 1075577<br />\
    <img src="styles/legend/Lokalplaner_2_45.png" /> 1075593<br />\
    <img src="styles/legend/Lokalplaner_2_46.png" /> 1075598<br />\
    <img src="styles/legend/Lokalplaner_2_47.png" /> 1075609<br />\
    <img src="styles/legend/Lokalplaner_2_48.png" /> 1075667<br />\
    <img src="styles/legend/Lokalplaner_2_49.png" /> 1075669<br />\
    <img src="styles/legend/Lokalplaner_2_50.png" /> 1075682<br />\
    <img src="styles/legend/Lokalplaner_2_51.png" /> 1075695<br />\
    <img src="styles/legend/Lokalplaner_2_52.png" /> 1075708<br />\
    <img src="styles/legend/Lokalplaner_2_53.png" /> 1075710<br />\
    <img src="styles/legend/Lokalplaner_2_54.png" /> 1075718<br />\
    <img src="styles/legend/Lokalplaner_2_55.png" /> 1075749<br />\
    <img src="styles/legend/Lokalplaner_2_56.png" /> 1075751<br />\
    <img src="styles/legend/Lokalplaner_2_57.png" /> 1075752<br />\
    <img src="styles/legend/Lokalplaner_2_58.png" /> 1075779<br />\
    <img src="styles/legend/Lokalplaner_2_59.png" /> 1075795<br />\
    <img src="styles/legend/Lokalplaner_2_60.png" /> 1075800<br />\
    <img src="styles/legend/Lokalplaner_2_61.png" /> 1075801<br />\
    <img src="styles/legend/Lokalplaner_2_62.png" /> 1075815<br />\
    <img src="styles/legend/Lokalplaner_2_63.png" /> 1075877<br />\
    <img src="styles/legend/Lokalplaner_2_64.png" /> 1075891<br />\
    <img src="styles/legend/Lokalplaner_2_65.png" /> 1075893<br />\
    <img src="styles/legend/Lokalplaner_2_66.png" /> 1075897<br />\
    <img src="styles/legend/Lokalplaner_2_67.png" /> 1075900<br />\
    <img src="styles/legend/Lokalplaner_2_68.png" /> 1075902<br />\
    <img src="styles/legend/Lokalplaner_2_69.png" /> 1075905<br />\
    <img src="styles/legend/Lokalplaner_2_70.png" /> 1075906<br />\
    <img src="styles/legend/Lokalplaner_2_71.png" /> 1075907<br />\
    <img src="styles/legend/Lokalplaner_2_72.png" /> 1075908<br />\
    <img src="styles/legend/Lokalplaner_2_73.png" /> 1076003<br />\
    <img src="styles/legend/Lokalplaner_2_74.png" /> 1076004<br />\
    <img src="styles/legend/Lokalplaner_2_75.png" /> 1076010<br />\
    <img src="styles/legend/Lokalplaner_2_76.png" /> 1076019<br />\
    <img src="styles/legend/Lokalplaner_2_77.png" /> 1076041<br />\
    <img src="styles/legend/Lokalplaner_2_78.png" /> 1076064<br />\
    <img src="styles/legend/Lokalplaner_2_79.png" /> 1076086<br />\
    <img src="styles/legend/Lokalplaner_2_80.png" /> 1076094<br />\
    <img src="styles/legend/Lokalplaner_2_81.png" /> 1076107<br />\
    <img src="styles/legend/Lokalplaner_2_82.png" /> 1076114<br />\
    <img src="styles/legend/Lokalplaner_2_83.png" /> 1076115<br />\
    <img src="styles/legend/Lokalplaner_2_84.png" /> 1076126<br />\
    <img src="styles/legend/Lokalplaner_2_85.png" /> 1076129<br />\
    <img src="styles/legend/Lokalplaner_2_86.png" /> 1076287<br />\
    <img src="styles/legend/Lokalplaner_2_87.png" /> 1076379<br />\
    <img src="styles/legend/Lokalplaner_2_88.png" /> 1076865<br />\
    <img src="styles/legend/Lokalplaner_2_89.png" /> 1076868<br />\
    <img src="styles/legend/Lokalplaner_2_90.png" /> 1076874<br />\
    <img src="styles/legend/Lokalplaner_2_91.png" /> 1076892<br />\
    <img src="styles/legend/Lokalplaner_2_92.png" /> 1076901<br />\
    <img src="styles/legend/Lokalplaner_2_93.png" /> 1076902<br />\
    <img src="styles/legend/Lokalplaner_2_94.png" /> 1076905<br />\
    <img src="styles/legend/Lokalplaner_2_95.png" /> 1076939<br />\
    <img src="styles/legend/Lokalplaner_2_96.png" /> 1076943<br />\
    <img src="styles/legend/Lokalplaner_2_97.png" /> 1076961<br />\
    <img src="styles/legend/Lokalplaner_2_98.png" /> 1076968<br />\
    <img src="styles/legend/Lokalplaner_2_99.png" /> 1077070<br />\
    <img src="styles/legend/Lokalplaner_2_100.png" /> 1077082<br />\
    <img src="styles/legend/Lokalplaner_2_101.png" /> 1077085<br />\
    <img src="styles/legend/Lokalplaner_2_102.png" /> 1077086<br />\
    <img src="styles/legend/Lokalplaner_2_103.png" /> 1077558<br />\
    <img src="styles/legend/Lokalplaner_2_104.png" /> 1077565<br />\
    <img src="styles/legend/Lokalplaner_2_105.png" /> 1077899<br />\
    <img src="styles/legend/Lokalplaner_2_106.png" /> 1078061<br />\
    <img src="styles/legend/Lokalplaner_2_107.png" /> 1078066<br />\
    <img src="styles/legend/Lokalplaner_2_108.png" /> 1078074<br />\
    <img src="styles/legend/Lokalplaner_2_109.png" /> 1078075<br />\
    <img src="styles/legend/Lokalplaner_2_110.png" /> 1078077<br />\
    <img src="styles/legend/Lokalplaner_2_111.png" /> 1078080<br />\
    <img src="styles/legend/Lokalplaner_2_112.png" /> 1078184<br />\
    <img src="styles/legend/Lokalplaner_2_113.png" /> 1078227<br />\
    <img src="styles/legend/Lokalplaner_2_114.png" /> 1078229<br />\
    <img src="styles/legend/Lokalplaner_2_115.png" /> 1078231<br />\
    <img src="styles/legend/Lokalplaner_2_116.png" /> 1078248<br />\
    <img src="styles/legend/Lokalplaner_2_117.png" /> 1078270<br />\
    <img src="styles/legend/Lokalplaner_2_118.png" /> 1078272<br />\
    <img src="styles/legend/Lokalplaner_2_119.png" /> 1078274<br />\
    <img src="styles/legend/Lokalplaner_2_120.png" /> 1078275<br />\
    <img src="styles/legend/Lokalplaner_2_121.png" /> 1078279<br />\
    <img src="styles/legend/Lokalplaner_2_122.png" /> 1078282<br />\
    <img src="styles/legend/Lokalplaner_2_123.png" /> 1078288<br />\
    <img src="styles/legend/Lokalplaner_2_124.png" /> 1078289<br />\
    <img src="styles/legend/Lokalplaner_2_125.png" /> 1078346<br />\
    <img src="styles/legend/Lokalplaner_2_126.png" /> 1078447<br />\
    <img src="styles/legend/Lokalplaner_2_127.png" /> 1078464<br />\
    <img src="styles/legend/Lokalplaner_2_128.png" /> 1078465<br />\
    <img src="styles/legend/Lokalplaner_2_129.png" /> 1078468<br />\
    <img src="styles/legend/Lokalplaner_2_130.png" /> 1079122<br />\
    <img src="styles/legend/Lokalplaner_2_131.png" /> 1079123<br />\
    <img src="styles/legend/Lokalplaner_2_132.png" /> 1079666<br />\
    <img src="styles/legend/Lokalplaner_2_133.png" /> 1079671<br />\
    <img src="styles/legend/Lokalplaner_2_134.png" /> 1081381<br />\
    <img src="styles/legend/Lokalplaner_2_135.png" /> 1084485<br />\
    <img src="styles/legend/Lokalplaner_2_136.png" /> 1084491<br />\
    <img src="styles/legend/Lokalplaner_2_137.png" /> 1084492<br />\
    <img src="styles/legend/Lokalplaner_2_138.png" /> 1103656<br />\
    <img src="styles/legend/Lokalplaner_2_139.png" /> 1103890<br />\
    <img src="styles/legend/Lokalplaner_2_140.png" /> 1104764<br />\
    <img src="styles/legend/Lokalplaner_2_141.png" /> 1109560<br />\
    <img src="styles/legend/Lokalplaner_2_142.png" /> 1328884<br />\
    <img src="styles/legend/Lokalplaner_2_143.png" /> 1359142<br />\
    <img src="styles/legend/Lokalplaner_2_144.png" /> 1359145<br />\
    <img src="styles/legend/Lokalplaner_2_145.png" /> 1369547<br />\
    <img src="styles/legend/Lokalplaner_2_146.png" /> 1374739<br />\
    <img src="styles/legend/Lokalplaner_2_147.png" /> 1792902<br />\
    <img src="styles/legend/Lokalplaner_2_148.png" /> 1869505<br />\
    <img src="styles/legend/Lokalplaner_2_149.png" /> 2136388<br />\
    <img src="styles/legend/Lokalplaner_2_150.png" /> 2186492<br />\
    <img src="styles/legend/Lokalplaner_2_151.png" /> 2269185<br />\
    <img src="styles/legend/Lokalplaner_2_152.png" /> 2641209<br />\
    <img src="styles/legend/Lokalplaner_2_153.png" /> 2702963<br />\
    <img src="styles/legend/Lokalplaner_2_154.png" /> 2702964<br />\
    <img src="styles/legend/Lokalplaner_2_155.png" /> 2702965<br />\
    <img src="styles/legend/Lokalplaner_2_156.png" /> 2702968<br />\
    <img src="styles/legend/Lokalplaner_2_157.png" /> 2702969<br />\
    <img src="styles/legend/Lokalplaner_2_158.png" /> 2702993<br />\
    <img src="styles/legend/Lokalplaner_2_159.png" /> 2702994<br />\
    <img src="styles/legend/Lokalplaner_2_160.png" /> 2969850<br />\
    <img src="styles/legend/Lokalplaner_2_161.png" /> 2978253<br />\
    <img src="styles/legend/Lokalplaner_2_162.png" /> 3016098<br />\
    <img src="styles/legend/Lokalplaner_2_163.png" /> 3016099<br />\
    <img src="styles/legend/Lokalplaner_2_164.png" /> 3016102<br />\
    <img src="styles/legend/Lokalplaner_2_165.png" /> 3016103<br />\
    <img src="styles/legend/Lokalplaner_2_166.png" /> 3016105<br />\
    <img src="styles/legend/Lokalplaner_2_167.png" /> 3186913<br />\
    <img src="styles/legend/Lokalplaner_2_168.png" /> 3188617<br />\
    <img src="styles/legend/Lokalplaner_2_169.png" /> 3188619<br />\
    <img src="styles/legend/Lokalplaner_2_170.png" /> 3812280<br />\
    <img src="styles/legend/Lokalplaner_2_171.png" /> 3964626<br />\
    <img src="styles/legend/Lokalplaner_2_172.png" /> 3964627<br />\
    <img src="styles/legend/Lokalplaner_2_173.png" /> 3964812<br />\
    <img src="styles/legend/Lokalplaner_2_174.png" /> 9419556<br />\
    <img src="styles/legend/Lokalplaner_2_175.png" /> 9431987<br />\
    <img src="styles/legend/Lokalplaner_2_176.png" /> 9431989<br />\
    <img src="styles/legend/Lokalplaner_2_177.png" /> 9431990<br />\
    <img src="styles/legend/Lokalplaner_2_178.png" /> 9431991<br />\
    <img src="styles/legend/Lokalplaner_2_179.png" /> 9431992<br />\
    <img src="styles/legend/Lokalplaner_2_180.png" /> 9431993<br />\
    <img src="styles/legend/Lokalplaner_2_181.png" /> 9431994<br />\
    <img src="styles/legend/Lokalplaner_2_182.png" /> 9690454<br />\
    <img src="styles/legend/Lokalplaner_2_183.png" /> 9717080<br />\
    <img src="styles/legend/Lokalplaner_2_184.png" /> 9731022<br />\
    <img src="styles/legend/Lokalplaner_2_185.png" /> 9732835<br />\
    <img src="styles/legend/Lokalplaner_2_186.png" /> 9732862<br />\
    <img src="styles/legend/Lokalplaner_2_187.png" /> 9753254<br />\
    <img src="styles/legend/Lokalplaner_2_188.png" /> 10353005<br />\
    <img src="styles/legend/Lokalplaner_2_189.png" /> 10456675<br />\
    <img src="styles/legend/Lokalplaner_2_190.png" /> 10478656<br />\
    <img src="styles/legend/Lokalplaner_2_191.png" /> 10840028<br />\
    <img src="styles/legend/Lokalplaner_2_192.png" /> 10900534<br />\
    <img src="styles/legend/Lokalplaner_2_193.png" /> 10906517<br />\
    <img src="styles/legend/Lokalplaner_2_194.png" /> 10985743<br />\
    <img src="styles/legend/Lokalplaner_2_195.png" /> 11021467<br />\
    <img src="styles/legend/Lokalplaner_2_196.png" /> 11126774<br />\
    <img src="styles/legend/Lokalplaner_2_197.png" /> 11159816<br />\
    <img src="styles/legend/Lokalplaner_2_198.png" /> 11176926<br />\
    <img src="styles/legend/Lokalplaner_2_199.png" /> 11185105<br />\
    <img src="styles/legend/Lokalplaner_2_200.png" /> 11198619<br />\
    <img src="styles/legend/Lokalplaner_2_201.png" /> 11228193<br />\
    <img src="styles/legend/Lokalplaner_2_202.png" /> 11240317<br />\
    <img src="styles/legend/Lokalplaner_2_203.png" /> 11252419<br />\
    <img src="styles/legend/Lokalplaner_2_204.png" /> 11307736<br />\
    <img src="styles/legend/Lokalplaner_2_205.png" /> 11307768<br />\
    <img src="styles/legend/Lokalplaner_2_206.png" /> 11317442<br />\
    <img src="styles/legend/Lokalplaner_2_207.png" /> 11347122<br />\
    <img src="styles/legend/Lokalplaner_2_208.png" /> <br />' });
var format_Lokalplanerforslag_3 = new ol.format.GeoJSON();
var features_Lokalplanerforslag_3 = format_Lokalplanerforslag_3.readFeatures(json_Lokalplanerforslag_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanerforslag_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanerforslag_3.addFeatures(features_Lokalplanerforslag_3);
var lyr_Lokalplanerforslag_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanerforslag_3, 
                style: style_Lokalplanerforslag_3,
                popuplayertitle: 'Lokalplaner forslag',
                interactive: true,
    title: 'Lokalplaner forslag<br />\
    <img src="styles/legend/Lokalplanerforslag_3_0.png" /> 11367622<br />\
    <img src="styles/legend/Lokalplanerforslag_3_1.png" /> 11461117<br />\
    <img src="styles/legend/Lokalplanerforslag_3_2.png" /> 11484598<br />\
    <img src="styles/legend/Lokalplanerforslag_3_3.png" /> <br />' });
var format_StrandbeskyttelseHvidovre_4 = new ol.format.GeoJSON();
var features_StrandbeskyttelseHvidovre_4 = format_StrandbeskyttelseHvidovre_4.readFeatures(json_StrandbeskyttelseHvidovre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrandbeskyttelseHvidovre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrandbeskyttelseHvidovre_4.addFeatures(features_StrandbeskyttelseHvidovre_4);
var lyr_StrandbeskyttelseHvidovre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrandbeskyttelseHvidovre_4, 
                style: style_StrandbeskyttelseHvidovre_4,
                popuplayertitle: 'Strandbeskyttelse Hvidovre',
                interactive: false,
                title: '<img src="styles/legend/StrandbeskyttelseHvidovre_4.png" /> Strandbeskyttelse Hvidovre'
            });
var format_Busstoppesteder_5 = new ol.format.GeoJSON();
var features_Busstoppesteder_5 = format_Busstoppesteder_5.readFeatures(json_Busstoppesteder_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Busstoppesteder_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Busstoppesteder_5.addFeatures(features_Busstoppesteder_5);
var lyr_Busstoppesteder_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Busstoppesteder_5, 
                style: style_Busstoppesteder_5,
                popuplayertitle: 'Busstoppesteder',
                interactive: true,
                title: '<img src="styles/legend/Busstoppesteder_5.png" /> Busstoppesteder'
            });
var format_Brnehaver_6 = new ol.format.GeoJSON();
var features_Brnehaver_6 = format_Brnehaver_6.readFeatures(json_Brnehaver_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_6.addFeatures(features_Brnehaver_6);
var lyr_Brnehaver_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_6, 
                style: style_Brnehaver_6,
                popuplayertitle: 'Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_6.png" /> Børnehaver'
            });
var format_EUDHvidovre_7 = new ol.format.GeoJSON();
var features_EUDHvidovre_7 = format_EUDHvidovre_7.readFeatures(json_EUDHvidovre_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUDHvidovre_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUDHvidovre_7.addFeatures(features_EUDHvidovre_7);
var lyr_EUDHvidovre_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUDHvidovre_7, 
                style: style_EUDHvidovre_7,
                popuplayertitle: 'EUD Hvidovre',
                interactive: true,
                title: '<img src="styles/legend/EUDHvidovre_7.png" /> EUD Hvidovre'
            });
var format_Fodboldbaner_8 = new ol.format.GeoJSON();
var features_Fodboldbaner_8 = format_Fodboldbaner_8.readFeatures(json_Fodboldbaner_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fodboldbaner_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fodboldbaner_8.addFeatures(features_Fodboldbaner_8);
var lyr_Fodboldbaner_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fodboldbaner_8, 
                style: style_Fodboldbaner_8,
                popuplayertitle: 'Fodboldbaner',
                interactive: true,
                title: '<img src="styles/legend/Fodboldbaner_8.png" /> Fodboldbaner'
            });
var format_Folkeskoler_9 = new ol.format.GeoJSON();
var features_Folkeskoler_9 = format_Folkeskoler_9.readFeatures(json_Folkeskoler_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_9.addFeatures(features_Folkeskoler_9);
var lyr_Folkeskoler_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_9, 
                style: style_Folkeskoler_9,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_9.png" /> Folkeskoler'
            });
var format_Gymnasier_10 = new ol.format.GeoJSON();
var features_Gymnasier_10 = format_Gymnasier_10.readFeatures(json_Gymnasier_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gymnasier_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gymnasier_10.addFeatures(features_Gymnasier_10);
var lyr_Gymnasier_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gymnasier_10, 
                style: style_Gymnasier_10,
                popuplayertitle: 'Gymnasier',
                interactive: true,
                title: '<img src="styles/legend/Gymnasier_10.png" /> Gymnasier'
            });
var format_Havne_11 = new ol.format.GeoJSON();
var features_Havne_11 = format_Havne_11.readFeatures(json_Havne_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Havne_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Havne_11.addFeatures(features_Havne_11);
var lyr_Havne_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Havne_11, 
                style: style_Havne_11,
                popuplayertitle: 'Havne',
                interactive: true,
                title: '<img src="styles/legend/Havne_11.png" /> Havne'
            });
var format_Hospital_12 = new ol.format.GeoJSON();
var features_Hospital_12 = format_Hospital_12.readFeatures(json_Hospital_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_12.addFeatures(features_Hospital_12);
var lyr_Hospital_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_12, 
                style: style_Hospital_12,
                popuplayertitle: 'Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_12.png" /> Hospital'
            });
var format_RebkSpark_13 = new ol.format.GeoJSON();
var features_RebkSpark_13 = format_RebkSpark_13.readFeatures(json_RebkSpark_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RebkSpark_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RebkSpark_13.addFeatures(features_RebkSpark_13);
var lyr_RebkSpark_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RebkSpark_13, 
                style: style_RebkSpark_13,
                popuplayertitle: 'Rebæk Søpark',
                interactive: true,
                title: '<img src="styles/legend/RebkSpark_13.png" /> Rebæk Søpark'
            });
var format_Rdhus_14 = new ol.format.GeoJSON();
var features_Rdhus_14 = format_Rdhus_14.readFeatures(json_Rdhus_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rdhus_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rdhus_14.addFeatures(features_Rdhus_14);
var lyr_Rdhus_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rdhus_14, 
                style: style_Rdhus_14,
                popuplayertitle: 'Rådhus',
                interactive: true,
                title: '<img src="styles/legend/Rdhus_14.png" /> Rådhus'
            });
var format_Sportsfaciliteter_15 = new ol.format.GeoJSON();
var features_Sportsfaciliteter_15 = format_Sportsfaciliteter_15.readFeatures(json_Sportsfaciliteter_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportsfaciliteter_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportsfaciliteter_15.addFeatures(features_Sportsfaciliteter_15);
var lyr_Sportsfaciliteter_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportsfaciliteter_15, 
                style: style_Sportsfaciliteter_15,
                popuplayertitle: 'Sportsfaciliteter',
                interactive: true,
                title: '<img src="styles/legend/Sportsfaciliteter_15.png" /> Sportsfaciliteter'
            });
var format_Togstationer_16 = new ol.format.GeoJSON();
var features_Togstationer_16 = format_Togstationer_16.readFeatures(json_Togstationer_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_16.addFeatures(features_Togstationer_16);
var lyr_Togstationer_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_16, 
                style: style_Togstationer_16,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_16.png" /> Togstationer'
            });
var format_Valdemarkoter_17 = new ol.format.GeoJSON();
var features_Valdemarkoter_17 = format_Valdemarkoter_17.readFeatures(json_Valdemarkoter_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Valdemarkoter_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valdemarkoter_17.addFeatures(features_Valdemarkoter_17);
var lyr_Valdemarkoter_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Valdemarkoter_17, 
                style: style_Valdemarkoter_17,
                popuplayertitle: 'Valdemarkoter',
                interactive: true,
                title: '<img src="styles/legend/Valdemarkoter_17.png" /> Valdemarkoter'
            });
var format_Lger_18 = new ol.format.GeoJSON();
var features_Lger_18 = format_Lger_18.readFeatures(json_Lger_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lger_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lger_18.addFeatures(features_Lger_18);
var lyr_Lger_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lger_18, 
                style: style_Lger_18,
                popuplayertitle: 'Læger',
                interactive: true,
                title: '<img src="styles/legend/Lger_18.png" /> Læger'
            });

lyr_Frededeomrder_0.setVisible(true);lyr_Kommuneplan_1.setVisible(true);lyr_Lokalplaner_2.setVisible(true);lyr_Lokalplanerforslag_3.setVisible(true);lyr_StrandbeskyttelseHvidovre_4.setVisible(true);lyr_Busstoppesteder_5.setVisible(true);lyr_Brnehaver_6.setVisible(true);lyr_EUDHvidovre_7.setVisible(true);lyr_Fodboldbaner_8.setVisible(true);lyr_Folkeskoler_9.setVisible(true);lyr_Gymnasier_10.setVisible(true);lyr_Havne_11.setVisible(true);lyr_Hospital_12.setVisible(true);lyr_RebkSpark_13.setVisible(true);lyr_Rdhus_14.setVisible(true);lyr_Sportsfaciliteter_15.setVisible(true);lyr_Togstationer_16.setVisible(true);lyr_Valdemarkoter_17.setVisible(true);lyr_Lger_18.setVisible(true);
var layersList = [lyr_Frededeomrder_0,lyr_Kommuneplan_1,lyr_Lokalplaner_2,lyr_Lokalplanerforslag_3,lyr_StrandbeskyttelseHvidovre_4,lyr_Busstoppesteder_5,lyr_Brnehaver_6,lyr_EUDHvidovre_7,lyr_Fodboldbaner_8,lyr_Folkeskoler_9,lyr_Gymnasier_10,lyr_Havne_11,lyr_Hospital_12,lyr_RebkSpark_13,lyr_Rdhus_14,lyr_Sportsfaciliteter_15,lyr_Togstationer_16,lyr_Valdemarkoter_17,lyr_Lger_18];
lyr_Frededeomrder_0.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Kommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Lokalplaner_2.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Lokalplanerforslag_3.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datostart': 'datostart', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_StrandbeskyttelseHvidovre_4.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_Busstoppesteder_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Brnehaver_6.set('fieldAliases', {'fid': 'fid', 'Børnehave': 'Børnehave', 'Adresse': 'Adresse', 'By': 'By', 'Telefon': 'Telefon', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_EUDHvidovre_7.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Fodboldbaner_8.set('fieldAliases', {'fid': 'fid', 'Fodbold St': 'Fodbold St', 'Adresse': 'Adresse', 'By': 'By', 'Mail': 'Mail', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Folkeskoler_9.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Gymnasier_10.set('fieldAliases', {'fid': 'fid', 'Gymnasiena': 'Gymnasiena', 'Ungdomsudd': 'Ungdomsudd', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Havne_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Hospital_12.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_RebkSpark_13.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Rdhus_14.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Sportsfaciliteter_15.set('fieldAliases', {'fid': 'fid', 'Sport- og': 'Sport- og', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'field_5': 'field_5', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_16.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Valdemarkoter_17.set('fieldAliases', {'fid': 'fid', 'Fikspunkt nr': 'Fikspunkt nr', 'Type': 'Type', 'Referencesystemer': 'Referencesystemer', 'Easting': 'Easting', 'Northing': 'Northing', 'Kote': 'Kote', });
lyr_Lger_18.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Frededeomrder_0.set('fieldImages', {'fid': 'Hidden', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Kommuneplan_1.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'TextEdit', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_Lokalplaner_2.set('fieldImages', {'fid': 'Hidden', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Lokalplanerforslag_3.set('fieldImages', {'fid': 'Hidden', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datostart': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_StrandbeskyttelseHvidovre_4.set('fieldImages', {'fid': 'Hidden', 'forretningshaendelse': 'TextEdit', 'senesteSagLokalId': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalId': 'TextEdit', 'paataenktHandling': 'TextEdit', 'registreringFra': 'DateTime', 'virkningFra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temaFladeID': 'Range', 'tematype': 'TextEdit', 'jordstykkeLokalId': 'TextEdit', });
lyr_Busstoppesteder_5.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Brnehaver_6.set('fieldImages', {'fid': 'Hidden', 'Børnehave': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefon': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_EUDHvidovre_7.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Fodboldbaner_8.set('fieldImages', {'fid': 'Hidden', 'Fodbold St': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Mail': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Folkeskoler_9.set('fieldImages', {'fid': 'Hidden', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Gymnasier_10.set('fieldImages', {'fid': 'Hidden', 'Gymnasiena': 'TextEdit', 'Ungdomsudd': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Havne_11.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Hospital_12.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_RebkSpark_13.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Rdhus_14.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Sportsfaciliteter_15.set('fieldImages', {'fid': 'Hidden', 'Sport- og': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'field_5': 'Hidden', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Togstationer_16.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Valdemarkoter_17.set('fieldImages', {'fid': 'Hidden', 'Fikspunkt nr': 'TextEdit', 'Type': 'TextEdit', 'Referencesystemer': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Kote': 'TextEdit', });
lyr_Lger_18.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Frededeomrder_0.set('fieldLabels', {'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Kommuneplan_1.set('fieldLabels', {'komnr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'datooprt': 'no label', 'datoopdt': 'no label', });
lyr_Lokalplaner_2.set('fieldLabels', {'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_Lokalplanerforslag_3.set('fieldLabels', {'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datostart': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_StrandbeskyttelseHvidovre_4.set('fieldLabels', {'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_Busstoppesteder_5.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Brnehaver_6.set('fieldLabels', {'Børnehave': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefon': 'inline label - always visible', });
lyr_EUDHvidovre_7.set('fieldLabels', {'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_Fodboldbaner_8.set('fieldLabels', {'Fodbold St': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Mail': 'inline label - always visible', });
lyr_Folkeskoler_9.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Gymnasier_10.set('fieldLabels', {'Gymnasiena': 'inline label - always visible', 'Ungdomsudd': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Havne_11.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Hospital_12.set('fieldLabels', {'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_RebkSpark_13.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'begin': 'no label', 'end': 'no label', });
lyr_Rdhus_14.set('fieldLabels', {'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_Sportsfaciliteter_15.set('fieldLabels', {'Sport- og': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Togstationer_16.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Valdemarkoter_17.set('fieldLabels', {'Fikspunkt nr': 'inline label - always visible', 'Type': 'inline label - always visible', 'Referencesystemer': 'inline label - always visible', 'Easting': 'inline label - always visible', 'Northing': 'inline label - always visible', 'Kote': 'inline label - always visible', });
lyr_Lger_18.set('fieldLabels', {'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_Lger_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});