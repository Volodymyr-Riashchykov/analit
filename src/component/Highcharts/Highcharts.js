import Highcharts, { chart } from 'highcharts';
import s from './Highcharts.module.css'
// require('highcharts/highcharts.js')(Highcharts);
require('highcharts/modules/exporting.js')(Highcharts);
require('highcharts/modules/data.js')(Highcharts);
require('highcharts/modules/stock.js')(Highcharts);
require('highcharts/modules/hollowcandlestick.js')(Highcharts);
require('highcharts/modules/hollowcandlestick.src.js')(Highcharts);
require('highcharts/modules/accessibility.js')(Highcharts);
// require('highcharts-stock/stock.js')(Highcharts);
require('highcharts/indicators/indicators.js')(Highcharts);
require('highcharts/indicators/volume-by-price.js')(Highcharts);
require('highcharts/indicators/indicators-all.js')(Highcharts);


export default function HighStock({candle,sub}) {



    candle = candle.sort();
      let volume = [];
    let trade = [];
    let sb = []
    let xoc = []
    let quote = [];
    let base = [];
    let quote_v = [];
    candle.map((can, i) => {
          xoc.push([can[0]])
          volume.push([
              can[0],
              can[5],
          ]);
          trade.push([
              can[0],
              can[6],
          ]);
          sb.push([
              can[0],
              can[7],
          ]);
        quote.push([
              can[0],
              can[8],
        ]);
        base.push([
              can[0],
              can[9],
        ]);
        quote_v.push([
              can[0],
              can[10],
        ]);
      })
    // console.log('can=', sub);
    let subb = sub[0];
    function moj(chart) {
        chart.addSeries({
        name: 'ADBE',
            data: [sb[5], sb[6]],
            yAxis: 1
    });
    }
    setTimeout(() => {
    
    const chart = Highcharts.stockChart('container', {
            chart: {
                height: 1200,
                
                events: {
                    
                    click: function (e) {
                        
                        const my_point = e.xAxis[0].value.toFixed(0)/1000;
                        let ind = null;
                        const abc = sub.find((s, index) => {
                            const a = s[0][0] / 1000;
                            // console.log('a',index,a,' ',my_point,' ',a-my_point);
                            if (a > (my_point - 500) && a < (my_point + 500)) {
                                ind = index;

                                return s;
                            }
                        })
                        // console.log('ind',ind);
                        if(ind!==null){
                            let series = this.series[1];

                            series.addPoint(sub[ind][0]);
                            series.addPoint(sub[ind][1]);
                        }
                        
                    }
                }
            },
            title: {
                text: 'Candle Historical'
            },
            // subtitle: {
            //     text: 'All indicators'
            // },
            legend: {
                enabled: true
            },
            rangeSelector: {
                selected: 2
            },
            yAxis: [{
                height: '30%'
            }, {
                top: '30%',
                height: '20%'
            },
            {
                top: '50%',
                height: '10%'
            },
            {
                top: '60%',
                height: '10%'
                },
            {
                top: '70%',
                height: '10%'
                },
            {
                top: '80%',
                height: '10%'
                },
            {
                top: '90%',
                height: '10%'
                },
            ],
        xAxis: {
            type: 'datetime',
            tickInterval: 60000,
                // categories: xoc
            },
            
            plotOptions: {
                series: {
                    // showInLegend: true
                    cursor: 'pointer',
                     point: {
                        events: {
                             click: function () {
                                // console.log('ser',this.series.options);
                                if (this.series.options.data.length > 0) {
                                    this.remove();
                                }
                                // this.remove();
                            }
                        }
                    }
                    
                }
            },
            
            series: [{
                type: 'candlestick',
                id: 'aapl',
                name: 'CANDLE',
                data: candle,
                marker: {
                    enabled: false
                },
                
            },
            // sub.map(s => {
                
            {    name: 'AAPL Stock Price',
                // data: [sub[0][0], sub[0][0]],
                data: [sb[0], sb[1]],
                yAxis: 1,
                
                },
            
             
            {
            type: 'column',
            id: 'volume',
            name: 'Volume',
            data: volume,
            yAxis: 2
                },
            
            {
            type: 'column',
            id: 'trade',
            name: 'Trade',
            data: trade,
            yAxis: 3
                },
            {
            type: 'column',
            id: 'quote',
            name: 'Quote_volume',
            data: quote,
            yAxis: 4
                },
            {
            type: 'column',
            id: 'base',
            name: 'Base_asset_volume',
            data: base,
            yAxis: 5
                },
            {
            type: 'column',
            id: 'quote_v',
            name: 'Quote_asset_volume',
            data: quote_v,
            yAxis: 6
                },
            
        ]
        },
           
    );}, 500);
//   });
    return (
        <>
            
            <div id="container" className={s.container}></div>
            {/* <button id="button">Add series</button> */}
        </>
    )
};

