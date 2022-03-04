import PropTypes from "prop-types";
// import AddContactInput from "../AddContactInput/AddContactInput"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
// import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import s from "./Filter.module.css"

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function Filtr({value,onChange,vol,trad,tak}) {
    return (
        <>
            <Box
                // style={ }
            sx={{
                display: 'flex',
                    justifyContent: 'space-evenly',
                flexWrap: 'nowrap',
                // alignItems: 'center',
                '& > :not(style)':
                // '& .MuiTextField-root':
                { m: 1, width: '11ch' },
            }}
            >
            {/* <FormLabel component="legend">Labelrow={true} placement</FormLabel> */}
                <FormGroup aria-label="position" row className={s.form} >
                <FormControlLabel
                    value="G"
                    control={<Checkbox onChange={onChange} defaultChecked />}
                    label="G"
                        labelPlacement="start"
                        sx={{
                            marginRight:3
                        }}
                    //top,start,bottom,end
                    />
                <FormControlLabel
                    value="R"
                    control={<Checkbox onChange={onChange} defaultChecked />}
                    label="R"
                    labelPlacement="start"
                    />
                
            </FormGroup>

            <TextField
                id="vol"
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                label="volume"
                value={vol}
                onChange={onChange}
                size="small"
                variant="outlined"
                />
            <TextField
                id="trad"
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                label="trade"
                value={trad}
                onChange={onChange}
                size="small"
                variant="outlined"
                />
            <TextField
                id="tak"
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                label="taker volume"
                value={tak}
                onChange={onChange}
                size="small"
                variant="outlined"
                />
            </Box>
        </>    
        //  <AddContactInput{...label} defaultChecked
        //         type="text"
        //         name="Find contacts by name"
        //         value={value}
        //         hahdleChange={onChange}
        //         title=""
        //         pattern=""
        //     />
        
    )
}

// Filtr.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// }