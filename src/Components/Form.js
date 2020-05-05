import React from 'react';
import styled from 'styled-components';

const Container = styled.form`
  width: 100%;
  margin-top: 10px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  border-bottom: 1px solid black;
`;

const Form = (props) => {
  return (
    <Container>
      <Input type="text" placeholder="Input the name of city..." />
    </Container>
  );
};
export default Form;
