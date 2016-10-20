var React = require('react')
var ReactHighcharts = require('react-highcharts')
var Highcharts = require('highcharts')
var HighchartsTreemap = require('highcharts-treemap')(ReactHighcharts.Highcharts)
import $ from 'jquery'

 var data = {
            'Facebook': {
                'Mark Zuckerberg': {
                    '2016-09-22': '500',
                    '2016-09-23': '890',
                    '2016-09-24': '250'
                },
                'Some Person': {
                    '2016-09-22': '548.9',
                    '2016-09-23': '64.0',
                    '2016-09-24': '234.6'
                },
                'Other Guy': {
                    '2016-09-22': '316.4',
                    '2016-09-23': '102.0',
                    '2016-09-24': '708.7'
                }
            },
            'Apple': {
                'Tim Cook': {
                    '2016-09-22': '16.8',
                    '2016-09-23': '602.8',
                    '2016-09-24': '44.3'
                },
                'Me': {
                    '2016-09-22': '22.6',
                    '2016-09-23': '494.5',
                    '2016-09-24': '48.9'
                }
            },
            'IBM': {
                'Somebody': {
                    '2016-09-22': '756.8',
                    '2016-09-23': '133.6',
                    '2016-09-24': '729.0'
                },
                'Someone else': {
                    '2016-09-22': '648.6',
                    '2016-09-23': '429.9',
                    '2016-09-24': '89.0'
                },
                'Random Person': {
                    '2016-09-22': '884.3',
                    '2016-09-23': '119.5',
                    '2016-09-24': '702.4'
                },
                'Stuff': {
                    '2016-09-22': '632.3',
                    '2016-09-23': '666.9',
                    '2016-09-24': '89.0'
                }
            },
            'Splunk INC': {
                'John Doe': {
                    '2016-09-22': '16.8',
                    '2016-09-23': '602.8',
                    '2016-09-24': '440.3'
                },
                'Jane Doe': {
                    '2016-09-22': '22.6',
                    '2016-09-23': '494.5',
                    '2016-09-24': '48.9'
                }
            },
            'CBS': {
                'Bob': {
                    '2016-09-22': '16.8',
                    '2016-09-23': '602.8',
                    '2016-09-24': '44.3'
                },
                'Tom': {
                    '2016-09-22': '22.6',
                    '2016-09-23': '494.5',
                    '2016-09-24': '48.9'
                }
            }
        },
         points = [],
        companyP,
        companyVal,
        companyI = 0,
        insiderP,
        insiderI,
        tradeP,
        tradeI,
        company,
        insider,
        trade;

for (company in data) {
        if (data.hasOwnProperty(company)) {
            companyVal = 0;
            companyP = {
                id: 'id_' + companyI,
                name: company,
                color: Highcharts.getOptions().colors[companyI]
            };
            insiderI = 0;
            for (insider in data[company]) {
                if (data[company].hasOwnProperty(insider)) {
                    insiderP = {
                        id: companyP.id + '_' + insiderI,
                        name: insider,
                        parent: companyP.id
                    };
                    points.push(insiderP);
                    tradeI = 0;
                    for (trade in data[company][insider]) {
                        if (data[company][insider].hasOwnProperty(trade)) {
                            tradeP = {
                                id: insiderP.id + '_' + tradeI,
                                name: trade,
                                parent: insiderP.id,
                                value: Math.round(+data[company][insider][trade])
                            };
                            companyVal += tradeP.value;
                            points.push(tradeP);
                            tradeI = tradeI + 1;
                        }
                    }
                    insiderI = insiderI + 1;
                }
            }
            companyP.value = companyVal;
            points.push(companyP);
            companyI = companyI + 1;
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
    getInitialState: function() {
        return {companyData: []}
    },
    componentWillMount: function() {
        $.ajax({
            url: "https://insiderapi.herokuapp.com/companies",
            dataType: "json",
            success: function(data) {
            //     var data = data,
            //         points = [],
            //         companyP,
            //         companyVal,
            //         companyI = 0,
            //         insiderP,
            //         insiderI,
            //         tradeP,
            //         tradeI,
            //         company,
            //         insider,
            //         trade;

            // for (company in data) {
            //         if (data.hasOwnProperty(company)) {
            //             companyVal = 0;
            //             companyP = {
            //                 id: 'id_' + companyI,
            //                 name: company,
            //                 color: Highcharts.getOptions().colors[companyI]
            //             };
            //             insiderI = 0;
            //             for (insider in data[company]) {
            //                 if (data[company].hasOwnProperty(insider)) {
            //                     insiderP = {
            //                         id: companyP.id + '_' + insiderI,
            //                         name: insider,
            //                         parent: companyP.id
            //                     };
            //                     points.push(insiderP);
            //                     tradeI = 0;
            //                     for (trade in data[company][insider]) {
            //                         if (data[company][insider].hasOwnProperty(trade)) {
            //                             tradeP = {
            //                                 id: insiderP.id + '_' + tradeI,
            //                                 name: trade,
            //                                 parent: insiderP.id,
            //                                 value: Math.round(+data[company][insider][trade])
            //                             };
            //                             companyVal += tradeP.value;
            //                             points.push(tradeP);
            //                             tradeI = tradeI + 1;
            //                         }
            //                     }
            //                     insiderI = insiderI + 1;
            //                 }
            //             }
            //             companyP.value = companyVal;
            //             points.push(companyP);
            //             companyI = companyI + 1;
            //         }
            //     }

            // this.setState({companyData: points})


            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this, status, err.toString())
            }.bind(this)
        })
    },
    render: function() {
        return(<ReactHighcharts config={chartOptions} ref="chart"/>)
      }
})

export default MainChart