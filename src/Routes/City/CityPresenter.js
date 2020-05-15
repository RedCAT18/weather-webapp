import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import cityTimezones from 'city-timezones';
import moment from 'moment-timezone';

import Form from 'Components/Form';
import Loading from 'Components/Loading';
import Panel from 'Components/Panel';
import Tophead from 'Components/Tophead';
import Box from 'Components/Box';
import Error from 'Components/Error';
import Card from 'Components/Card';

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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 100%;
  height: 80px;
  background-color: #120136;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  &:active {
    transform: scale(0.99);
  }
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
    weather,
    detail,
    error,
    loading,
    handleChange,
    handleSubmit,
    handleClick,
  } = props;
  const [pageError, setPageError] = useState('');

  useEffect(() => {
    if (error.length !== 0) setPageError(error);
  }, [error]);

  console.log(detail);

  const getTime = (time) => {
    let timezone = cityTimezones.lookupViaCity(weather.name);
    if (timezone.length === 0) {
      timezone = cityTimezones.findFromCityStateProvince(weather.name);
    }

    if (timezone.length === 0) {
      setPageError('Cannot find the city. Please input other name.');
      return null;
    }

    let tzName =
      timezone.length === 1
        ? timezone[0].timezone
        : timezone.filter(
            (zone) =>
              zone.city.includes(weather.name) &&
              zone.iso2 === weather.sys.country
          )[0].timezone;
    let givenTime = new Date(time * 1000);
    let localtime = moment(givenTime).tz(tzName).format();
    return localtime.substr(11, 8);
  };

  const getRainfall = (weather) => {
    const rainfall = weather.rain || weather.snow || null;
    return rainfall ? rainfall[Object.keys(rainfall)[0]] : null;
  };

  const renderContainer = () =>
    pageError.length !== 0 ? (
      <Error error={pageError} />
    ) : weather ? (
      <Container>
        <Tophead
          title={`Current Weather of ${weather.name}, ${weather.sys.country}`}
          text={`Updated at: ${getTime(weather.dt)} (Local time)`}
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
            sunrise={getTime(weather.sys.sunrise)}
            sunset={getTime(weather.sys.sunset)}
          />
        </Content>

        {detail ? (
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
        ) : (
          <Button onClick={handleClick}>7 day forecast</Button>
        )}
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
