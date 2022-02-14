import s from "./TableRow.module.css"
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
    
import Highcharts from 'highcharts';

// require('highcharts/highcharts.js')(Highcharts);
require('highcharts/modules/exporting.js')(Highcharts);
require('highcharts/modules/data.js')(Highcharts);
require('highcharts/modules/stock.js')(Highcharts);
require('highcharts/modules/hollowcandlestick.js')(Highcharts);
// require('highcharts-stock/stock.js')(Highcharts);

let data_p =[];
const TablRow = ({ result, per, fil, ind }) => {
    // console.log('res-',result,' ',ind);
    if(ind===0) data_p =[];
    // data_p[ind] =[];
    let pum = 0;
        let pas = 0;
        let pes = 0;
    // result.map(((r,i) => {
        // console.log('r=', r);
        result.map((res => {
            // console.log('rr=', res[0]);
            if (res[0].res === undefined) {
            pes++;
            return
            };
            if (ind === 0) {
                // console.log(res);
                data_p.push(
                    [res[2].open_time,
                    res[2].open_value,
                    res[2].high,
                    res[2].low,
                    res[2].close_value
                    ],
                    [res[3].open_time,
                    res[3].open_value,
                    res[3].high,
                    res[3].low,
                    res[3].close_value
                   ]
                )
            }
            if (res[0].res > 0) {
                if (fil.p) {
                    if ((res[1].open_value - res[1].close_value)>=0) {
                        pum++
                        return
                    }
                }
                
                if (fil.n) {
                    if((res[1].close_value - res[1].open_value)>0)pum++
                }
            
            
            return
        };
            if (res[0].res < 0) {
                if (fil.p) {
                    if ((res[1].open_value - res[1].close_value)>=0) {
                        pas++
                        return
                    }
                }
                
                if (fil.n) {
                    if((res[1].close_value - res[1].open_value)>0)pas++
                }
            // console.log('ggg');
            // pas++
        };
        }))
        
    // }))
    // console.log('fff=', data_p);
    data_p.sort();
// Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-ohlcv.json', function (data) {
    Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1
        },
        navigator: {
            series: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        series: [{
            type: 'hollowcandlestick',
            name: 'Hollow Candlestick',
            data: data_p
        }]
    });
// });
    
    return (
        <>
        
        <TableRow
            //   key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className={s.win} component="th" scope="row">
                {pum + pas}
              </TableCell>
              {/* <TableCell align="right">{pes}</TableCell> */}
              <TableCell align="right">{pum}</TableCell>
              <TableCell align="right">{pas}</TableCell>
                <TableCell align="right">{((pum * per.win)-(pas * per.loss)).toFixed(4)}</TableCell>
                <TableCell align="right">{(((pum * per.win / 100)-(pas * per.loss / 100)) / (pum + pas) * 100).toFixed(4)}</TableCell>
            </TableRow>
        </>
    )
}

export default TablRow;