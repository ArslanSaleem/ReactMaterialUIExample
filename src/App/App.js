import './App.css';
import Menu from '../components/Menu';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddProperty from '../pages/AddProperty';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewProperties from '../pages/ViewProperties';


const styles = makeStyles ((theme)=> ({
  appMain : {
    paddingLeft: '250px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0px'
    }
  }
}))


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#132853',
      light: '#3c44b126'
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform:'translateZ(0)'
      }
    }
  }

});

function App() {
  let classes = styles();
  return (
    <ThemeProvider theme={theme}>
      
      <Router>
      <Menu/>
      
        <div className={classes.appMain}>
          
              <Switch>
                <Route path="/" exact component={AddProperty} />
                <Route path="/view" exact component={ViewProperties} />

              </Switch>
              </div>
      </Router>
        
      
    <CssBaseline />
    

    </ThemeProvider>
    
  );
}

export default App;
