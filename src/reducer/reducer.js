import React from 'react';
import { GET_CURRENT_LOCATION } from './actions';

export const initialState = {
  currentLocation: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload.location };
    default:
      return state;
  }
};

export default reducer;
