import React from 'react';
import styled from 'styled-components';

const DetailPresenter = (props) => {
  console.log(props);
  const { weather, error, loading } = props;
  return <h1>Detail</h1>;
};

export default DetailPresenter;
