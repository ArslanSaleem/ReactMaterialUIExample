import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Header from './Header';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink} from 'react-router-dom';
import ViewListIcon from '@material-ui/icons/ViewList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    display : 'flex',
    flexDirection: 'column',
    flexFlow: 'column',
    position: 'fixed',
    width: '250px',
    height: '100%',
    left: 0,
    backgroundColor: '#132853'
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: '65px',
    display : 'flex',
    flexDirection: 'column',
    flexFlow: 'column',
    position: 'fixed',
    width: '250px',
    height: '100%',
    left: 0,
    backgroundColor: '#132853'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
}));

function Menu(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
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
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header onToggleSideMenu={handleDrawerToggle}/>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

Menu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Menu;
