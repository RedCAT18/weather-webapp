import React, { useState, useEffect } from 'react';
import { useDispatch, useWeatherState } from 'Context/WeatherContext';
import { GET_CURRENT_LOCATION } from 'reducer/actions';
import { weatherApi } from 'api';
import { fetchLocation } from 'api/helper';
import CurrentPresenter from './CurrentPresenter';

const CurrentContainer = () => {
  const dispatch = useDispatch();
  const { currentLocation } = useWeatherState();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const fetchData = async (lat, lon) => {
        const { data } = await weatherApi.getDetailWeather(lat, lon);
        setWeather(data);
      };

      if (!currentLocation) {
        fetchLocation().then(async (position) => {
          if (position.coords) {
            if (!useWeatherState.currentLocation) {
              dispatch({
                type: GET_CURRENT_LOCATION,
                payload: {
                  lat: position.coords.latitude,
                  lon: position.coords.longitude,
                },
              });
              fetchData(position.coords.latitude, position.coords.longitude);
            }
          }
        });
      }
    } catch {
      setError(
        'Sorry, there is any problem to fetch the weather of your current location'
      );
    } finally {
      setLoading(false);
    }
  }, [currentLocation, dispatch]);

  return <CurrentPresenter weather={weather} error={error} loading={loading} />;
};

export default CurrentContainer;
