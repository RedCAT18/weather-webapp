import React, { useState } from 'react';
import CityPresenter from './CityPresenter';
import { weatherApi } from 'api';

const CityContainer = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length !== 0) {
      getWeather(city);
    }
  };

  const getWeather = async () => {
    setLoading(true);
    try {
      const data = await weatherApi.getWeatherByCity(city);

      setWeather(data);
      setCity('');
    } catch {
      setError(
        'Sorry, there is any problem to fetch the weather of your current location'
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <CityPresenter
      city={city}
      weather={weather}
      error={error}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default CityContainer;
