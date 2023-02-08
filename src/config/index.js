export const APP_VERSION = '1.0.0';

export const ENABLE_REDUX_LOGGER = false;

let BASE_URL = '/api/';

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:5000/api/';
} else {
  BASE_URL = 'https://nomismata-backend.herokuapp.com/api/';
}

export const API_BASE_URL = BASE_URL;
export const SETTING_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
