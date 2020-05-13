import React from 'react';
import styled from 'styled-components';

import Loading from 'Components/Loading';
import Board from 'Components/Board';
import Tophead from 'Components/Tophead';
import Card from 'Components/Card';
import Chart from 'Components/Chart';

const Container = styled.div`
  width: 80%;
  margin: auto;
  max-width: 1024px;
  padding: 30px;
`;

const Content = styled.div`
  width: 100%;
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const DaysPresenter = (props) => {
  const { weather, loading, error } = props;
  // console.log(props);

  const getTime = (time) => {
    return new Date(time * 1000).toString().substr(16, 8);
  };

  const renderContainer = () =>
    weather ? (
      <Container>
        <Tophead
          title={`The Current Weather and Forecast of 7 Days`}
          subtitle={`(${weather.timezone})`}
          text={`Updated at ${getTime(weather.current.dt)}`}
        />
        <Title>Current Conditions</Title>
        <Board weather={weather.current} />
        <Title>Next 48 Hours Temperature</Title>
        <Chart weather={weather.hourly} time={getTime(weather.current.dt)} />

        <Title>Forecast 7 days</Title>
        <Content>
          {weather.daily.map((day, idx) => {
            const now = new Date();
            let newDay = now.getDate() + parseInt(idx);
            now.setDate(newDay);
            let date = {
              month: now.getMonth() + 1,
              day: now.getDate(),
              daycord: (now.getDay() + idx) % 7,
            };
            return <Card weather={day} date={date} key={idx} />;
          })}
        </Content>
      </Container>
    ) : null;

  return loading ? <Loading /> : renderContainer();
};

export default DaysPresenter;
