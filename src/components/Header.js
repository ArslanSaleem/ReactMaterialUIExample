import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar, useMediaQuery, useTheme } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';


const styles = makeStyles((theme)=> ({
    root: {
        background: 'primary'
    }, 
    searchBar: {
        opacity:'0.8',
        borderRadius: '25px',
        width: '100%',
        '&:hover': {
            backgroundColor: '#d3d3d3'
        },
        backgroundColor: 'white'
    },
    searchBarIcon: {
        color: 'primary'
    },
    sideIconButtons: {
        '& .MuiSvgIcon-root ': {
            color: 'white'
        }
    },
    logo: {
        width: '300px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      }
}));

const Header = (props) => {

    const {onToggleSideMenu} = props;
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("xs"));

    const classes = styles();
    return ( 
        <AppBar position="sticky" className={classes.root}>
            
            <Toolbar >
                <Grid container xs={12} style={ {alignItems:'center', justify:'center' }}>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={onToggleSideMenu}
                    className={classes.menuButton}
                >
                <MenuIcon />
                </IconButton>
                    <Grid item sm={2} className= {classes.logo} > 
                        <img src="logo.png" alt="logo" />
                    </Grid>
                    {
                        !isMatch && (
                            <>
                            <Grid item sm={4} >
                                <InputBase 
                                placeholder="Search"
                                className={classes.searchBar}
                                startAdornment={<SearchIcon className={classes.searchBarIcon} />}></InputBase>
                            </Grid>
                            <Grid item sm/>
                            </>
                        )
                    }
                    
                    <Grid item sm={1.5} className={classes.sideIconButtons}>
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon></NotificationsNoneIcon>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={6} color='primary'>
                                <ChatBubbleIcon></ChatBubbleIcon>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon/>
                        </IconButton>
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
     );
}
 
export default Header;