import React, { createContext, useReducer, useContext } from 'react';
import reducer, { initialState } from 'reducer/reducer';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(WeatherContext);
  return dispatch;
};

export const useWeatherState = () => {
  const { state } = useContext(WeatherContext);
  return state;
};

export default WeatherProvider;
