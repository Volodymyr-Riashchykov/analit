import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Filtr from '../Filter/Filter';
import HighStock from "../Highcharts/Highcharts";
import DataSample from './DataSample';
import s from '../Highcharts/Highcharts.module.css'
import DataRows from './DataRows';
import DataCol from './DataCol';

const polog = 'start'

let candle = null;
let candle_o = null;
let candle_c = null;

let rowsd = [];
let rowsv = [];
let rowstr = [];
let rowst = [];
let sub = [];
export default function DataTable({ result, per, deleteRes }) {
    const [p, setP] = useState(true);
    const [n, setN] = useState(true);
    const [str, setStr] = useState(null);
    const [vol, setVol] = useState(0);
    const [trad, setTrad] = useState(0);
    const [tak, setTak] = useState(0);
    const [vols, setVols] = useState([]);
    const [trads, setTrads] = useState([]);
    const [taks, setTaks] = useState([]);
    
    // console.log('ult=',result[0]);
    useEffect(() => {
        // 
        // if (!str) {
            setStr(0);
            // const istr = 0;
            const d = DataSample(per[0], result[0], 0);
            rowsd = d.row;
            candle = d.candle;
            sub = d.sub;
            candle_o = d.candle_o;
            candle_c = d.candle_c;
            const dd = DataCol(result[0], per, 0, fil, vol,trad,tak);
            rowsv = dd.vol_res;
            rowstr = dd.trad_res;
            rowst = dd.tak_res;
        // }
        console.log('s4=',str,'');
    }, [result]);

    // useEffect(() => {
    //     // 
    //     if (!str) {
    //         setStr(0);
    //         // const istr = 0;
    //         const d = DataSample(per[0], result[0], 0);
    //         rowsd = d.row;
    //         candle = d.candle;
    //         sub = d.sub;
    //         candle_o = d.candle_o;
    //         candle_c = d.candle_c;
    //         const dd = DataCol(result[0], per, 0, fil, vol,trad,tak);
    //         rowsv = dd.vol_res;
    //         rowstr = dd.trad_res;
    //         rowst = dd.tak_res;
    //     }
    //     console.log('s1=',str,'');
    // }, []);
    useEffect(() => {
        // 
        // if (str) {
            const dd = DataCol(result[0], per, 0, fil, vol,trad,tak);
        rowsv = dd.vol_res;
        setVols(rowsv);
        rowstr = dd.trad_res;
        setTrads(rowstr);
        rowst = dd.tak_res;
        setTaks(rowst);
        // }
        console.log('s2=',vol,'');
    }, [vol,trad,tak]);
    
    // console.log('result=',result[0],' ',per,' ',str);
    const onChange = e => {
        // console.log('kvo=',e.currentTarget);
        if (e.currentTarget.value === "G") setP(!p);
        if (e.currentTarget.value === "R") setN(!n);
        if (e.currentTarget.id === "vol") setVol(e.currentTarget.value);
        if (e.currentTarget.id === "trad") setTrad(e.currentTarget.value);
        if (e.currentTarget.id === "tak") setTak(e.currentTarget.value);

        // if (e.currentTarget.name === "n") setFilter({n=e.currentTarget.value});
    }
    const fil = { p, n };
    
    const deleteStr = React.useCallback(
        (id) => () => {
            // if(id-1)
      setTimeout(() => {
        // setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        //   console.log('del', id);
          deleteRes(id-1)
      });
    },
    [],
  );
    const columns = [
        { field: 'id', headerName: 'ID', headerAlign: polog, width: 70 },
        { field: 'number', headerName: 'NUMBER', headerAlign: polog, width: 130 },
        { field: 'win', headerName: 'WIN', headerAlign: polog, alignItems: "center", width: 130 },
        { field: 'loss', headerName: 'LOSS', headerAlign: polog, width: 130 },
        { field: 'profit', headerName: 'PROFIT', headerAlign: polog, width: 130 },
        { field: 'roy', headerName: 'ROY', headerAlign: polog, width: 130 },
        {
        field: 'actions',
        type: 'actions',
        headerAlign: 'start',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteStr(params.id)}
          />,
        
        ],
      },
        
    ];
    const columnsd = [
        { field: 'id', headerName: 'ID', width: 50 },
            { field: 'symbol', headerName: 'PAIR', headerAlign: polog, width: 100 },
            { field: 'flame', headerName: 'SHADOW', headerAlign: polog, alignItems: "center", width: 80 },
            { field: 'candle', headerName: 'BODY', headerAlign: polog, width: 80 },
            { field: 'date', headerName: 'DATA', headerAlign: polog, width: 140 },
            { field: 'volume', headerName: 'VOLUME', headerAlign: polog, width: 100 },
            { field: 'trade', headerName: 'TRADE', headerAlign: polog, width: 100 },
            { field: 'win', headerName: 'WIN', headerAlign: polog, width: 80 },
            { field: 'loss', headerName: 'LOSS', headerAlign: polog, width: 80 },
            { field: 'full', headerName: 'FULL', headerAlign: polog, width: 80 },
    ];
    const columnsv = [
        { field: 'min', headerName: 'MIN', headerAlign: polog, width: 100 },
        { field: 'max', headerName: 'MAX', headerAlign: polog, width: 100 },
        { field: 'number', headerName: 'NUMBER', headerAlign: polog, width: 70 },
        { field: 'win', headerName: 'WIN', headerAlign: polog, alignItems: "center", width: 50 },
        { field: 'loss', headerName: 'LOSS', headerAlign: polog, width: 50 },
        { field: 'profit', headerName: 'PROFIT', headerAlign: polog, width: 130 },
        { field: 'roy', headerName: 'ROY', headerAlign: polog, width: 130 },
        
        
    ];
    // console.log('p=',per,' ',per.win);
    const rows = [];
    // let rowsd = [];
    
    
    result.map((resul, ind) => {
        rows.push(DataRows({resul,per,ind,fil}))
        
    })

