import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { weatherApi } from 'api';
import { useWeatherState, useDispatch } from 'Context/WeatherContext';
import { GET_CURRENT_WEATHER, GET_CURRENT_LOCATION } from 'reducer/actions';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const [currentWeather, setCurrentWeather] = useState(
    useWeatherState.currentWeather
  );
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  function fetchLocation() {
    if (navigator.geolocation) {
      return new Promise((res, rej) =>
        navigator.geolocation.getCurrentPosition(res, rej)
      );
    } else {
      return new Promise((res) => res({}));
    }
  }

  useEffect(() => {
    try {
      if (!currentWeather) {
        fetchLocation()
          .then(async (position) => {
            if (position.coords) {
              if (!useWeatherState.currentLocation) {
                dispatch({
                  type: GET_CURRENT_LOCATION,
                  payload: {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                  },
                });
              }
              const { data } = await weatherApi.getCurrentWeather(
                position.coords.latitude,
                position.coords.longitude
              );
              setCurrentWeather(data);
              dispatch({ type: GET_CURRENT_WEATHER, payload: data });
            }
          })
          .catch((err) => {
            console.error(err.message);
          });
      }
    } catch {
      setError(
        'Sorry, there is any problem to fetch the weather of your current location'
      );
    } finally {
      setLoading(false);
    }
  }, [currentWeather, dispatch]);
  return (
    <HomePresenter weather={currentWeather} error={error} loading={loading} />
  );
};

export default HomeContainer;
