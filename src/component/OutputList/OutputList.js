import s from "./OutputList.module.css"

const OutputList = ({result, per}) => {
    // console.log('o=',result);
    let pum = 0;
    let pas = 0;
    let pes = 0;
    result.forEach((res => {
      if (res[0].res === undefined) {
        pes++;
        return
      };
      if (res[0].res > 0) {
        // console.log('fff');
        pum++
        return
      };
      if (res[0].res < 0) {
        // console.log('ggg');
        pas++
      };
    }))
    // console.log('pum=',pum,' ',pas);
    // setSum(pum);
    // setSumma(pum * per.win / 100);
    // setRas(pas);
    // setRasn(pas * per.loss / 100);
    // setNes(pes)
    return (
        <>
            <h3>Количество: {pum + pas}</h3>
            <p>не законченные: {pes}</p>
            <p className={s.win}>выигрышей: {pum}</p>
            <p className={s.loss}>проигрышей: {pas}</p>
            <p className={s.prib}>прибыль: {((pum * per.win / 100)-(pas * per.loss / 100)).toFixed(4)}</p>
            <p className={s.roy}>рой: {(((pum * per.win / 100)-(pas * per.loss / 100)) / (pum + pas) * 100).toFixed(4)}</p>
        </>
    )
}

export default OutputList;