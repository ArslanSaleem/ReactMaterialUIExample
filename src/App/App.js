import './App.css';
import SideMenu from '../components/SideMenu';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddProperty from '../pages/AddProperty';



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
      <SideMenu/>
      <div className={classes.appMain}>
          <AddProperty/>
        
      </div>
    <CssBaseline />

    </ThemeProvider>
  );
}

export default App;
