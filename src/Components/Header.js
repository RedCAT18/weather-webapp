import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.4);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #f4f4f4;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 10px 20px;
`;

const Navigation = styled.nav`
  align-self: flex-end;
  width: 40%;
  margin-bottom: 10px;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    li {
      margin-right: 10px;
    }
  }
`;

export default withRouter(({ location: { pathname } }) => (
  <Container>
    <Title>Weather</Title>
    <Navigation>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/current">Current</Link>
        </li>
        <li>
          <Link to="/city">City</Link>
        </li>
        <li>
          <Link to="/world">World</Link>
        </li>
      </ul>
    </Navigation>
  </Container>
));
