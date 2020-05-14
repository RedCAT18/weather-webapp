import React from 'react';
import styled from 'styled-components';

const Container = styled.form`
  width: 100%;
  margin-top: 10px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  border-bottom: 1px solid #7f7f7f;
  height: 40px;
  text-indent: 10px;
`;

const Form = (props) => {
  return (
    <Container onSubmit={props.handleSubmit}>
      <Input
        type="text"
        value={props.value}
        onChange={props.handleChange}
        placeholder="Input the name of city, or city,country. [i.e. Perth,AU])"
      />
    </Container>
  );
};
export default Form;
