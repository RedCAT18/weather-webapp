import { api_key } from './api_key';
import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`,
  params: {
    appid: api_key,
  },
});

export const weatherApi = {
  getCurrentWeather: (city) =>
    api.get(`weather`, {
      params: {
        q: city,
      },
    }),
};
