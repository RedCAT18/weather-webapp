import React, { useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { weatherApi } from 'api';

const HomeContainer = () => {
  useEffect(() => {
    weatherApi.getCurrentWeather('Auckland');
  }, []);
  return <HomePresenter />;
};

export default HomeContainer;
