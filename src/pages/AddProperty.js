import React from 'react';
import AddPropertyForm  from "./AddPropertyForm";
import PageHeader from "../components/PageHeader";
import HomeIcon from '@material-ui/icons/Home';
import { Paper } from '@material-ui/core';


const AddProperty = () => {
    return ( 
        <>
            <PageHeader
            title="Add New Property"
            description="Enter details to post your Property Ad"
            icon= {<HomeIcon></HomeIcon>}
            />
            <Paper elevation={1} style={ {padding:'10px', margin:'10px'}}>
                <AddPropertyForm/>
            </Paper>
        </>
    );
}
 
export default AddProperty;