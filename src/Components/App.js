import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Heroes from './Heroes/Heroes';

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/heroes" component={Heroes}/>
        <Route path="/login" render={() => <h1>Log in panel</h1>} />
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
};

export default App;