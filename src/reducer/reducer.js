import {
  GET_CURRENT_LOCATION,
  GET_CURRENT_WEATHER,
  GET_WORLD_WEATHER,
} from './actions';

export const initialState = {
  currentLocation: null,
  currentWeather: null,
  worldWeather: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case GET_CURRENT_WEATHER:
      return { ...state, currentWeather: action.payload };
    case GET_WORLD_WEATHER:
      return { ...state, worldWeather: action.payload };
    default:
      return state;
  }
};

export default reducer;
