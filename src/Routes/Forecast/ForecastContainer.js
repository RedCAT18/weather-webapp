import React, { useState, useEffect } from 'react';
import { weatherApi } from 'api';
import ForecastPresenter from './ForecastPresenter';

const ForecastContainer = (props) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await weatherApi.getForecast(id);
      setWeather(data);
    };

    if (!weather) {
      try {
        fetchData();
      } catch {
        setError(
          'Sorry, there is any problem to fetch the weather of your current location'
        );
      } finally {
        setLoading(false);
      }
    }
  }, [id, weather]);
  return (
    <ForecastPresenter weather={weather} error={error} loading={loading} />
  );
};

export default ForecastContainer;
