var React = require('react')
var ReactHighcharts = require('react-highcharts')
var Highcharts = require('highcharts')
var HighchartsMore = require('highcharts-more')(ReactHighcharts.Highcharts)


var CompanyBubbleChart = React.createClass({
render: function() {
// console.log("sells:")
// console.log(this.props.sells.sells)
  return(<ReactHighcharts config={
    { chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
        // backgroundColor: "#32424B"
    },

    title: {
        text: 'Transactions'
    },

    xAxis: {
        gridLineWidth: 1,
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%e. %b'
        },
        title: {
            text: ''
        },
        labels: {
            style: {
            color: 'rgba(0, 0, 0, 0.50)',
            fontSize: '12px'
            },
            formatter: function() {
                return Highcharts.dateFormat('%m/%d', this.value)
            }
        },
        tickPixelInterval: 200
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        allowDecimals: false,
      labels: {
        format: '{value}',
        step: 1,
        style: {
          color: 'rgba(0, 0, 0, 0.50)',
          fontSize: '12px'
        }
      },
      min: 0,
      max: 11,
      minTickInterval: 1,
      tickInterval: 1,
      minPadding: 1,
      maxPadding: 0.5,
      minRange: 7,
      plotLines: [{
        color: 'black'
      }],
      title: 'Insider Score'
    },

     tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="3"><h3>{point.name}</h3></th></tr>' +
            '<tr><th>{point.relationship}</th><td></td></tr>' +
            '<tr><th>Date:</th><td>{point.date_string}</td></tr>' +
            '<tr><th>Insider Score:</th><td>{point.y}</td></tr>' +
            '<tr><th>Shares Traded:</th><td>{point.shares}</td></tr>' +
            '<tr><th>Price Per Share:</th><td>{point.pps}</td></tr>' +
            '<tr><th>Value Traded:</th><td>\${point.z}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    series: [{
        name: "Sells",
        data: this.props.sells.sells,
        marker: {
            fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                stops: [
                    [0, 'rgba(255,255,255,0.5)'],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[8]).setOpacity(0.5).get('rgba')]
                ]
            }
        }
    }, {
        name: "Buys",
        data: this.props.buys.buys,
        marker: {
            fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                stops: [
                    [0, 'rgba(255,255,255,0.5)'],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.5).get('rgba')]
                ]
            }
        }
    }]
 }
  } ref="chart"/>)
}
})

  export default CompanyBubbleChart