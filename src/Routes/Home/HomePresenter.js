import React from 'react';
import styled from 'styled-components';

import Loading from 'Components/Loading';
import Panel from 'Components/Panel';
import Box from 'Components/Box';

const Container = styled.div`
  position: relative;
  width: 80vw;
  max-width: 1024px;
  height: 100vh;
  background-color: #fff;
  margin: auto;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
  z-index: -1;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContainerBackground = styled.div`
  position: absolute;
  top:0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url('${(props) => props.bgImage}');
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 40px;
  text-align: right;
  color: #000;
`;

const HomePresenter = (props) => {
  const { weather, error, loading } = props;
  console.log(weather);

  const getTime = (time) => {
    return new Date(time * 1000).toString().substr(16, 8);
  };

  const renderContainer = () =>
    weather ? (
      <Container
        bgImage={require(`assets/photos/${weather.weather[0].main.toLowerCase()}.jpg`)}
      >
        <Title>
          Current Weather of your location ({weather.name},{' '}
          {weather.sys.country})
        </Title>
        <SubTitle>Update time {getTime(weather.dt)}</SubTitle>
        <Content>
          <Panel
            icon={require(`assets/${weather.weather[0].main.toLowerCase()}.png`)}
            status={weather.weather[0].main}
            description={weather.weather[0].description}
            cloud={weather.clouds.all}
            temp={weather.main.temp}
            feelsLike={weather.main.feels_like}
            pressure={weather.main.pressure}
            humidity={weather.main.humidity}
            windSpeed={weather.wind.speed}
            windDeg={weather.wind.deg}
            visibility={weather.visibility}
          />
          <Box
            sunrise={getTime(weather.sys.sunrise)}
            sunset={getTime(weather.sys.sunset)}
          />
        </Content>
        <ContainerBackground
          bgImage={require(`assets/photos/${weather.weather[0].main.toLowerCase()}.jpg`)}
        />
      </Container>
    ) : null;

  return loading ? <Loading /> : renderContainer();
};

export default HomePresenter;
