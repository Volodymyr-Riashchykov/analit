import Highcharts, { chart } from 'highcharts';
import DetailStock from './DetailStock';
import s from './Highcharts.module.css'
// require('highcharts/highcharts.js')(Highcharts);
import { useState, useEffect } from 'react';
import { serverURL } from "../App/App";
import axios from "axios";
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


export default function HighStock({candle,sub,candle_o,candle_c,symb,str}) {

    const [detail, setDetail] = useState(false);
    const [dataS, setDataS] = useState(null);
    const [dataE, setDataE] = useState(null);
    const [dop, setDop] = useState(null);
    const [ind, setInd] = useState(0);
    
    const dop_col = [];
    // console.log('str==',str);
    console.log('sub',sub);
//symb[0].date
    useEffect(() => {
        //  if(dataS && dataE){
        setDataS(sub[0][0][0]);
        setDataE(sub[0][1][0]);
        async function detailData() {
        const a = (await axios.post(serverURL + '/dop', {
         date_s:dataS,
          date_e:dataE,
          symbol:symb[0].symbol 
        }));
        setDop(DataDetail(a.data))
    //   setDateS(a.data[0]['min(open_time)']);
    //   setDateE(a.data[0]['max(open_time)']);
    //   setVolumeS(a.data[0]['min(volume)']);
    //   setVolumeE(a.data[0]['max(volume)']);
    //   setTradeS(a.data[0]['min(number_of_trades)']);
    //   setTradeE(a.data[0]['max(number_of_trades)']);
    //   }
    detailData();
            //  console.log('det=', dataS, dataE, dop);
             setDetail(true)
         }
    }, [sub])
    useEffect(() => {
         if(dataS && dataE){
    async function detailData() {
        const a = (await axios.post(serverURL + '/dop', {
         date_s:dataS,
          date_e:dataE,
          symbol:symb[0].symbol 
        }));
        setDop(DataDetail(a.data))
    //   setDateS(a.data[0]['min(open_time)']);
    //   setDateE(a.data[0]['max(open_time)']);
    //   setVolumeS(a.data[0]['min(volume)']);
    //   setVolumeE(a.data[0]['max(volume)']);
    //   setTradeS(a.data[0]['min(number_of_trades)']);
    //   setTradeE(a.data[0]['max(number_of_trades)']);
      }
    detailData();
            //  console.log('det=', dataS, dataE, dop);
             setDetail(true)
         }
    }, [dataS, dataE])
    
    const DataDetail = (per) => {
        const arr = [];
        per.map(p => {
            arr.push (
              [p.open_time,
            p.open_value,
            p.high,
            p.low,
            p.close_value,
            p.volume,
            p.number_of_trades,
            p.quote_asset_volume,
            p.taker_buy_base_asset_volume,
            p.taker_buy_quote_asset_volume,
                ])
            // dop_col.push(
            //     [
            //         p.open_time,
            //         p.volume,
            //     ]
            // )
            
        })
        return arr;
    }
    // const addDetail = () => {
    //     console.log('det=',dataS,dataE);
    // }
    // console.log('row=',symb[0].symbol);
    candle = candle.sort();
    candle_o = candle_o.sort();
    // console.log('c_o',candle_o[1]);
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
                    //.crosshair.crosshair
                    click: function (e) {
                        // console.log('==', e.xAxis[0].value.toFixed(0), ' ',
                        //     e.xAxis[0].axis.dataMin, ' ',
                        // e.xAxis[0].axis.dataMax);
                        // console.log('e',e);
                        const my_point = e.xAxis[0].value.toFixed(0)/1000;
                        let indi = null;
                        let point_min = sub[0][0][0]/1000;
                        const abc = sub.find((s, index) => {
                            const a = s[0][0] / 1000;
                            const point = Math.abs(a - my_point);
                            if (point_min > point) {
                                indi = index;
                                point_min = point;
                            }
                            if (indi!==index) {return}
                            // console.log('a',index,a,' ',my_point,' ',a-my_point);
                            // if (a > (my_point - 3000) && a < (my_point + 3000)) {
                            //     ind = index;

                            //     return s;
                            // }
                            // console.log('ind',ind,' ',a,' ',point_min,' ',point);
                        })
                        
                        if(ind!==null){
                            let series = this.series[2];
                            // console.log('date',sub[ind][0][0]);
                            series.addPoint(sub[ind][0]);
                            series.addPoint(sub[ind][1]);
                            setDataS(sub[ind][0][0]);
                            setDataE(sub[ind][1][0]);
                                setInd(indi)
                        }
                        // addDetail();
                        
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
                height: '20%'
            },
                {
                    top: '20%',
                    height: '20%'
                },
                {
                top: '40%',
                height: '10%'
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
                data: candle_o,
                marker: {
                    enabled: false
                },
                
            },
               {
                type: 'candlestick',
                id: 'cand_close',
                name: 'CANDLE_close',
                data: candle_c,
                marker: {
                    enabled: false
                   },
                yAxis: 1,
                
            }, 
            // sub.map(s => {
                
            {    name: 'AAPL Stock Price',
                // data: [sub[0][0], sub[0][0]],
                data: [sb[0], sb[1]],
                yAxis: 2,
                
                },
            
             
            {
            type: 'column',
            id: 'volume',
            name: 'Volume',
            data: volume,
            yAxis: 3
                },
            
            {
            type: 'column',
            id: 'trade',
            name: 'Trade',
            data: trade,
            yAxis: 4
                },
            {
            type: 'column',
            id: 'quote',
            name: 'Quote_volume',
            data: quote,
            yAxis: 5
                },
            {
            type: 'column',
            id: 'base',
            name: 'Base_asset_volume',
            data: base,
            yAxis: 6
                },
            {
            type: 'column',
            id: 'quote_v',
            name: 'Quote_asset_volume',
            data: quote_v,
            yAxis: 7
                },
            
        ]
        },
           
    );}, 500);
//   });
    return (
        <>
            {(detail && dop) && (dop.length>0 ?
                <>
                    {/* <div id="container" className={s.container}></div> */}
                    <DetailStock ind={ind} sub={sub} candle_o={dop}  candle_c={dop_col} />
                </>
                : <h4>Выбрать</h4>)}
            
            <div id="container" className={s.container}></div>
            {/* <button id="button">Add series</button> */}
        </>
    )
};