//    console.log('=',vol_min,vol_max,' ',trad_min,trad_max,' ',tak_min,tak_max);
    const changeStr = (id) => {
        
        const i = id.id - 1;
        setStr(i);
        const d = DataSample(per[i], result[i], i);
            rowsd = d.row;
            candle = d.candle
            sub = d.sub;
            candle_o = d.candle_o;
            candle_c = d.candle_c;
        const dd = DataCol(result[i], per, i, fil, vol,trad,tak);
        rowsv = dd.vol_res;
        rowstr = dd.trad_res;
        rowst = dd.tak_res;
        console.log('s3=',str);
    }
    // HighStock();
    return (
        <>
            <Filtr onChange={onChange} vol={vol} trad={trad} tak={tak} />
            {(vol !== 0 && vols.length !== 0) && (<div style={{
                textAlign: 'center',
                height: 200,
                width: '100%',
                backgroundColor: 'rgba(170, 160, 160, 0.8)',
            }}>
                <DataGrid
                    rows={rowsv}
                    columns={columnsv}
                    rowHeight={30}
                    direction="row"
                    align="center"
                    cell--textCenter
                />
            </div>)}
            {(trad !== 0 && trads.length !== 0) && (<div style={{
                height: 200,
                width: '100%',
                backgroundColor: 'rgba(180, 160, 160, 0.8)',
            }}>
                <DataGrid
                    rows={rowstr}
                    columns={columnsv}
                    rowHeight={30}
                    direction="row"
                    textAlign="center"
                />
            </div>)}
             {(tak !== 0 && taks.length !== 0) && (<div style={{
                height: 200,
                width: '100%',
                backgroundColor: 'rgba(190, 160, 160, 0.8)',
            }}>
                <DataGrid
                    rows={rowst}
                    columns={columnsv}
                    rowHeight={30}
                    direction="row"
                    alignItems="center"
                />
            </div>)}
            <div style={{
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                // alignSelf: "center",
                height: 400,
                width: '100%',
                backgroundColor: 'rgba(160, 180, 160, 0.8)',
            }}>
            {/* <Box sx={{
                height: 400,
                width: 1,
                backgroundColor: 'rgba(160, 180, 160, 0.8)',
                '& .super-app-theme--cell': {
                backgroundColor: 'rgba(224, 183, 60, 0.55)',
                color: '#1a3e72',
                fontWeight: '800',
                },
                '& .super-app.negative': {
                backgroundColor: 'rgba(157, 255, 118, 0.49)',
                color: '#1a3e72',
                fontWeight: '600',
                },
                '& .super-app.positive': {
                backgroundColor: '#d47483',
                color: '#1a3e72',
                fontWeight: '600',
                },
                }}
            > */}
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    
                    onRowClick={changeStr}
                    // pagination="false"
                        //   disableSelectionOnClick.
                    components={{
                        Toolbar: GridToolbar,
                    }}
                    // sx={{
                       
                    //     bgcolor:red,
                    //     boxShadow: 2,
                    //     border: 2,
                    //     borderColor: 'primary.light',
                    //     '& .MuiDataGrid-cell:hover': {
                    //         color: 'primary.main',
                    //     },
                        // }}
                    // checkboxSelection
                        //   action={SelRows}
                />
                </div>
            {/* </Box> */}
            <div style={{
                height: 200,
                width: '100%',
                backgroundColor: 'rgba(160, 160, 180, 0.8)',
            }}>
                <DataGrid
                    rows={rowsd}
                    columns={columnsd}
                    rowHeight={30}
                    direction="row"
                    alignItems="center"
                    // pageSize={5}
                    // rowsPerPageOptions={[5]}
                    // onRowClick={changeStr}
                    //     //   disableSelectionOnClick.
                    // components={{
                    //     Toolbar: GridToolbar,
                    // }}
                    
                    // checkboxSelection
                        //   action={SelRows}
                />
            </div>
            
            {candle ?
                <>
                    {/* <div id="container" className={s.container}></div> */}
                    <HighStock candle={candle} sub={sub} candle_o={candle_o}  candle_c={candle_c} symb={rowsd} str={str} />
                </>
                : <h4>Что то пошло не так</h4>}
            
        </>
    )
}