import {
  put, call, takeLatest
} from 'redux-saga/effects';
import Actions from '../actions';
import { STRAPI } from '../api';

function* login(action) {
  yield put({type: Actions.LOGIN_REQUEST});
  try {
    const {result, error} = yield call(STRAPI.login, action.data);
    if (result) {
      return yield put({type: Actions.LOGIN_SUCCESS, payload: result})
    } 
    yield put({type: Actions.LOGIN_FAILURE, error})
  } catch (error) {
    yield put({type: Actions.LOGIN_FAILURE, error})
  }
}

export default [
  takeLatest(Actions.LOGIN, login)
]