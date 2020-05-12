import React from 'react';
import styled from 'styled-components';

import Loading from 'Components/Loading';
import Panel from 'Components/Panel';
import Tophead from 'Components/Tophead';
import Card from 'Components/Card';
import Chart from 'Components/Chart';

const Container = styled.div`
  width: 80%;
  margin: auto;
  max-width: 1024px;
`;

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
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

  const getRainfall = (weather) => {
    const rainfall = weather.rain || weather.snow || null;
    return rainfall ? rainfall[Object.keys(rainfall)[0]] : null;
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
        <Panel
          icon={require(`assets/${weather.current.weather[0].main.toLowerCase()}.png`)}
          status={weather.current.weather[0].main}
          description={weather.current.weather[0].description}
          cloud={weather.current.clouds}
          temp={weather.current.temp}
          feelsLike={weather.current.feels_like}
          pressure={weather.current.pressure}
          humidity={weather.current.humidity}
          rainfall={getRainfall(weather.current)}
          windSpeed={weather.current.wind_speed}
          windDeg={weather.current.wind_deg}
          visibility={weather.current.visibility}
        />
        <Title>48 Hours</Title>
        <Chart weather={weather.hourly} time={getTime(weather.current.dt)} />

        <Title>Forecast 7 days</Title>
        <Content>
          {weather.daily.map((day, idx) => {
            let time = new Date();
            let name = time.toString().substr(0, 3);
            let date = {
              month: time.getMonth() + 1,
              day: time.getDate() + idx,
              name,
            };
            return <Card weather={day} date={date} key={idx} />;
          })}
        </Content>
      </Container>
    ) : null;

  return loading ? <Loading /> : renderContainer();
};

export default DaysPresenter;
