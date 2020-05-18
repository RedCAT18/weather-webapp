import React, { useState, useEffect } from 'react';
import { weatherApi } from 'api';
import DetailPresenter from './DetailPresenter';

const DetailContainer = (props) => {
  console.log(props);
  const {
    match: {
      params: { id },
    },
    history: { push, goBack },
  } = props;
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isNaN(id)) {
      return push('/');
    }
    const fetchData = async (id) => {
      console.log(id);
      const { data } = await weatherApi.getWeatherById(id);
      setWeather(data);
    };

    if (!weather) {
      try {
        fetchData();
      } catch {
        setError('Sorry, there is any problem to fetch the weather.');
      } finally {
        setLoading(false);
      }
    }
  }, [id, push, weather]);
  return <DetailPresenter weather={weather} error={error} loading={loading} />;
};

export default DetailContainer;
