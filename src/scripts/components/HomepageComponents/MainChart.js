var React = require('react')
var ReactHighcharts = require('react-highcharts')
var Highcharts = require('highcharts')
var HighchartsTreemap = require('highcharts-treemap')(ReactHighcharts.Highcharts)
import $ from 'jquery'

var MainChart = React.createClass({
    getInitialState: function() {
        return {companyData: []}
    },
    componentWillMount: function() {
        var colors = ['#92C3FF', '#9DACFF', '#FFA189', '#FFD168', '#7AE4B1'];
        var i = 0;
        $.ajax({
            url: "https://insiderapi.herokuapp.com/companies",
            dataType: "json",
            success: function(data) {
                var data = data,
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
                        companyP.color = colors[i]
                        i++
                        points.push(companyP);
                        companyI = companyI + 1;
                    }
                }

            this.setState({companyData: points})
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this, status, err.toString())
            }.bind(this)
        })
    },
    render: function() {


var chartOptions = {
    chart: {
        paddingTop: 15,
        marginLeft: 25,
        marginRight: 25,
        height: 450,
    },
    credits: {
        enabled: false
    },
    series: [{
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
                formatter: function () {
                    return `<div class="treemap-company-name">${this.point.name}</div>`
                },
                useHTML: true,
                enabled: true,
                style: {
                    fontSize: '20px',
                    fontWeight: 'bold'
                }
            },
            borderWidth: 0
        }],
        data: this.state.companyData
    }],
    // tooltip: {
    //     useHTML: true,
    //     headerFormat: '<table',
    //     footerFormat: '</table>'
    // },
    title: {
        useHTML: true,

        text: '<div class="mainchart-header">Top Insider Trades</div>',
        style: {
          color: 'rgba(255, 255, 255, 1)'
        }
    }
}


        return(<ReactHighcharts config={chartOptions} ref="chart"/>)
      }
})

export default MainChart