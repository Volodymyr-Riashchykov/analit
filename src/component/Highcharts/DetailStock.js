import Highcharts, { chart } from 'highcharts';
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


export default function DetailStock({ ind, sub, candle_o, candle_c }) {
    // console.log('c=', candle_c);
    const volume = [];
    candle_o.map(c => {
        volume.push([
            c[0],
            c[5],
        ])
    })
    setTimeout(() => {
    
        const chart1 = Highcharts.stockChart('cont', {
            chart: {
                height: 600,
            },

            title: {
                text: 'Candle Detail  (index=' + ind + ')',
            },
            yAxis: [{
                height: '70%'
            },
                {
                    top: '70%',
                    height: '30%'
                },
                
            ],
            series: [{
                type: 'candlestick',
                id: 'aapl',
                name: 'DETAIL',
                data: candle_o,
                marker: {
                    enabled: false
                },
            },
                {
            type: 'column',
            id: 'volume',
            name: 'Volume',
            data: volume,
            yAxis: 1
                },    
            
        ]
        })
    },500)
// }

    return (
        <div id='cont'></div>
    )
}