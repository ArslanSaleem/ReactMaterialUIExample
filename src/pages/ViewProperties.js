import React from 'react';
import PageHeader from "../components/PageHeader";
import ViewListIcon from '@material-ui/icons/ViewList';
import { Paper } from '@material-ui/core';
import ViewPropertiesTable from './ViewPropertiesTable';

const ViewProperties = () => {
    return ( 
        <>
            <PageHeader
            title="View Properties"
            description="Search for already added properties"
            icon= {<ViewListIcon></ViewListIcon>}
            />
            <Paper elevation={1} style={ {padding:'10px', margin:'10px'}}>
                <ViewPropertiesTable></ViewPropertiesTable>
            </Paper>
        </>
     );
}
 
export default ViewProperties;
