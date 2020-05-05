import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from 'Routes/Home/';
import City from 'Routes/City/';
import Current from 'Routes/Current/';
import World from 'Routes/World/';
import Header from 'Components/Header';

export default () => (
  <Router>
    <Header />

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/city" exact component={City} />
      <Route path="/current" exact component={Current} />
      <Route path="/world" exact component={World} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
