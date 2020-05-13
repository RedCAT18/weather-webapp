import React from 'react';
import styled from 'styled-components';
import Form from 'Components/Form';
import Loading from 'Components/Loading';

const Container = styled.div`
  width: 80vw;
  max-width: 1024px;
  margin: auto;
  min-height: 100vh;
  padding: 30px;
`;

const Blank = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #dddddd;
    font-weight: 700;
    font-size: 42px;
  }
`;

const Content = styled.div``;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

const CityPresenter = (props) => {
  const { city, weather, error, loading, handleChange, handleSubmit } = props;
  console.log(props);

  const renderContainer = () =>
    weather ? (
      <Container>
        <Title>Weather of {weather.name}</Title>
      </Container>
    ) : (
      <Container>
        <Blank>
          <h1>No data yet. :\</h1>
        </Blank>
      </Container>
    );

  return loading ? (
    <Loading />
  ) : (
    <>
      <Form
        value={city}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {renderContainer()}
    </>
  );
};

export default CityPresenter;
