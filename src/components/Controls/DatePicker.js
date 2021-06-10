import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';


const DatePicker = (props) => {

    const {name, label, value, onChange} = props;

    const onEventCall = (name, value) => ({
        target: {
            name, value
        }
    });

    return ( 
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                label={label}
                name={name}
                value={value}
                onChange={e => onChange(onEventCall(name, e)) }
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
     );
}
 
export default DatePicker;
