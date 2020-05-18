import { api_key } from './api_key';
import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`,
  params: {
    appid: api_key,
    units: 'metric',
  },
});

export const weatherApi = {
  getCurrentWeather: (lat, lon) =>
    api.get(`weather`, {
      params: {
        lat,
        lon,
      },
    }),
  getWeatherByCity: (city) =>
    api.get(`weather`, {
      params: {
        q: city,
      },
    }),
  getWeatherById: (id) => api.get(`weather`, { params: id }),
  getDetailWeather: (lat, lon) =>
    api.get(`onecall`, {
      params: {
        lat,
        lon,
      },
    }),
  getWorldWeathers: (ids) =>
    api.get('group', {
      params: { id: ids },
    }),
};
