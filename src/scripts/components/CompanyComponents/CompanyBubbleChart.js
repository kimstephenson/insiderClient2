var React = require('react')
var ReactHighcharts = require('react-highcharts')
var Highcharts = require('highcharts')
var HighchartsMore = require('highcharts-more')(ReactHighcharts.Highcharts)

var chartOptions = { chart: {
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
            // categories: self.props.readinglevels.map(function(o) {
            //     return o.name;
            // }),
            // max: self.props.readinglevels.length - 1,
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
            // formatter: function() {

            //   if( this.value >= 0 && this.value < 7 ) {
            //     return Constants.GRADES[this.value]
            //   }
            //   return ''
            // },
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
                '<tr><th>Date:</th><td>{point.x}</td></tr>' +
                '<tr><th>Insider Score:</th><td>{point.y}</td></tr>' +
                '<tr><th>Shares Traded:</th><td>{point.shares}</td></tr>' +
                '<tr><th>Price Per Share:</th><td>\${point.pps}</td></tr>' +
                '<tr><th>Value Traded:</th><td>\${point.z}</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        //  plotOptions: {
        //     series: {
        //         dataLabels: {
        //             enabled: true,
        //             format: '{point.name}'
        //         }
        //     }
        // },

        series: [{
            name: "Sells",
            data: [
                { x: 142084800000, y: 10, z: 1500000, name: 'KEOUGH TRACY S', relationship: "Officer", shares: 100000 , pps: 15 },
                { x: 142084800000, y: 10, z: 1500000, name: 'KEOUGH TRACY S', relationship: "Officer", shares: 100000 , pps: 15 },
                { x: 142352640000, y: 10, z: 1450000, name: 'MYERS MARIE', relationship: "Officer", shares: 100000, pps: 14.6 },
                { x: 142439040000, y: 10, z: 640000, name: 'MYERS MARIE', relationship: "Officer", shares: 100000, pps: 14.6 },
                { x: 142439040000, y: 10, z: 65721.6, name: 'MYERS MARIE', relationship: "Officer", shares: 100000, pps: 14.18 },
                { x: 142439040000, y: 10, z: 65721.6, name: 'MYERS MARIE', relationship: "Officer", shares: 100000, pps: 14.18 },
                { x: 142516800000, y: 6, z: 440884.56, name: 'WEISLER DION J', relationship: "Director", shares: 100000, pps: 14 },
                { x: 142539400000, y: 6, z: 440884.56, name: 'WEISLER DION J', relationship: "Director", shares: 100000, pps: 14 },
                { x: 142599900000, y: 2, z: 114943.08, name: 'LORES ENRIQUE', relationship: "Other", shares: 100000, pps: 14.6 }
            ],
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
            data: [
                { x: 142214400000, y: 10, z: 640000, name: 'KEOUGH TRACY S', relationship: "Officer", shares: 100000, pps: 6.4 },
                { x: 142214400000, y: 10, z: 640000, name: 'KEOUGH TRACY S', relationship: "Officer", shares: 100000, pps: 6.4 },
                { x: 142352640000, y: 10, z: 149413.9, name: 'MYERS MARIE', relationship: "Officer", shares: 100000, pps: 8 },
                { x: 142352640000, y: 10, z: 149413.95, name: 'MYERS MARIE', relationship: "Officer", shares: 100000, pps: 9.33 },
                 { x: "2016-09-22", y: 6, z: 165693.3, name: 'WEISLER DION J', relationship: "Director", shares: 100000, pps: 14.18 },
                 { x: 142558900000, y: 6, z: 165693.3, name: 'WEISLER DION J', relationship: "Director", shares: 100000, pps: 14.18 },
                 { x: 142599900000, y: 2, z: 114943.08, name: 'LORES ENRIQUE', relationship: "Other", shares: 100000, pps: 6.88 }
            ],
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

  var CompanyBubbleChart = React.createClass({
    render: function() {
      return(<ReactHighcharts config={chartOptions} ref="chart"/>)
    }
  })

  export default CompanyBubbleChart