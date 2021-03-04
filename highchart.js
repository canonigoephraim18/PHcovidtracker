document.addEventListener('DOMContentLoaded', function () {
 // Prepare demo data
    // Data is joined to map using value of 'hc-key' property by default.
    // See API docs for 'joinBy' for more info on linking data and map.
    var data = [
        ['ph-mn', 233000],
        ['ph-4218', 95141],
        ['ph-tt', 36386],
        ['ph-bo', 29692],
        ['ph-cb', 33692],
        ['ph-bs', 10312],
        ['ph-2603', 2101],
        ['ph-su', 1102],
        ['ph-aq', 821],
        ['ph-pl', 991],
        ['ph-ro', 413],
        ['ph-al', 72134],
        ['ph-cs', 2141],
        ['ph-6999', 3215],
        ['ph-bn', 1744],
        ['ph-cg', 34356],
        ['ph-pn', 43516],
        ['ph-bt', 6134],
        ['ph-mc', 5351],
        ['ph-qz', 3134],
        ['ph-es', 1315],
        ['ph-le', 53151],
        ['ph-sm', 41241],
        ['ph-ns', 4214],
        ['ph-cm', 75645],
        ['ph-di', 45264],
        ['ph-ds', 46365],
        ['ph-6457', 1231],
        ['ph-6985', 2812],
        ['ph-ii', 4235],
        ['ph-7017', 1123],
        ['ph-7021', 42142],
        ['ph-lg', 41513],
        ['ph-ri', 3121],
        ['ph-ln', 414123],
        ['ph-6991', 31512],
        ['ph-ls', 3121],
        ['ph-nc', 31241],
        ['ph-mg', 3123],
        ['ph-sk', 32312],
        ['ph-sc', 42141],
        ['ph-sg', 4214],
        ['ph-an', 41231],
        ['ph-ss', 42352],
        ['ph-as', 435],
        ['ph-do', 45],
        ['ph-dv', 312],
        ['ph-bk', 321327],
        ['ph-cl', 74],
        ['ph-6983', 4559],
        ['ph-6984', 5240],
        ['ph-6987', 51],
        ['ph-6986', 52],
        ['ph-6988', 53],
        ['ph-6989', 54],
        ['ph-6990', 55],
        ['ph-6992', 56],
        ['ph-6995', 57],
        ['ph-6996', 58],
        ['ph-6997', 59],
        ['ph-6998', 60],
        ['ph-nv', 61],
        ['ph-7020', 62],
        ['ph-7018', 63],
        ['ph-7022', 64],
        ['ph-1852', 65],
        ['ph-7000', 66],
        ['ph-7001', 67],
        ['ph-7002', 68],
        ['ph-7003', 69],
        ['ph-7004', 70],
        ['ph-7006', 71],
        ['ph-7007', 72],
        ['ph-7008', 73],
        ['ph-7009', 74],
        ['ph-7010', 75],
        ['ph-7011', 76],
        ['ph-7012', 77],
        ['ph-7013', 78],
        ['ph-7014', 79],
        ['ph-7015', 80],
        ['ph-7016', 81],
        ['ph-7019', 82],
        ['ph-6456', 83],
        ['ph-zs', 84],
        ['ph-nd', 85],
        ['ph-zn', 86],
        ['ph-md', 87],
        ['ph-ab', 88],
        ['ph-2658', 89],
        ['ph-ap', 90],
        ['ph-au', 91],
        ['ph-ib', 92],
        ['ph-if', 93],
        ['ph-mt', 94],
        ['ph-qr', 95],
        ['ph-ne', 96],
        ['ph-pm', 97],
        ['ph-ba', 98],
        ['ph-bg', 99],
        ['ph-zm', 100],
        ['ph-cv', 101],
        ['ph-bu', 102],
        ['ph-mr', 103],
        ['ph-sq', 104],
        ['ph-gu', 105],
        ['ph-ct', 106],
        ['ph-mb', 107],
        ['ph-mq', 108],
        ['ph-bi', 109],
        ['ph-sl', 110],
        ['ph-nr', 111],
        ['ph-ak', 112],
        ['ph-cp', 113],
        ['ph-cn', 114],
        ['ph-sr', 115],
        ['ph-in', 116],
        ['ph-is', 117],
        ['ph-tr', 118],
        ['ph-lu', 119]
    ];
    
      // Create the chart
    Highcharts.mapChart('container', {
        chart: {
              map: 'countries/ph/ph-all'
        },
    
        title: {
            text: 'Covid Cases in Philippines'
        },
    
        subtitle: {
            text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ph/ph-all.js">Philippines</a>'
        },
    
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
    
    
        series: [{
            data: data,
            name: 'Cases',
            states: {
                hover: {
                    color: 'red'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
    
    // Build the chart
    Highcharts.chart('containerPie', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: true,
            type: 'pie'
        },
        title: {
            text: 'Details of cases as of March 3, 2021'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    connectorColor: 'silver'
                    
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Active Cases', 
                y: 6.0
            }, {
                name: 'Death',
                y: 2.13
            }, {
                name: 'Recoveries',
                y: 91.9
            }]
        }]
    });
    
    column: {
                stacking: 'percent'
            }
    Highcharts.chart('containerBar1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Active Cases Status'
        },
        xAxis: {
            categories: ['Mild', 'Asymptomatic', 'Critical', 'Severe', 'Moderate'],
        },
        yAxis: {
            min: 0,
         
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name:'Percentage',
            data: [90.1,4.9,2.1,2.1,0.81]
        }]
    });
    
    
    Highcharts.chart('containerBar2', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Hospital Status'
        },
        xAxis: {
            categories: ['ICU BEDS', 'ISOLATION BEDS', 'WAR BEDS', 'Ventilators'],
        },
        yAxis: {
            min: 0,
         
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name:'Available',
            data: [59,65,77,78]
        }]
    });
});