import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Select as MUISelect, FormHelperText }  from '@material-ui/core';
import { MenuItem } from '@material-ui/core';



const Select = (props) => {

    const { label, name, value, error=null, onChange, items } = props

    return ( 
        <FormControl variant="outlined" {...(error && {error:true})} >
            <InputLabel>{label}</InputLabel>  
            <MUISelect
                name={name}
                value={value}
                onChange={onChange}
                label={label}
                MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left"
                    },
                    getContentAnchorEl: null
                  }}
            >
                {
                    items.map(
                        item => (
                            <MenuItem key={item.value} value={item.value}> {item.name} </MenuItem>
                        )
                    )
                }
            </MUISelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
     );
}
 
export default Select;