import React from 'react';

const CurrentPresenter = (props) => {
  const { weather, loading, error } = props;
  console.log(weather);
  return <h1>Current</h1>;
};

export default CurrentPresenter;
