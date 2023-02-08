import {responseErrorHandler} from '../functions';
import STRAPI_PATH from './path';
import { SERVER, USER } from '../constants';
import axios from 'axios';

const STRAPI_API = {
  login: () => {
    return axios
      .post(SERVER + STRAPI_PATH.LOGIN, USER)
      .then(result => ({result: result.data}))
      .catch(responseErrorHandler);
  },
  products: (token) => {
    return axios
      .get(SERVER + STRAPI_PATH.PRODUCTS, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
  },
  detailProduct: (id, token) => {
    return axios
      .get(SERVER + STRAPI_PATH.PRODUCTS + '/' + id, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
  }
}

export default STRAPI_API