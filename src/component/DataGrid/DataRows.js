

export default function DataRows({ resul, per,ind, fil }) {
    const { p, n } = fil;
    // console.log('ww',resul);
    let pum = 0;
        let pas = 0;
        let pes = 0;
        resul.map(res => {
            if (res[0].res === undefined) {
                pes++;
                return
            };
            if (res[0].res > 0) {
                if (p) {
                    if ((res[1].open_value - res[1].close_value)>=0) {
                        pum++
                        return
                    }
                }
                
                if (n) {
                    if((res[1].close_value - res[1].open_value)>0)pum++
                }
            
            
                return
            };
            if (res[0].res < 0) {
                if (p) {
                    if ((res[1].open_value - res[1].close_value)>=0) {
                        pas++
                        return
                    }
                }
                
                if (n) {
                    if ((res[1].close_value - res[1].open_value) > 0) pas++
                }
            }
        })
        // rows.push({
        return ({
            id: (ind + 1),
            number: (pum + pas),
            win: pum,
            loss: pas,
            profit: ((pum * per[ind].win) - (pas * per[ind].loss)).toFixed(4),
            roy:(((pum * per[ind].win / 100)-(pas * per[ind].loss / 100)) / (pum + pas) * 100).toFixed(4)
        })
}