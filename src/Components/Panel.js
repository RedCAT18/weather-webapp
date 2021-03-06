import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  color: #333533;
  padding: 15px;
  border-radius: 5px;
  justify-content: space-between;
  align-items: flex-end;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.3);
`;

const Icon = styled.span`
  width: 150px;
  height: 150px;
  background-image: url('${(props) => props.bgImage}');
  background-size: cover;
  margin-bottom: 20px;
`;

const Textbox = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  div {
    flex: 1;
  }
  div:last-child {
    text-align: right;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 20px;
    div,
    div:last-child {
      text-align: center;
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

const Maintext = styled.p`
  font-size: 32px;
  font-weight: 700;
  z-index: 1;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

const Subtext = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
  z-index: 1;
`;

const Panel = (props) => (
  <Container>
    <Textbox>
      <Icon bgImage={props.icon}></Icon>
      <div>
        <Title>{props.temp}℃</Title>
        <Maintext>Status: {props.status}</Maintext>
        <Subtext>
          {props.description}{' '}
          {props.rainfall ? `(${props.rainfall}mm/s)` : null}
        </Subtext>
      </div>
    </Textbox>
    <Textbox>
      <div>
        <Subtext>Feels like: {props.feelsLike}℃</Subtext>
        <Subtext>Clouds: {props.cloud}%</Subtext>
        <Subtext>
          Visibility:{' '}
          {props.visibility
            ? `${parseInt(props.visibility) / 1000}㎞`
            : 'Unknown'}
        </Subtext>
      </div>
      <div>
        <Subtext>Pressure: {props.pressure}hPa</Subtext>
        <Subtext>Humidity: {props.humidity}%</Subtext>
        <Subtext>
          Wind speed : {props.windSpeed}㎧ / degree: {props.windDeg}˚
        </Subtext>
      </div>
    </Textbox>
  </Container>
);

export default Panel;
