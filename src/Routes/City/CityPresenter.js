import React from 'react';
import styled from 'styled-components';
import Form from 'Components/Form';

const CityPresenter = (props) => {
  const { city, weather, error, loading, handleChange, handleSubmit } = props;
  console.log(weather);
  return (
    <>
      <Form
        value={city}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h1>City</h1>
      <p></p>
    </>
  );
};

export default CityPresenter;
