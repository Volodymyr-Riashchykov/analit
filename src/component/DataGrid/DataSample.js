

function DataSample(per,result,istr) {
    // console.log('aa');
    const row = [
        {
            // symbol: 0,
            symbol: per.symbol,
            flame: `${per.flame_s} -`,
            candle: `${per.candle_s} -`,
            date: `${per.date_s} -`,
            volume: `${per.volume_s} -`,
            trade: `${per.trade_s} -`,
            win:  per.win,
            loss: per.loss,
            full: per.full,
            id:istr+1,
        },
            {
            // symbol: 0,
            // symbol: per[istr].symbol,
            flame: `${per.flame_e}`,
            candle: `${per.candle_e}`,
            date: `${per.date_e}`,
            volume: `${per.volume_e}`,
            trade: `${per.trade_e}`,
            // win:  per[istr].win,
            // loss: per[istr].loss,
            // full: per[istr].full,
            id:'end',
        }
    ]
    // console.log('re=',result);
    
    const candle = [];
    const sub = [];
    result.map((res, i) => {
        // console.log('=',res);
        if (res[0].res === undefined) return;
        // console.log('===',res);
        candle.push(
            [res[2].open_time,
            res[2].open_value,
            res[2].high,
            res[2].low,
            res[2].close_value,
            res[2].volume,
            res[2].number_of_trades,
            i,
            res[2].quote_asset_volume,
            res[2].taker_buy_base_asset_volume,
            res[2].taker_buy_quote_asset_volume,
            ],
            [res[3].open_time,
            res[3].open_value,
            res[3].high,
            res[3].low,
            res[3].close_value,
            res[3].volume,
            res[3].number_of_trades,
            i,
            res[2].quote_asset_volume,
            res[2].taker_buy_base_asset_volume,
            res[2].taker_buy_quote_asset_volume,
            ]
        )
        sub.push([
            [
            res[2].open_time,
            i,
            ],
             [
            res[3].open_time,
            i,
            ],
        ])
        
    })
    
    
    
    return {row, candle, sub};
}

module.exports = DataSample;