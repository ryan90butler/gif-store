import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route path={`/dashboard`} component={Dashboard}/>
          <Route path={`/`} component={Dashboard}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
