import React, {useRef, useState} from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import { FormControl, FormLabel } from '@material-ui/core';


const FileUploader = (props) => {

    const { name, label, value, onChange } = props;

    const onEventCall= (value) => ({
        target: {
            name, value
        }
    });
    
    return ( 
        <>  
            <FormControl variant='outlined' style={{width:'100%'}}>
                <FormLabel style={{marginBottom: '10px'}}> {label} </FormLabel>
                <DropzoneArea
                    onChange={ e => onChange(onEventCall(e))}
                />
            </FormControl>
        </>
    );
}
 
export default FileUploader;
