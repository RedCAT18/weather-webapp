import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h2`
  color: #9a1f40;
  font-weight: 700;
  font-size: 24px;
`;

const Error = (props) => {
  const { error } = props;
  return (
    <Container>
      <Content>
        <Text>{error}</Text>
      </Content>
    </Container>
  );
};

export default Error;
