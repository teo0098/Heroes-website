import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Heroes from './Heroes/Heroes';

const App = () => {
  return (
    <Router>
       <header>
        <Navigation/>
      </header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/heroes" component={Heroes}/>
        <Route path="/login" render={() => <h1>Log in panel</h1>} />
      </Switch>
    </Router>
  );
};

export default App;