import React, { useState, useEffect } from 'react';
import { useDispatch, useWeatherState } from 'Context/WeatherContext';
import { GET_CURRENT_LOCATION } from 'reducer/actions';
import { weatherApi } from 'api';
import { fetchLocation } from 'api/helper';
import DaysPresenter from './DaysPresenter';

const DaysContainer = () => {
  const dispatch = useDispatch();
  const { DaysLocation } = useWeatherState();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const fetchData = async (lat, lon) => {
        const { data } = await weatherApi.getDetailWeather(lat, lon);
        setWeather(data);
      };

      if (!DaysLocation) {
        fetchLocation().then(async (position) => {
          if (position.coords) {
            if (!useWeatherState.DaysLocation) {
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
        'Sorry, there is any problem to fetch the weather of your Days location'
      );
    } finally {
      setLoading(false);
    }
  }, [DaysLocation, dispatch]);

  return <DaysPresenter weather={weather} error={error} loading={loading} />;
};

export default DaysContainer;
