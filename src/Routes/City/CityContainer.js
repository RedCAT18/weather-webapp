import React, { useState } from 'react';
import CityPresenter from './CityPresenter';
import { weatherApi } from 'api';

const CityContainer = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length !== 0) {
      getWeather(city);
      setDetail(null);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    getDetailWeather(weather.coord);
  };

  const getDetailWeather = async (coord) => {
    try {
      const {
        data: { daily },
      } = await weatherApi.getDetailWeather(coord.lat, coord.lon);
      console.log(daily);
      setDetail(daily);
    } catch {
      setError(
        'Sorry, there is any problem to fetch the detail weather of the city.'
      );
    }
  };

  const getWeather = async () => {
    setLoading(true);
    try {
      const { data } = await weatherApi.getWeatherByCity(city);
      setWeather(data);
    } catch {
      setError('Sorry, there is any problem to fetch the weather of the city');
    } finally {
      setLoading(false);
      setCity('');
    }
  };
  return (
    <CityPresenter
      weather={weather}
      detail={detail}
      error={error}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
    />
  );
};

export default CityContainer;
