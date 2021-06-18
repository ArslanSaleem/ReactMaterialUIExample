import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';


const styles = makeStyles({
    root: {
        background: 'primary'
    }, 
    searchBar: {
        opacity:'0.8',
        borderRadius: '25px',
        width: '400px',
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
    }
});

const Header = () => {

    const classes = styles();
    return ( 
        <AppBar position="sticky" className={classes.root}>
            <Toolbar >
                <Grid container style={ {alignItems:'center', justify:'center', boxSizing: 'content-box' }}>
                    <Grid item className= {classes.logo} > 
                        <img src="logo.png" alt="logo" />
                    </Grid>
                    <Grid item >
                        <InputBase 
                        placeholder="Search"
                        className={classes.searchBar}
                        startAdornment={<SearchIcon className={classes.searchBarIcon} />}></InputBase>
                    </Grid>
                    <Grid item sm={true}></Grid>
                    <Grid item className={classes.sideIconButtons}>
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