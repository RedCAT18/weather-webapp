import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Content = styled.div``;

const Text = styled.p``;

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
