import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { getLocalTime } from 'api/helper';
import Tophead from 'Components/Tophead';
import Loading from 'Components/Loading';
import Panel from 'Components/Panel';
import Button from 'Components/Button';
import Card from 'Components/Card';
import Error from 'Components/Error';

const Container = styled.div`
  width: 80vw;
  max-width: 1024px;
  min-height: 100vh;
  background-color: #fff;
  margin: auto;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  .fade-enter {
    transform: translateY(-100%);
  }
  .fade-enter-active {
    transform: translateY(0);
    transition: transform 0.5s;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const DetailContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const DetailContent = styled.div`
  width: 100%;
  display: grid;
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

const LinkText = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 20px;
  padding: 5px;
  color: #000;
  text-align: center;
  cursor: pointer;
`;

const ForecastHidden = styled.div`
  overflow: hidden;
`;

const DetailPresenter = (props) => {
  console.log(props);
  const { weather, forecast, error, loading, goBack, handleClick } = props;
  const [openForecast, setOpenForecast] = useState(false);

  useEffect(() => {
    if (forecast) setOpenForecast(true);
  }, [forecast]);

  const getTime = (time) => {
    return new Date(time * 1000).toString().substr(16, 8);
  };

  const getRainfall = (weather) => {
    const rainfall = weather.rain || weather.snow || null;
    return rainfall ? rainfall[Object.keys(rainfall)[0]] : null;
  };

  const renderContainer = () =>
    error ? (
      <Error error={error} />
    ) : weather ? (
      <Container>
        <Tophead
          title={`The Weather of ${weather.name}`}
          text={`Updated at: ${getTime(
            weather.dt
          )} (Your time) / ${getLocalTime(
            weather.dt,
            weather.timezone
          )} (Local time)`}
        />
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
            rainfall={getRainfall(weather)}
            windSpeed={weather.wind.speed}
            windDeg={weather.wind.deg}
            visibility={weather.visibility}
          />
        </Content>
        <ForecastHidden>
          {forecast ? (
            <CSSTransition
              in={openForecast}
              classNames="fade"
              timeout={500}
              mountOnEnter
            >
              <DetailContainer>
                <Title>Forecast 7 days</Title>
                <DetailContent>
                  {forecast.map((day, idx) => {
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
                </DetailContent>
              </DetailContainer>
            </CSSTransition>
          ) : (
            <Button handleClick={handleClick} title={'7 day forecast'} />
          )}
        </ForecastHidden>
        <LinkText onClick={() => goBack()}>◀ Previous Page</LinkText>
      </Container>
    ) : null;

  return loading ? <Loading /> : renderContainer();
};

export default DetailPresenter;
