import React from 'react';
import { makeStyles, Paper } from "@material-ui/core";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ViewListIcon from '@material-ui/icons/ViewList';


const styles =  makeStyles ({
    sideMenu: {
        display : 'flex',
        flexDirection: 'column',
        flexFlow: 'column',
        position: 'fixed',
        width: '300px',
        height: '100%',
        left: 0,
        backgroundColor: '#132853'
    },
    link: {
        color:'white', 
        display:'flex',
        listStyleType: 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingInlineStart: '0px',
        '& li a span': {
            marginLeft:'10px' 
        },
        '& li a': {
            display: 'flex',
            color:'white',
            alignItems:'center',
            padding:'20px',
            textDecoration:'none'
        },
        '& li a:hover': {
            backgroundColor: 'cadetblue'
        }

    }
});


const SideMenu = () => {

    let classes = styles();
    return ( 
        <Paper className={classes.sideMenu} square > 
                <div>
                    <ul className={classes.link}> 
                        <li>
                            <Link  to="/"> <HomeIcon/><span>Add New Property</span></Link> 
                        </li>
                        <li><Link to="/view"> <ViewListIcon/> <span>View Properties</span></Link> </li>
                    </ul>
                </div>
            
        </Paper>

     );
}
 
export default SideMenu;