import React from 'react';
import PageHeader from "../components/PageHeader";
import ViewListIcon from '@material-ui/icons/ViewList';

const ViewProperties = () => {
    return ( 
        <>
            <PageHeader
            title="View Properties"
            description="Search for already added properties"
            icon= {<ViewListIcon></ViewListIcon>}
            />
        </>
     );
}
 
export default ViewProperties;