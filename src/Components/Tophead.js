import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin-bottom: 5px;
  @media screen and (max-width: 600px) {
    text-align: center;
    font-size: 24px;
  }
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-bottom: 10px;
`;

const Text = styled.h3`
  font-size: 16px;
  font-weight: 400;

  color: #000;
`;

const Tophead = (props) => (
  <Container>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
    <Text>{props.text}</Text>
  </Container>
);

export default Tophead;
