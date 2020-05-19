import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import Home from 'Routes/Home/';
import City from 'Routes/City/';
import Days from 'Routes/Days/';
import World from 'Routes/World/';
import Detail from 'Routes/Detail/';
import Header from 'Components/Header';

const Wrapper = styled.div`
  .slide-enter {
    transform: translateX(-100%);
  }
  .slide-enter-active {
    transform: none;
    transition: transform 500ms ease-in;
  }
  .slide-exit {
    transform: none;
  }
  .slide-exit-active {
    transform: translateX(100%);
    transition: transform 500ms ease-in;
  }
`;

const Routes = withRouter(({ location }) => {
  // console.log(location);
  return (
    <Wrapper>
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames="slide"
          timeout={500}
          appear
          unmountOnExit
        >
          <Switch location={location}>
            <Route key={'home'} path="/" exact component={Home} />
            <Route key={'city'} path="/city" exact component={City} />
            <Route key={'days'} path="/days" exact component={Days} />
            <Route key={'world'} path="/world" exact component={World} />
            <Route key={'detail'} path="/detail/:id" component={Detail} />
            <Redirect from="*" to="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
});

export default () => (
  <Router>
    <Header />
    <Routes />
  </Router>
);
