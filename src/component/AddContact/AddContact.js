import { useState, useEffect  } from "react";
import AddContactInput from "../AddContactInput/AddContactInput";
import style from './AddContact.module.css'
import axios from "axios";
import { serverURL } from "../App/App";

export default function AddContact({ handleAddContact }) {
    
    const [flame_s, setFlameS] = useState("0");
    const [flame_e, setFlamesE] = useState("20");
    const [candle_s, setCandleS] = useState("0");
    const [candle_e, setCandleE] = useState("20.03");
    const [date_s, setDateS] = useState("");
    const [date_e, setDateE] = useState("");
    const [win, setWin] = useState("3");
    const [loss, setLoss] = useState("2");
    const [symbol, setSymbol] = useState("BTC-USDT");
    
    // useEffect(async() => {
    //     const b = (await axios.get(serverURL+'/dates'));
    //     setDateS(b.data);
    //     const c = (await axios.get(serverURL+'/datee'));
    //     setDateE(c.data);
    // },[])

    const hahdleChange = e => {
        if (e.currentTarget.name === "тень нач.") setFlameS(e.currentTarget.value);
        if (e.currentTarget.name === "тень кон.") setFlamesE(e.currentTarget.value);
        if (e.currentTarget.name === "тело нач.") setCandleS(e.currentTarget.value);
        if (e.currentTarget.name === "тело кон.") setCandleE(e.currentTarget.value);
        if (e.currentTarget.name === "дата нач.") setDateS(e.currentTarget.value);
        if (e.currentTarget.name === "дата кон.") setDateE(e.currentTarget.value);
        if (e.currentTarget.name === "take profit") setWin(e.currentTarget.value);
        if (e.currentTarget.name === "stop loss") setLoss(e.currentTarget.value);
        if (e.currentTarget.name === "пара") setSymbol(e.currentTarget.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const per = {
            flame_s,
            flame_e,
            candle_s,
            candle_e,
            date_s,
            date_e,
            win,
            loss,
            symbol
        }
        console.log('p=',per);
        handleAddContact(per);
        resetState();
    };

    const resetState = () => {
        // setName("");
        // setNumber("");
    }
       
    return (
        <div className={style.form}>
            <form className={style.inputForm} onSubmit={handleSubmit}>
                <div className={style.input}>
                    <AddContactInput
                        type="text"
                        //flame
                        name="тень нач."
                        value={flame_s}
                        hahdleChange={hahdleChange}
                        title="Начальная величина 'тени' свечи, в %, до 100, разделитель точка"
                        pattern="\d{1,2}(\.\d{0,2})?"
                        placeholder="23.45"
                        size="5"
                        //^[0-9]{,2}+(\.\d{2})?
                        //^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
                    />
                    <AddContactInput
                        type="text"
                        //candle
                        name="тень кон."
                        value={flame_e}
                        hahdleChange={hahdleChange}
                        title="Конечная величина 'тени' свечи, в %, до 100, разделитель точка"
                        pattern="\d{1,2}(\.\d{0,2})?"
                        placeholder="63.08"
                        size="5"
                        //\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}
                    />
                    <AddContactInput
                        type="text"
                        //flame
                        name="тело нач."
                        value={candle_s}
                        hahdleChange={hahdleChange}
                        title="Начальная величина свечи, в %, до 100, разделитель точка"
                        pattern="\d{1,2}(\.\d{0,2})?"
                        placeholder="23.45"
                        size="5"
                        //[0-9]{,2}+(\.\d{2})?
                        //^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
                    />
                    <AddContactInput
                        type="text"
                        //candle
                        name="тело кон."
                        value={candle_e}
                        hahdleChange={hahdleChange}
                        title="Конечная величина свечи, в %, до 100, разделитель точка"
                        pattern="\d{1,2}(\.\d{0,2})?"
                        placeholder="63.08"
                        size="5"
                        //\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}
                            />
                </div>
                <div className={style.input}>
                    <AddContactInput
                        type="datetime"
                        //flame
                        name="дата нач."
                        value={date_s}
                        hahdleChange={hahdleChange}
                        title="Начало временного отрезка"
                        pattern=""
                        placeholder="2022-01-22T22:00:00.000+00:00"
                        size="35"
                        //[0-9]{,2}^\d{2}+(\.\d{2})?
                        //^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
                    />
                    <AddContactInput
                        type="datetime"
                        //candle
                        name="дата кон."
                        value={date_e}
                        hahdleChange={hahdleChange}
                        title="Конец временного отрезка"
                        pattern=""
                        placeholder="2022-01-22T22:00:00.000+00:00"
                        size="35"
                        //[0-9]{, 2}
                        //\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}
                            />
                </div>
                <div className={style.input}>
                    <AddContactInput
                        type="text"
                        //flame
                        name="take profit"
                        value={win}
                        hahdleChange={hahdleChange}
                        title="Величина выигрыша, в %, до 100, разделитель точка"
                        pattern="\d{1,2}(\.\d{0,2})?"
                        placeholder="23.45"
                        size="5"
                        //[0-9]{,2}+(\.\d{2})?
                        //^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
                    />
                    <AddContactInput
                        type="text"
                        //candle
                        name="stop loss"
                        value={loss}
                        hahdleChange={hahdleChange}
                        title="Величина проигрыша, в %, до 100, разделитель точка"
                        pattern="\d{1,2}(\.\d{0,2})?"
                        placeholder="63.08"
                        size="5"
                        //\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}
                    />
                    <AddContactInput
                        type="text"
                        //flame
                        name="пара"
                        value={symbol}
                        hahdleChange={hahdleChange}
                        title="Выбор монет"
                        pattern="^[a-zA-Z]'/'[a-zA-Z]"
                        placeholder="BTC/USDT"
                        size="12"
                        //[0-9]{,2}^\d{2}+(\.\d{2})?
                        //^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
                    />
                </div>
                <div>
                    <button type="submit" className={style.btn}>Begin</button>
                </div>
        </form>        
            
            
        </div>
    )
} 