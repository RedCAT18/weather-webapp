import React, { useState, useEffect } from 'react';
import WorldPresenter from './WorldPresenter';
import { weatherApi } from 'api';
import { useWeatherState, useDispatch } from 'Context/WeatherContext';
import { GET_WORLD_WEATHER } from 'reducer/actions';
import { cities } from 'cities';

const WorldContainer = () => {
  const state = useWeatherState();
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(state.worldWeather);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const getCityIds = () => {
    let ids = cities.map((city) => city.id);
    return ids.join(',');
  };

  useEffect(() => {
    // console.log(weather);
    if (!weather) {
      const fetchData = async () => {
        const { data } = await weatherApi.getWorldWeathers(getCityIds());
        setWeather(data);
        dispatch({ type: GET_WORLD_WEATHER, payload: data });
      };

      try {
        fetchData();
      } catch {
        setError(
          'Sorry, there is any problem to fetch the weather of the world.'
        );
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [dispatch, weather]);

  return <WorldPresenter weather={weather} loading={loading} error={error} />;
};

export default WorldContainer;
