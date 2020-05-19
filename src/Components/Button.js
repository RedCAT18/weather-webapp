import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 100%;
  height: 80px;
  background-color: #120136;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  &:active {
    transform: scale(0.99);
  }
`;

const Button = ({ handleClick, title }) => (
  <ButtonStyle onClick={handleClick}>{title}</ButtonStyle>
);

export default Button;
