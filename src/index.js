import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import WeatherProvider from './Context/WeatherContext';

ReactDOM.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
