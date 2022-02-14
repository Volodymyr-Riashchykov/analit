import PropTypes from "prop-types";
// import AddContactInput from "../AddContactInput/AddContactInput"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
// import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function Filtr({value,onChange}) {
    return (
        <>
            {/* <FormLabel component="legend">Label placement</FormLabel> */}
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="G"
                    control={<Checkbox onChange={onChange} defaultChecked />}
                    label="G"
                    labelPlacement="bottom"
                    //top,start,bottom,end
                    />
                <FormControlLabel
                    value="R"
                    control={<Checkbox onChange={onChange} defaultChecked />}
                    label="R"
                    labelPlacement="bottom"
                    />
                
            </FormGroup>
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