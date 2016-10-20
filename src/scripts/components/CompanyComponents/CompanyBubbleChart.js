var React = require('react')
var ReactHighcharts = require('react-highcharts')
var Highcharts = require('highcharts')
var HighchartsMore = require('highcharts-more')(ReactHighcharts.Highcharts)


var CompanyBubbleChart = React.createClass({
render: function() {
  return(<ReactHighcharts config={
    { chart: {
        type: 'bubble',
        plotBorderWidth: 0,
        zoomType: 'xy',
        spacingRight:100,
        marginLeft: 150,
        marginBottom: 80,
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        x: 0,
        y: 100,
        useHTML: true,
        itemMarginBottom: 10,
        itemStyle: {
            color: 'rgba(255, 255, 255, .4)'
        }
    },

    title: {
        text: '<div class="chart-subtitle">Trades</div>',
        useHTML: true
    },

    credits: {
        enabled: false
    },

    xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        gridLineWidth: 0,
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%e. %b'
        },
        title: {
            text: ''
        },
        labels: {
            style: {
            color: 'rgba(255, 255, 255, .4)',
            fontSize: '8px'
            },
            formatter: function() {
                return Highcharts.dateFormat('%m/%d', this.value)
            }
        },
        tickPixelInterval: 200
    },

    yAxis: {
        gridLineWidth: 0,
        startOnTick: false,
        endOnTick: false,
        allowDecimals: false,
      labels: {

        format: '{value}',
        step: 1,
        style: {
          color: 'rgba(255, 255, 255, .4)',
          fontSize: '8px'
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
      title: {
        text: 'Insider Score',
        rotation: 270,
        style: {
          color:'rgba(255, 255, 255, .4)',
        }
        }
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
        color: 'transparent',
        name: "Sells",
        data: this.props.sells.sells,
        marker: {
            fillColor: '#FF8669'
        }
    }, {
        color: 'transparent',
        name: "Buys",
        data: this.props.buys.buys,
        marker: {
            fillColor: '#96ECC4'
        }
    }]
 }
  } ref="chart"/>)
}
})

  export default CompanyBubbleChart