var React = require('react')
var ReactHighcharts = require('react-highcharts')
var Highcharts = require('highcharts')
var HighchartsTreemap = require('highcharts-treemap')(ReactHighcharts.Highcharts)

 var data = {
            'Facebook': {
                'Mark Zuckerberg': {
                    '2016-09-22': '500',
                    '2016-09-23': '890',
                    '2016-09-24': '250'
                },
                'Bangladesh': {
                    'Noncommunicable diseases': '548.9',
                    'Injuries': '64.0',
                    'Communicable & other Group I': '234.6'
                },
                'Myanmar': {
                    'Communicable & other Group I': '316.4',
                    'Injuries': '102.0',
                    'Noncommunicable diseases': '708.7'
                }
            },
            'Apple': {
                'Hungary': {
                    'Communicable & other Group I': '16.8',
                    'Noncommunicable diseases': '602.8',
                    'Injuries': '44.3'
                },
                'Poland': {
                    'Communicable & other Group I': '22.6',
                    'Noncommunicable diseases': '494.5',
                    'Injuries': '48.9'
                }
            },
            'IBM': {
                'Equatorial Guinea': {
                    'Communicable & other Group I': '756.8',
                    'Injuries': '133.6',
                    'Noncommunicable diseases': '729.0'
                },
                'Madagascar': {
                    'Noncommunicable diseases': '648.6',
                    'Communicable & other Group I': '429.9',
                    'Injuries': '89.0'
                },
                'Swaziland': {
                    'Communicable & other Group I': '884.3',
                    'Injuries': '119.5',
                    'Noncommunicable diseases': '702.4'
                },
                'Congo': {
                    'Noncommunicable diseases': '632.3',
                    'Communicable & other Group I': '666.9',
                    'Injuries': '89.0'
                }
            },
            'Splunk INC': {
                'Hungary': {
                    'Communicable & other Group I': '16.8',
                    'Noncommunicable diseases': '602.8',
                    'Injuries': '44.3'
                },
                'Poland': {
                    'Communicable & other Group I': '22.6',
                    'Noncommunicable diseases': '494.5',
                    'Injuries': '48.9'
                }
            },
            'CBS': {
                'Hungary': {
                    'Communicable & other Group I': '16.8',
                    'Noncommunicable diseases': '602.8',
                    'Injuries': '44.3'
                },
                'Poland': {
                    'Communicable & other Group I': '22.6',
                    'Noncommunicable diseases': '494.5',
                    'Injuries': '48.9'
                }
            }
        },
         points = [],
        regionP,
        regionVal,
        regionI = 0,
        countryP,
        countryI,
        causeP,
        causeI,
        region,
        country,
        cause,
        causeName = {
            'Communicable & other Group I': 'Communicable diseases',
            'Noncommunicable diseases': 'Non-communicable diseases',
            'Injuries': 'Injuries'
        };

for (region in data) {
        if (data.hasOwnProperty(region)) {
            regionVal = 0;
            regionP = {
                id: 'id_' + regionI,
                name: region,
                color: Highcharts.getOptions().colors[regionI]
            };
            countryI = 0;
            for (country in data[region]) {
                if (data[region].hasOwnProperty(country)) {
                    countryP = {
                        id: regionP.id + '_' + countryI,
                        name: country,
                        parent: regionP.id
                    };
                    points.push(countryP);
                    causeI = 0;
                    for (cause in data[region][country]) {
                        if (data[region][country].hasOwnProperty(cause)) {
                            causeP = {
                                id: countryP.id + '_' + causeI,
                                name: causeName[cause],
                                parent: countryP.id,
                                value: Math.round(+data[region][country][cause])
                            };
                            regionVal += causeP.value;
                            points.push(causeP);
                            causeI = causeI + 1;
                        }
                    }
                    countryI = countryI + 1;
                }
            }
            regionP.value = Math.round(regionVal / countryI);
            points.push(regionP);
            regionI = regionI + 1;
        }
    }

var chartOptions = { series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            allowDrillToNode: true,
            animationLimit: 1000,
            dataLabels: {
                enabled: false
            },
            levelIsConstant: false,
            levels: [{
                level: 1,
                dataLabels: {
                    enabled: true
                },
                borderWidth: 3
            }],
            data: points
        }],
        title: {
            text: 'Hot Insider Trades In Your Area'
        }
      }

var MainChart = React.createClass({
  render: function() {
    return(<ReactHighcharts config={chartOptions} ref="chart"/>)
  }
})

export default MainChart