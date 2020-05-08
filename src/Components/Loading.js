import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin-top: 250px;
`;

const Loading = () => (
  <Container>
    <Image src={require('assets/loading.svg')} alt="loading" />
  </Container>
);

export default Loading;
