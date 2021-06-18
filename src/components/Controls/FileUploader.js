import React, {useRef, useState} from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import { FormControl, FormLabel, FormHelperText, makeStyles } from '@material-ui/core';


const useStyles=makeStyles({
    'root':{
        '& .MuiDropzonePreviewList-imageContainer': {

            maxWidth:'15%',
            flexBasis:'155%'
        },
        '& .MuiGrid-spacing-xs-8': {
            margin:'0px'
        }
    }
});

const FileUploader = (props) => {

    const { name, label, error=null, onChange, ...others } = props;

    const classes = useStyles();

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
                    classes={classes}
                    {...others}
                />
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </>
    );
}
 
export default FileUploader;
