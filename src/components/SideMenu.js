import React from 'react';
import { makeStyles, Paper } from "@material-ui/core";
import {NavLink} from 'react-router-dom';
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
            backgroundColor: '#477678'
        },
        '.selected': {
            background:'cadetblue'
        }

    },
    linkActive: {
        background:'cadetblue'
    }
});


const SideMenu = () => {

    let classes = styles();
    return ( 
        <Paper className={classes.sideMenu} square > 
                <div>
                    <ul className={classes.link}> 
                        <li>
                            <NavLink exact activeClassName={classes.linkActive} to="/"> 
                                <HomeIcon/>
                                <span>Add New Property</span>
                            </NavLink> 
                        </li>
                        <li>
                            <NavLink exact activeClassName={classes.linkActive} to="/view">
                                <ViewListIcon/>
                                <span>View Properties</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            
        </Paper>

     );
}
 
export default SideMenu;