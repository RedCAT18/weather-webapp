import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import cityTimezones from 'city-timezones';
import moment from 'moment-timezone';

import Form from 'Components/Form';
import Loading from 'Components/Loading';
import Panel from 'Components/Panel';
import Tophead from 'Components/Tophead';
import Box from 'Components/Box';

const Container = styled.div`
  width: 80vw;
  max-width: 1024px;
  margin: auto;
  min-height: 100vh;
  padding: 30px;
  background-color: #fff;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
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
`;

const CityPresenter = (props) => {
  const { city, weather, error, loading, handleChange, handleSubmit } = props;
  const [pageError, setPageError] = useState('');

  useEffect(() => {
    if (error.length !== 0) setPageError(error);
  }, [error]);

  console.log(weather);

  const getTime = (time) => {
    let timezone = cityTimezones.lookupViaCity(weather.name);
    if (timezone.length === 0) {
      timezone = cityTimezones.findFromCityStateProvince(weather.name);
    }
    console.log(timezone);
    let tzName =
      timezone.length === 1
        ? timezone[0].timezone
        : timezone.filter(
            (zone) =>
              zone.city.includes(weather.name) &&
              zone.iso2 === weather.sys.country
          )[0].timezone;
    console.log(tzName);
    let givenTime = new Date(time * 1000);
    console.log(givenTime);
    let localtime = moment(givenTime).tz(tzName).format();
    console.log(localtime);
    return localtime.substr(11, 8);
  };

  const getRainfall = (weather) => {
    const rainfall = weather.rain || weather.snow || null;
    return rainfall ? rainfall[Object.keys(rainfall)[0]] : null;
  };

  const renderContainer = () =>
    weather ? (
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

// 1589401422  Thu May 14 2020 08:23:42 GMT+1200 (뉴질랜드 표준시) - 8
// 32400
