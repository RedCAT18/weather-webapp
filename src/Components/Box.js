import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;

  align-items: center;
  justify-content: space-around;
  padding: 15px;
  margin-top: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  flex:1;
  width: 100%;
  background-image: url('${(props) => props.bgImage}');
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
    font-weight: 500;
  }
`;

const Icon = styled.span`
  width: 100px;
  height: 100px;
  background-image: url('${(props) => props.bgImage}');
  margin-bottom: 20px;
  opacity: 0.75s;
  z-index: 1;
`;

const Text = styled.p`
  font-size: 20px;
  color: #23233b;
  margin-bottom: 5px;
`;

const Box = (props) => (
  <Container>
    <Content>
      <Icon bgImage={require(`assets/sunrise.svg`)} />
      <Text>{props.sunrise}</Text>
    </Content>
    <Content>
      <Icon bgImage={require(`assets/sunset.svg`)} />
      <Text>{props.sunset}</Text>
    </Content>
  </Container>
);

export default Box;
