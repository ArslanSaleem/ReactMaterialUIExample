import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { FormLabel, InputLabel, Select as MUISelect }  from '@material-ui/core';
import { MenuItem } from '@material-ui/core';



const Select = (props) => {

    const { label, name, value, onChange, items } = props

    return ( 
        <FormControl variant="outlined" >
            <InputLabel>{label}</InputLabel>  
            <MUISelect
                name={name}
                value={value}
                onChange={onChange}
                label={label}
            >
                {
                    items.map(
                        item => (
                            <MenuItem key={item.value} value={item.value}> {item.name} </MenuItem>
                        )
                    )
                }
            </MUISelect>
        </FormControl>
     );
}
 
export default Select;