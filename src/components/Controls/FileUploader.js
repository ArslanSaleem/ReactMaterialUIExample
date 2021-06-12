import React, {useRef, useState} from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import { FormControl, FormLabel, FormHelperText } from '@material-ui/core';


const FileUploader = (props) => {

    const { name, label, error=null, onChange } = props;

    const onEventCall= (value) => ({
        target: {
            name, value
        }
    });
    
    return ( 
        <>  
            <FormControl variant='outlined' style={{width:'100%'}} {...(error && {error:true})}>
                <FormLabel style={{marginBottom: '10px'}}> {label} </FormLabel>
                <DropzoneArea
                    onChange={ e => onChange(onEventCall(e))}
                />
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </>
    );
}
 
export default FileUploader;
