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
import Detail from 'Routes/Detail/';
import Header from 'Components/Header';

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route key={'home'} path="/" exact component={Home} />
      <Route key={'city'} path="/city" exact component={City} />
      <Route key={'days'} path="/days" exact component={Days} />
      <Route key={'world'} path="/world" exact component={World} />
      <Route key={'detail'} path="/detail/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
