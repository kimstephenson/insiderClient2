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
        return(<ReactHighcharts config={
            { series: [{
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
                data: this.state.companyData
            }],
            title: {
                text: 'Hot Insider Trades In Your Area'
            }
        }
        } ref="chart"/>)
      }
})

export default MainChart