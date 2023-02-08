import axios from 'src/utils/axios';
import types from 'src/actions/types';
import authService from 'src/services/auth.service';
import actions from '.';
import { API_BASE_URL, SETTING_URL } from 'src/config';
import { PAYMENT, TRANSACTION } from 'src/config/endpoints';
import { handleError } from 'src/utils/functions';
import { COIN_TYPES } from 'src/constants';

export function loadSetting() {
  const coins = COIN_TYPES.join(',')
  const request = axios.get(`${SETTING_URL}&ids=${coins}`);

  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actions.SETTING_LOAD,
        payload: response.data
      })
    })
  }
}

export function loadTransactions(data) {
  const request = axios.get(`${API_BASE_URL}${TRANSACTION.load}`)

  return (dispatch) => {
    dispatch({type: actions.HISTORY_LOAD_REQUEST});
    request.then((response) => {
      return dispatch({
        type: actions.HISTORY_LOAD,
        payload: response.data
      })
    }).catch((err) => {
      const error = handleError(err);
      return dispatch({
        type: actions.HISTORY_LOAD_FAILURE,
        error: error
      });
    })
  }
}

export function buyCoin(data) {
  const request = axios.post(`${API_BASE_URL}${PAYMENT.BUY}`, data)

  return (dispatch) => {
    dispatch({type: actions.BUY_REQUEST});
    request.then((response) => {
      return dispatch({
        type: actions.BUY,
        payload: response.data
      })
    }).catch((err) => {
      const error = handleError(err);
      return dispatch({
        type: actions.BUY_FAILURE,
        error: error
      });
    })
  }
}

export function sellCoin(data) {
  const request = axios.post(`${API_BASE_URL}${PAYMENT.SELL}`, data)

  return (dispatch) => {
    dispatch({type: actions.SELL_REQUEST});
    request.then((response) => {
      return dispatch({
        type: actions.SELL,
        payload: response.data
      })
    }).catch((err) => {
      const error = handleError(err);
      return dispatch({
        type: actions.SELL_FAILURE,
        error: error
      });
    })
  }
}

export function convertCoin(data) {
  const request = axios.post(`${API_BASE_URL}${PAYMENT.CONVERT}`, data)

  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actions.CONVERT,
        payload: response.data
      })
    }).catch((err) => {
      const error = handleError(err);
      return dispatch({
        type: actions.CONVERT_FAILURE,
        error: error
      });
    })
  }
}

export function sendCoin(data) {
  const request = axios.post(`${API_BASE_URL}${PAYMENT.SEND}`, data)

  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actions.SEND,
        payload: response.data
      })
    }).catch((err) => {
      const error = handleError(err);
      return dispatch({
        type: actions.SEND_FAILURE,
        error: error
      });
    })
  }
}

export function receiveCoin(data) {
  const request = axios.post(`${API_BASE_URL}${PAYMENT.RECEIVE}`, data)

  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actions.RECEIVE,
        payload: response.data
      })
    }).catch((err) => {
      const error = handleError(err);
      return dispatch({
        type: actions.RECEIVE_FAILURE,
        error: error
      });
    })
  }
}