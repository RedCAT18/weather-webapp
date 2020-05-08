import React from 'react';
import styled from 'styled-components';

import Loading from 'Components/Loading';

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  background-color: #fff;
  margin: auto;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  padding: 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const WeatherPanel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
  background-color: #e74c3c;
  min-height: 400px;
  border-radius: 5px;

  flex: 3;
  width: 50%;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 20px;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const WeatherBackground = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100;
  background-image: url('${(props) => props.bgImage}');
  background-size: cover;
  background-position: center center;
  opacity: 0.5;
`;

const SunPanel = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
  background-color: #e74c3c;
  min-height: 400px;
  border-radius: 5px;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #595959;
  margin-bottom: 20px;
  text-align: center;
`;

const WeatherIcon = styled.span`
  width: 100px;
  height: 100px;
  background-image: url('${(props) => props.bgImage}');
  background-size: cover;
  margin-bottom: 20px;
`;

const Maintext = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Subtext = styled.p`
  font-size: 1em;
  margin-bottom: 5px;
`;

const HomePresenter = (props) => {
  const { weather, error, loading } = props;
  console.log(weather);

  const getTime = (time) => {
    return new Date(time * 1000).toString().substr(16, 8);
  };

  const renderContainer = () =>
    weather ? (
      <Container>
        <Title>
          Current Weather of your location ({weather.name},{' '}
          {weather.sys.country})
        </Title>
        <Content>
          <WeatherPanel
            bgImage={require(`assets/${weather.weather[0].main.toLowerCase()}.png`)}
          >
            <WeatherIcon
              bgImage={require(`assets/${weather.weather[0].main.toLowerCase()}.png`)}
            ></WeatherIcon>
            <Maintext>Status: {weather.weather[0].main}</Maintext>
            <Subtext>Current temperature: {weather.main.temp}</Subtext>
            <Subtext>Feels like: {weather.main.feels_like}</Subtext>
            <Subtext>Pressure: {weather.main.pressure}</Subtext>
            <Subtext>Humidity: {weather.main.humidity}</Subtext>
            <Subtext>
              Wind speed : {weather.wind.speed} degree: {weather.wind.deg}
            </Subtext>
          </WeatherPanel>
          <WeatherBackground />

          <SunPanel>
            <Subtext>Sunrise: {getTime(weather.sys.sunrise)}</Subtext>
            <Subtext>Sunset: {getTime(weather.sys.sunset)}</Subtext>
          </SunPanel>
        </Content>
      </Container>
    ) : null;

  return loading ? <Loading /> : renderContainer();
};

export default HomePresenter;
