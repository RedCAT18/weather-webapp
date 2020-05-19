import React, { useState, useEffect } from 'react';
import { weatherApi } from 'api';
import DetailPresenter from './DetailPresenter';

const DetailContainer = (props) => {
  const {
    match: {
      params: { id },
    },
    history: { push, goBack },
  } = props;
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState(null);

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
      setForecast(daily);
    } catch {
      setError(
        'Sorry, there is any problem to fetch the detail weather of the city.'
      );
    }
  };

  useEffect(() => {
    if (isNaN(id)) {
      return push('/');
    }
    const fetchData = async (id) => {
      const { data } = await weatherApi.getWeatherById(id);
      setWeather(data);
    };

    if (!weather) {
      try {
        fetchData(id);
      } catch {
        setError('Sorry, there is any problem to fetch the weather.');
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, weather]);

  return (
    <DetailPresenter
      weather={weather}
      error={error}
      loading={loading}
      goBack={goBack}
      handleClick={handleClick}
      forecast={forecast}
    />
  );
};

export default DetailContainer;
