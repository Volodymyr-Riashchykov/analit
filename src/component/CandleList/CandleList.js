// import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { serverURL } from "../App/App";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import s from './CandleList.module.css'

export default function CandleList({ handleAddContact }) {
       const [flame_s, setFlameS] = useState("0");
    const [flame_e, setFlameE] = useState("20");
    const [candle_s, setCandleS] = useState("0");
    const [candle_e, setCandleE] = useState("20.03");
    const [date_s, setDateS] = useState("");
    const [date_e, setDateE] = useState("");
    const [win, setWin] = useState("3");
    const [loss, setLoss] = useState("2");
    const [symbol, setSymbol] = useState("BTC-USDT");
    const [volume_s, setVolumeS] = useState("");
    const [volume_e, setVolumeE] = useState("");
    const [trade_s, setTradeS] = useState("");
    const [trade_e, setTradeE] = useState("");
    const [full, setFull] = useState(true);
  
  useEffect( () => {
    async function beginData() {
      const a = (await axios.get(serverURL + '/date?symbol=' + symbol));
      setDateS(a.data[0]['min(open_time)']);
      setDateE(a.data[0]['max(open_time)']);
      setVolumeS(a.data[0]['min(volume)']);
      setVolumeE(a.data[0]['max(volume)']);
      setTradeS(a.data[0]['min(number_of_trades)']);
      setTradeE(a.data[0]['max(number_of_trades)']);
      }
    beginData();
    },[symbol])

  const handleChange = e => {
    // console.log('e=', e.target, ' ', e.currentTarget, ' ', e.currentTarget[name]);
    
    switch (e.currentTarget.id) {
      case "тень нач":
        setFlameS(e.currentTarget.value);
        break;
      case "тень кон":
        setFlameE(e.currentTarget.value);
        break;
      case "тело нач":
        setCandleS(e.currentTarget.value);
        break;
      case "тело кон":
        setCandleE(e.currentTarget.value);
        break;
      case "дата нач":
        setDateS(e.currentTarget.value);
        break;
      case "дата кон":
        setDateE(e.currentTarget.value);
        break;
      case "take profit":
        setWin(e.currentTarget.value);
        break;
      case "stop loss":
        setLoss(e.currentTarget.value);
        break;
      
      case "chec":
        setFull(!full);
        break;
      case "объем нач":
        setVolumeS(e.currentTarget.value);
        break;
      case "объем кон":
        setVolumeE(e.currentTarget.value);
        break;
      case "trade min":
        setTradeS(e.currentTarget.value);
        break;
      case "trade max":
        setTradeE(e.currentTarget.value);
        break;
      
      default:
        break;
    }
        // if (e.currentTarget.id === "тень нач") setFlameS(e.currentTarget.value);
        // if (e.currentTarget.id === "тень кон") setFlameE(e.currentTarget.value);
        // if (e.currentTarget.id === "тело нач") setCandleS(e.currentTarget.value);
        // if (e.currentTarget.id === "тело кон") setCandleE(e.currentTarget.value);
        // if (e.currentTarget.id === "дата нач") setDateS(e.currentTarget.value);
        // if (e.currentTarget.id === "дата кон") setDateE(e.currentTarget.value);
        // if (e.currentTarget.id === "take profit") setWin(e.currentTarget.value);
        // if (e.currentTarget.id === "stop loss") setLoss(e.currentTarget.value);
        // if (e.currentTarget.id === "пара") setSymbol(e.currentTarget.value);
        // if (e.currentTarget.id === "chec") setFull(!full);
    }
    const onChange = (e) => {
    setSymbol(e.target.value);
  };
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
          symbol,
          volume_s,
          volume_e,
          trade_s,
          trade_e,
          full
        }
        // console.log('p=',per);
        handleAddContact(per);
  };
  
  const currencies = [
  {value: 'BTC-USDT',},
  {value: 'SOL-USDT',},
  {value: 'MATIC-USDT',},
  {value: 'EOS-USDT',},
    {value: 'ATOM-USDT',},
    {value: 'ETC-USDT',},
    {value: 'ETH-USDT',},
    {value: 'SAND-USDT',},
    {value: 'AVAX-USDT',},
    {value: 'DOGE-USDT',},
    {value: 'MANA-USDT',},
    {value: 'FTM-USDT',},
    {value: '1inch',},
];  
  
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
    <Box
      // component="form"
        sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        // alignItems: 'center',
        '& > :not(style)':
        // '& .MuiTextField-root':
          { m: 1, width: '11ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField
            id="тень нач"
        type="number"
          InputProps={{ inputProps: { min: 0, max: 100, step: 0.01 } }}
          label="тень нач"
          value={flame_s}
        onChange={handleChange}
          size="small"
            variant="outlined"
          />
      <TextField
        id="тень кон"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 100, step: 0.01 } }}
        label="тень кон"
        value={flame_e}
        onChange={handleChange}
        size="small"
        variant="outlined" />
      <TextField
        id="тело нач"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 100, step: 0.01 } }}
        label="тело нач"
        value={candle_s}
        onChange={handleChange}
        size="small"
        variant="outlined"
      />
      <TextField
        id="тело кон"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 100, step: 0.01 } }}
        label="тело кон"
        value={candle_e}
        onChange={handleChange}
        size="small"
        variant="outlined"
        />
    </Box>
    <Box
      // component="form"
        sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        '& > :not(style)':
        // '& .MuiTextField-root':
          { m: 1, width: '30ch' },
      }}
      noValidate
        autoComplete="off"
      >
      <TextField
        id="дата нач"
        type="data"
        // InputProps={{ inputProps: { min: 0, max: 100, step: 0.01 } }}
        label="дата нач"
        value={date_s}
        onChange={handleChange}
        size="small"
        variant="outlined"
      />
      <TextField
        id="дата кон"
        type="data"
        // InputProps={{ inputProps: { min: 0, max: 100, step: 0.01 } }}
        label="дата кон"
        value={date_e}
        onChange={handleChange}
        size="small"
        variant="outlined"
      />
      </Box>
      <Box
      // component="form"
        sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        '& > :not(style)':
        // '& .MuiTextField-root':
          { m: 1, width: '20ch' },
      }}
      noValidate
        autoComplete="off"
      >
      <TextField
        id="объем нач"
        type="number"
        // InputProps={{ inputProps: { min: 0, max: 100, step: 0.01 } }}
        label="volume min"
        value={volume_s}
        onChange={handleChange}
        size="small"
        variant="outlined"
      />
      <TextField
        id="объем кон"
        type="number"
        // InputProps={{ inputProps: { min: 0, max: 100, step: 0.01 } }}
        label="volume max"
        value={volume_e}
        onChange={handleChange}
        size="small"
        variant="outlined"
        />
        <TextField
        id="trade min"
        type="number"
        // InputProps={{ inputProps: { min: 0, max: 100, step: 0.01 } }}
        label="trade min"
        value={trade_s}
        onChange={handleChange}
        size="small"
        variant="outlined"
      />
      <TextField
        id="trade max"
        type="number"
        // InputProps={{ inputProps: { min: 0, max: 100, step: 0.01 } }}
        label="trade max"
        value={trade_e}
        onChange={handleChange}
        size="small"
        variant="outlined"
        />
        <FormControlLabel
                    value={full}
                    control={<Checkbox id="chec" onChange={handleChange} defaultChecked />}
                    label="full"
                    labelPlacement="start"
                    //top,start,bottom,end
                    />
      </Box>
      <Box
      // component="form"
        sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        '& > :not(style)':
        // '& .MuiTextField-root':
          { m: 1, width: '20ch' },
      }}
      noValidate
        autoComplete="off"
      >
      <TextField
        id="take profit"
        type="number"
        // InputProps={{ inputProps: { min: 0, max: 100, step: 0.01 } }}
        label="take profit"
        value={win}
        onChange={handleChange}
        size="small"
        variant="outlined"
      />
      <TextField
        id="stop loss"
        type="number"
        // InputProps={{ inputProps: { min: 0, max: 100, step: 0.01 } }}
        label="stop loss"
        value={loss}
        onChange={handleChange}
        size="small"
        variant="outlined"
        />
        <TextField
          id="пара"
          select
        // type="number"
        // InputProps={{ inputProps: { min: 0, max: 100, step: 0.01 } }}
        label="pair"
        value={symbol}
        onChange={onChange}
        size="small"
        variant="outlined"
        >
        {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.value}
            </MenuItem>
        ))}
        </TextField>
      {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={symbol}
          label=""
          onChange={handleChange}
          size="small"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
        </Box>
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
        Send
      </Button>
</form>
    </>
  );
}