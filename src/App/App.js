import './App.css';
import SideMenu from '../components/SideMenu';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddProperty from '../pages/AddProperty';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewProperties from '../pages/ViewProperties';


const styles = makeStyles ({
  appMain : {
    paddingLeft: '300px',
    width: '100%'
  }
})


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#132853',
      light: '#3c44b126'
    },
    // secondary: {
    //   main: '#fff',
    //   light: '#f8324526'
    // },
    // background: {
    //   default: '#fff'
    // }
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
      <Header/>
      <Router>
      <SideMenu/>
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
