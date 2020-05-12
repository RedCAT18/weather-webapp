import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from 'Routes/Home/';
import City from 'Routes/City/';
import Days from 'Routes/Days/';
import World from 'Routes/World/';
import Forecast from 'Routes/Forecast/';
import Header from 'Components/Header';

export default () => (
  <Router>
    <Header />

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/city" exact component={City} />
      <Route path="/days" exact component={Days} />
      <Route path="/world" exact component={World} />
      <Route path="/forecast/:id" component={Forecast} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
