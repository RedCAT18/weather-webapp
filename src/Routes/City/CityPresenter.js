import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getLocalTime } from 'api/helper';
import { CSSTransition } from 'react-transition-group';

import Form from 'Components/Form';
import Loading from 'Components/Loading';
import Panel from 'Components/Panel';
import Tophead from 'Components/Tophead';
import Box from 'Components/Box';
import Error from 'Components/Error';
import Card from 'Components/Card';
import Button from 'Components/Button';

const Container = styled.div`
  width: 80vw;
  max-width: 1024px;
  margin: auto;
  min-height: 100vh;
  padding: 30px;

  .fade-enter {
    transform: translateY(-100%);
  }
  .fade-enter-active {
    transform: translateY(0);
    transition: transform 0.5s;
  }
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const DetailHidden = styled.div`
  overflow: hidden;
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

const CityPresenter = (props) => {
  const {
    city,
    filteredCities,
    weather,
    detail,
    error,
    loading,
    handleChange,
    handleSubmit,
    handleClick,
  } = props;
  const [pageError, setPageError] = useState('');
  const [detailOpen, setDetailOpen] = useState(false);
  // console.log(weather);

  useEffect(() => {
    if (error.length !== 0) setPageError(error);
    if (detail) setDetailOpen(true);
  }, [error, detail]);

  const getRainfall = (weather) => {
    const rainfall = weather.rain || weather.snow || null;
    return rainfall ? rainfall[Object.keys(rainfall)[0]] : null;
  };

  const getTime = (time) => {
    return new Date(time * 1000).toString().substr(16, 8);
  };

  const renderContainer = () =>
    pageError.length !== 0 ? (
      <Error error={pageError} />
    ) : weather ? (
      <Container>
        <Tophead
          title={`Current Weather of ${weather.name}, ${weather.sys.country}`}
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
          <Box
            sunrise={getLocalTime(weather.sys.sunrise, weather.timezone)}
            sunset={getLocalTime(weather.sys.sunset, weather.timezone)}
          />
        </Content>

        <DetailHidden>
          {detail ? (
            <CSSTransition
              in={detailOpen}
              classNames="fade"
              timeout={500}
              mountOnEnter
            >
              <DetailContainer>
                <Title>Forecast 7 days</Title>
                <DetailContent>
                  {detail.map((day, idx) => {
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
        </DetailHidden>
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
