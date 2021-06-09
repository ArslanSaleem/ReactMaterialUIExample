import { FormControl, Checkbox as MUICheckBox, FormControlLabel } from '@material-ui/core';
import React from 'react';


const CheckBox = (props) => {

    const { name, label, value, onChange} = props;

    const onEventCall = (name, value) => ({
        target: {
            name, value
        }
    });

    return ( 
        <FormControl>
            <FormControlLabel
                control={<MUICheckBox 
                    color="primary" 
                    checked={value}
                    name={name}
                    onChange= { e => onChange(onEventCall(name, e.target.checked)) }
                    />}
                label={label}
                labelPlacement="end"
            />
        </FormControl>
     );
}
 
export default CheckBox;
