import React from 'react';
import styled from 'styled-components';

const WorldPresenter = (props) => {
  const { weather, error, loading } = props;
  console.log(weather);
  return <h1>World</h1>;
};

export default WorldPresenter;
