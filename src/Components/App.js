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
        <Route exact path="/" component={Home}/>
        <Route exact path="/heroes" component={Heroes}/>
        <Route path="/login" render={() => <h1>Log in panel</h1>} />
        <Route path="/heroes/:limit" component={Heroes}/>
      </Switch>
    </Router>
  );
};

export default App;