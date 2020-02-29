import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Heroes from './Heroes/Heroes';
import HeroInfo from './HeroInfo/HeroInfo';
import LoginPanel from './Sign/LoginPanel/LoginPanel';
import SignupPanel from './Sign/SignupPanel/SignupPanel';
import MyCrew from './MyCrew/MyCrew';

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/heroes" component={Heroes}/>
        <Route path="/login" component={LoginPanel}/>
        <Route path="/signup" component={SignupPanel}/>
        <Route exact path="/heroes/:limit" component={Heroes}/>
        <Route path="/heroes/hero/:callname" component={HeroInfo}/>
        <Route path="/my-crew" component={MyCrew}/>
      </Switch>
    </Router>
  );
};

export default App;