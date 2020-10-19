import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Plan from './components/pages/Plan';
import History from './components/pages/History';
import Account from './components/pages/Account';
import LogIn from './components/pages/Log-in';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/plan' component={Plan} />
          <Route path='/history' component={History} />
          <Route path='/account' component={Account} />
          <Route path='/log-in' component={LogIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;