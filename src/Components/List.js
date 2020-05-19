import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  :hover {
    background-color: #003049;
    background-blend-mode: multiply;
    color: #fff;
    -webkit-box-shadow: 0px 5px 10px 2px #003049;
    -moz-box-shadow: 0px 5px 10px 2px #003049;
    box-shadow: 0px 5px 10px 2px #003049;
  }
  :active {
    transform: scale(0.99);
  }
`;

const ContainerBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  background-image: url('${(props) => props.bgImage}');
  background-size: cover;
  background-position: center center;
  opacity: 0.6;
  border-radius: 5px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 10px;
  z-index: 1;
`;

const Subtitle = styled.h2``;

const Text = styled.p``;

const Icon = styled.div`
  background-image: url('${(props) => props.bgImage}');
  background-size: cover;
  width: 60px;
  height: 60px;
  margin: 10px;
  z-index: 1;
`;

const List = (props) => {
  // console.log(props);
  const { id, name, main, weather } = props;

  return (
    <Link to={`detail/${id}`}>
      <Container>
        <Content>
          <Title>{name}</Title>
          <Icon
            bgImage={require(`assets/${weather[0].main.toLowerCase()}.png`)}
          />
        </Content>
        <Content>
          <Title>{main.temp}℃</Title>
        </Content>
        <ContainerBackground
          bgImage={require(`assets/photos/${weather[0].main.toLowerCase()}.jpg`)}
        />
      </Container>
    </Link>
  );
};

export default List;
