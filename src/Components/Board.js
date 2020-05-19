import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #120136;
  border-radius: 5px;
  padding: 5px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  margin: 5px;
  color: #fff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Box = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Icon = styled.div`
  background-image: url('${(props) => props.bgImage}');
  background-size: cover;
  width: 60px;
  height: 60px;
  margin: 10px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin-bottom: 10px;
`;

const Board = ({ weather }) => {
  // console.log(weather);

  const getRainfall = (weather) => {
    const rainfall = weather.rain || weather.snow || null;
    return rainfall ? rainfall[Object.keys(rainfall)[0]] : null;
  };

  return (
    <Container>
      <Content>
        <Box>
          <Icon
            bgImage={require(`assets/${weather.weather[0].main.toLowerCase()}.png`)}
          />
        </Box>
        <Box>
          <Title>{weather.temp}℃</Title>
          <Text>Feels like: {weather.feels_like}℃</Text>
          <Text>
            {weather.weather[0].main}{' '}
            {getRainfall(weather) ? `(${getRainfall(weather)}mm/s)` : null}
          </Text>
        </Box>
      </Content>
    </Container>
  );
};

export default Board;

// icon={require(`assets/${weather.current.weather[0].main.toLowerCase()}.png`)}
//           status={weather.current.weather[0].main}
//           description={weather.current.weather[0].description}
//           cloud={weather.current.clouds}
//           temp={weather.current.temp}
//           feelsLike={weather.current.feels_like}
//           pressure={weather.current.pressure}
//           humidity={weather.current.humidity}
//           rainfall={getRainfall(weather.current)}
//           windSpeed={weather.current.wind_speed}
//           windDeg={weather.current.wind_deg}
//           visibility={weather.current.visibility}
