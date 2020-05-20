import React from 'react';
import styled from 'styled-components';

import Tophead from 'Components/Tophead';
import Loading from 'Components/Loading';
import List from 'Components/List';
import Error from 'Components/Error';

const Container = styled.div`
  width: 80vw;
  max-width: 1024px;
  margin: auto;
  min-height: 100vh;
  padding: 30px;
`;

const Content = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const WorldPresenter = (props) => {
  const { weather, error, loading } = props;

  const renderContainer = () =>
    error ? (
      <Error error={error} />
    ) : weather ? (
      <Container>
        <Tophead title={'World Weather'} />
        <Content>
          {weather?.list?.map((li) => (
            <List key={li.id} {...li} />
          ))}
        </Content>
      </Container>
    ) : null;
  return loading ? <Loading /> : renderContainer();
};

export default WorldPresenter;
