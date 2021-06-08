import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from '@material-ui/core';


const RadioGroup = (props) => {
    const { label, name, value, onChange, items } = props;

    return ( 
            <FormControl>
                <FormLabel >{label}</FormLabel>
                <MuiRadioGroup row 
                    name={name} 
                    value={value} 
                    onChange={onChange}>
                    {
                        items.map(
                            item => (
                                <FormControlLabel key={item.name} value={item.name} control={<Radio />} label={item.title} />
                            )
                        )
                    }
         
                </MuiRadioGroup>
            
            </FormControl>
    );
}
 
export default RadioGroup;