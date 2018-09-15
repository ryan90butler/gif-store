import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './views/Login/Login';
import Cart from './views/Cart/Cart';
import Detail from './views/Detail/Detail';
import Dashboard from './views/Dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route path={`/Dashboard`} component={Dashboard}/>
          <Route path={`/Cart`} component={Cart}/>
          <Route path={`/Detail`} component={Detail}/>
          <Route path={`/`} component={Dashboard}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
