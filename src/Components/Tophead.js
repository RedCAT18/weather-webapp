import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin-bottom: 5px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-bottom: 10px;
  text-align: center;
`;

const Text = styled.h3`
  font-size: 16px;
  font-weight: 400;
  text-align: right;
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
