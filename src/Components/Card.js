import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  margin: 5px;
`;

const Content = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Icon = styled.div`
  background-image: url('${(props) => props.bgImage}');
  background-size: cover;
  width: 50px;
  height: 50px;
  margin: 15px;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

const Card = ({ weather, date }) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const { day, month, daycord } = date;
  const {
    temp: { max, min },
  } = weather;
  const { main } = weather.weather[0];

  return (
    <Container>
      <Content>
        <Title>
          {day}/{month}
        </Title>
        <Title>{days[daycord]}</Title>
        <Icon bgImage={require(`assets/${main.toLowerCase()}.png`)} />
        <Text>Max: {Math.round(max)}℃</Text>
        <Text>Min: {Math.round(min)}℃</Text>
      </Content>
    </Container>
  );
};

export default Card;
