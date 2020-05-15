import React from 'react';
import styled from 'styled-components';

import Tophead from 'Components/Tophead';
import Loading from 'Components/Loading';

const Container = styled.div``;

const Content = styled.div``;

const WorldPresenter = (props) => {
  const { weather, error, loading } = props;
  console.log(weather);

  const renderContainer = () => (
    <Container>
      <Tophead title={'World Weather'} />
      <Content></Content>
    </Container>
  );
  return loading ? <Loading /> : renderContainer();
};

export default WorldPresenter;
