import axios from 'src/utils/axios';
import types from 'src/actions/types';
import authService from 'src/services/auth.service';
import actions from '.';
import { API_BASE_URL } from 'src/config';
import { USER } from 'src/config/endpoints';
import { handleError } from 'src/utils/functions';

export const loginRequest = () => {
  return (dispatch) => dispatch({
    type: types.LOGIN_REQUEST
  })
}
export const loginSuccess = (data) => {
  return (dispatch) => dispatch({
    type: types.LOGIN_SUCCESS,
    payload: {
      user: data.user,
      asset: data.asset
    }
  });
}
export const loginFailure = (error) => {
  return (dispatch) => dispatch({
    type: types.LOGIN_FAILURE,
    error: error
  });
}
export function login(email, password)  {
  return async (dispatch) => {
    try {
      dispatch({type: actions.LOGIN_REQUEST});

      const data = await authService.loginWithEmail(email, password);
      dispatch({type: actions.LOGIN_SUCCESS, payload: {user: data.user, asset: data.asset}});
    } catch (error) {
      const err = handleError(error);
      dispatch({type: actions.LOGIN_FAILURE, error: err})
    }
  }
}
export function verify(email, code) {
  const request = axios.post(`${API_BASE_URL}${USER.VERIFY}`, {email, code})

  return (dispatch) => {
    dispatch({type: actions.VERIFY_REQUEST});
    request.then((response) => {
      return dispatch({
        type: actions.VERIFY
      })
    }).catch((err) => {
      const error = handleError(err);
      return dispatch({
        type: actions.VERIFY_FAILURE,
        error: error
      });
    })
  }
}
export function resendVerify(email) {
  const request = axios.post(`${API_BASE_URL}${USER.RESEND_VERIFY}`, {email})

  return (dispatch) => {
    dispatch({type: actions.RESEND_VERIFY_REQUEST});
    request.then((response) => {
      return dispatch({
        type: actions.RESEND_VERIFY
      })
    }).catch((err) => {
      const error = handleError(err);
      return dispatch({
        type: actions.RESEND_VERIFY_FAILURE,
        error: error
      });
    })
  }
}

export function forgotPassword(email) {
  const request = axios.post(`${API_BASE_URL}${USER.FORGOT_PASSWORD}`, {email})

  return (dispatch) => {
    dispatch({type: actions.FORGOT_PASSWORD_REQUEST});
    request.then((response) => {
      return dispatch({
        type: actions.FORGOT_PASSWORD
      })
    }).catch((err) => {
      const error = handleError(err);
      return dispatch({
        type: actions.FORGOT_PASSWORD_FAILURE,
        error: error
      });
    })
  }
}

export function resetPassword(data) {
  const request = axios.post(`${API_BASE_URL}${USER.RESET_PASSWORD}`, data)

  return (dispatch) => {
    dispatch({type: actions.RESET_PASSWORD_REQUEST});
    request.then((response) => {
      return dispatch({
        type: actions.RESET_PASSWORD
      })
    }).catch((err) => {
      const error = handleError(err);
      return dispatch({
        type: actions.RESET_PASSWORD_FAILURE,
        error: error
      });
    })
  }
}

export function changePassword(data) {
  const request = axios.post(`${API_BASE_URL}${USER.CHANGE_PASSWORD}`, data)

  return (dispatch) => {
    dispatch({type: actions.CHANGE_PASSWORD_REQUEST});
    request.then((response) => {
      return dispatch({
        type: actions.CHANGE_PASSWORD
      })
    }).catch((err) => {
      const error = handleError(err);
      return dispatch({
        type: actions.CHANGE_PASSWORD_FAILURE,
        error: error
      });
    })
  }
}

export function editProfile(data) {
  const request = axios.put(`${API_BASE_URL}${USER.EDIT_PROFILE}`, data, {headers: {'Content-Type': 'multipart/form-data'}});

  return (dispatch) => {
    dispatch({type: actions.EDIT_PROFILE_REQUEST});
    request.then((response) => {

      return dispatch({
        type: actions.EDIT_PROFILE,
        payload: response.data.user
      })
    }).catch((err) => {
      const error = handleError(err);
      return dispatch({
        type: actions.EDIT_PROFILE_FAILURE,
        error: error
      });
    })
  }
}


export const setUserData = (data) => {
  return (dispatch) => dispatch({
    type: types.SET_PROFILE,
    payload: {
      user: data.user,
      asset: data.asset
    }
  })
}

export const signup = (data) => {
  return async (dispatch) => {
    try {
      dispatch ({type: actions.REGISTER_REQUEST});

      const res = await authService.registerWithEmail(data);
      dispatch ({type: actions.REGISTER_SUCCESS});
    } catch (error) {
      const err = handleError(error);
      console.log('sign up error', err);
      dispatch({type: actions.REGISTER_FAILURE, error: err})
    }
  }
}

export const logout = () => {
  return (dispatch) => {
    authService.logout();

    dispatch({
      type: actions.LOGOUT
    })
  }
}