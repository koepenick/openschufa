import React, {Component} from 'react';
import LandingPage from './LandingPage/LandingPageContainer';
import Stepper from './StepperPage/StepperPageContainer';
import Modal from "./Modal/ModalContainer";
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffea4c',
      main: '#f0b800',
      dark: '#b98900',
      contrastText: '#000',
    },
    secondary: {
      light: '#4573ac',
      main: '#00487c',
      dark: '#00214f',
      contrastText: '#fff',
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/steps" component={Stepper}/>
          </Switch>
        </Router>
        <Modal/>
      </MuiThemeProvider>
    );
  }
}

export default App;