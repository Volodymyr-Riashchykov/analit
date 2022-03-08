import { ResetTvOutlined } from "@mui/icons-material";
import DataRows from "./DataRows";


export default function DataCol( resul, per,ind, fil,vol,trad,tak ) {
    // vol = 5;
    let vol_min = 100000000;
    let vol_max = 0;
    let trad_min = 100000000;
    let trad_max = 0;
    let tak_min = 100000000;
    let tak_max = 0;
    resul.map((res, i) => {
        if (res[0].res === undefined) return;
        if (res[2].volume < vol_min) vol_min = res[2].volume;
        if (res[2].volume > vol_max) vol_max = res[2].volume;
        if (res[2].number_of_trades < trad_min) trad_min = res[2].number_of_trades;
        if (res[2].number_of_trades > trad_max) trad_max = res[2].number_of_trades;
        if (res[2].taker_buy_base_asset_volume < tak_min) tak_min = res[2].taker_buy_base_asset_volume;
        if (res[2].taker_buy_base_asset_volume > tak_max) tak_max = res[2].taker_buy_base_asset_volume;
    })
    let vol_r = 0;
    if (vol !== 0) vol_r = (vol_max - vol_min) / vol;
    const vol_a = []

    let trad_r = 0;
    if (trad !== 0) trad_r = (trad_max - trad_min) / trad;
    const trad_a = []

    let tak_r = 0;
    if(tak !== 0) tak_r = (tak_max - tak_min) / tak;
    const tak_a = []

    for (let i = 0; i < vol; i++) {
        vol_a[i] = [];
    }
    
    for (let i = 0; i < trad; i++) {
        trad_a[i] = [];
    }
    
    for (let i = 0; i < tak; i++) {
        tak_a[i] = [];
    }
    
    resul.map((res) => {
        if (res[0].res === undefined) return;
        
        for (let i = 0; i < vol; i++) {
            if (res[2].volume <= (vol_min + (i+1) * vol_r)) {
                vol_a[i].push(res);
                break
           }
        }

        for (let i = 0; i < trad; i++) {
            if (res[2].number_of_trades <= (trad_min + (i+1) * trad_r)) {
                trad_a[i].push(res);
                break
           }
        }
        
        for (let m = 0; m < tak; m++) {
            if (res[2].taker_buy_base_asset_volume <= (tak_min + (m+1) * tak_r)) {
                tak_a[m].push(res);
                break
           }
        }
    })
    // console.log('=vol', vol_min, vol_max, ' ', vol_r, ' ', vol_a);
    const vol_res = [];
    const trad_res = [];
    const tak_res = [];
    let d;
    
    for (let index = 0; index < vol; index++) {
        d = DataRows({ resul: vol_a[index], per, ind, fil });
        // d.set("min", "max");
        d.id = index+1
        d.min = (vol_min + (index) * vol_r).toFixed(4);
        d.max = (vol_min + (index+1) * vol_r).toFixed(4);
        vol_res.push(d)
        // console.log('==v',vol_res,d);
    }
    
    for (let index = 0; index < trad; index++) {
        d = DataRows({ resul: trad_a[index], per, ind, fil });
        // d.set("min", "max");
        d.id = index+1
        d.min = (trad_min + (index) * trad_r).toFixed(4);
        d.max = (trad_min + (index+1) * trad_r).toFixed(4);
        trad_res.push(d);
        // console.log('==tr',trad_res,d);
    }
    
    for (let index = 0; index < tak; index++) {
        d = DataRows({ resul: tak_a[index], per, ind, fil });
        // d.set("min", "max");
        d.id = index+1
        d.min = (tak_min + (index) * tak_r).toFixed(4);
        d.max = (tak_min + (index+1) * tak_r).toFixed(4);
        tak_res.push(d)
        // console.log('==t',tak_res,d);
    }
    // console.log('==', vol_res,' ',trad_res,' ',tak_res);
    return {vol_res,trad_res,tak_res}
}