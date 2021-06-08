import React from 'react';
import { makeStyles, Paper } from "@material-ui/core";


const styles =  makeStyles ({
    sideMenu: {
        display : 'flex',
        flexDirection: 'column',
        position: 'absolute',
        width: '300px',
        height: '100%',
        left: 0,
        backgroundColor: '#132853'
    }
});


const SideMenu = () => {

    let classes = styles();
    return ( 
        <Paper className={classes.sideMenu} square > 
        </Paper>

     );
}
 
export default SideMenu;