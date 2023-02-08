import { createReducer } from 'reduxsauce';
import { Status } from '../constants';
import Actions from '../actions/index';
import { Action } from 'history';

export const initialState = {
  loginStatus: Status.NONE,
  loginError: '',
  registerStatus: Status.NONE,
  registerError: '',
  resendVerifyStatus: Status.NONE,
  resendVerifyError: '',
  verifyStatus: Status.NONE,
  verifyError: '',
  forgotPasswordStatus: Status.NONE,
  forgotPasswordError: '',
  resetPasswordStatus: Status.NONE,
  resetPasswordError: '',
  changePasswordStatus: Status.NONE,
  changePasswordError: '',
  editProfileStatus: Status.NONE,
  editProfileError: '',
  authToken: '',
  profile: null,
  transactions: [],
  asset: null,
  setting: null,
  buyStatus: Status.NONE,
  sellStatus: Status.NONE,
  convertStatus: Status.NONE,
  sendStatus: Status.NONE,
  receiveStatus: Status.NONE,
  buyError: '',
  sellError: '',
  convertError: '',
  sendError: '',
  receiveError: '',
  historyLoadStatus: Status.NONE,
  historyLoadError: ''
}

const loginRequest = (state) => ({
  ...state,
  loginStatus: Status.REQUEST
})

const loginSuccess = (state, action) => ({
  ...state,
  loginStatus: Status.SUCCESS,
  profile: action.payload.user,
  asset: action.payload.asset
})

const loginFailure = (state, action) => ({
  ...state,
  loginStatus: Status.FAILURE,
  loginError: action.error
})

const registerRequest = (state) => ({
  ...state,
  registerStatus: Status.REQUEST,
  registerError: ''
})
const registerSuccess = (state, action) => ({
  ...state,
  registerStatus: Status.SUCCESS
})
const registerFailure = (state, action) => ({
  ...state,
  registerStatus: Status.FAILURE,
  registerError: action.error
})
const setProfile = (state, action) => ({
  ...state,
  profile: action.payload.user,
  asset: action.payload.asset
})
const logout = (state) => ({
  ...state,
  profile: null,
  authToken: ''
})

const buy = (state, action) => ({
  ...state,
  transactions: [...state.transactions, action.payload.transaction],
  asset: action.payload.currentAsset,
  buyError: '',
  buyStatus: Status.SUCCESS
})
const sell = (state, action) => ({
  ...state,
  transactions: [...state.transactions, action.payload.transaction],
  asset: action.payload.currentAsset,
  sellError: '',
  sellStatus: Status.SUCCESS
})
const convert = (state, action) => ({
  ...state,
  transactions: [...state.transactions, action.payload.transaction],
  asset: action.payload.currentAsset,
  convertError: '',
  convertStatus: Status.SUCCESS
})
const send = (state, action) => ({
  ...state,
  transactions: [...state.transactions, action.payload.transaction],
  asset: action.payload.currentAsset,
  sendError: '',
  sendStatus: Status.SUCCESS
})
const receive = (state, action) => ({
  ...state,
  transactions: [...state.transactions, action.payload.transaction],
  asset: action.payload.asset,
  receiveError: '',
  receiveStatus: Status.SUCCESS
})

const buyFailure = (state, action) => ({
  ...state,
  buyError: action.error,
  buyStatus: Status.FAILURE
})
const sellFailure = (state, action) => ({
  ...state,
  sellError: action.error,
  sellStatus: Status.FAILURE
})
const convertFailure = (state, action) => ({
  ...state,
  convertError: action.error,
  convertStatus: Status.FAILURE
})
const sendFailure = (state, action) => ({
  ...state,
  sendError: action.error,
  sendStatus: Status.FAILURE
})
const receiveFailure = (state, action) => ({
  ...state,
  receiveError: action.error,
  receiveStatus: Status.FAILURE
})
const buyRequest = (state, action) => ({
  ...state,
  buyError: action.error,
  buyStatus: Status.REQUEST
})
const sellRequest = (state, action) => ({
  ...state,
  sellError: action.error,
  sellStatus: Status.REQUEST
})
const convertRequest = (state, action) => ({
  ...state,
  convertError: action.error,
  convertStatus: Status.REQUEST
})
const sendRequest = (state, action) => ({
  ...state,
  sendError: action.error,
  sendStatus: Status.REQUEST
})
const receiveRequest = (state, action) => ({
  ...state,
  receiveError: action.error,
  receiveStatus: Status.REQUEST
})

const historyLoad = (state, action) => ({
  ...state,
  historyLoadStatus: Status.SUCCESS,
  transactions: action.payload.data
})
const historyLoadFailure = (state, action) => ({
  ...state,
  historyLoadError: action.error,
  historyLoadStatus: Status.FAILURE
});
const historyLoadRequest = (state) => ({
  ...state,
  historyLoadError: '',
  historyLoadStatus: Status.REQUEST
})

const loadSetting = (state, action) => {
  const settings = action.payload;
  const settingJSON = {}
  settings.forEach(e => {
    settingJSON[e.id] = e;
  })
  return {
    ...state,
    setting: settingJSON
  }
}

const verify = (state) => ({
  ...state,
  verifyStatus: Status.SUCCESS
});
const verifyRequest = (state) => ({
  ...state,
  verifyStatus: Status.REQUEST,
  verifyError: ''
});
const verifyFailure = (state, action) => ({
  ...state,
  verifyStatus: Status.FAILURE,
  verifyError: action.error
});

const resendVerify = (state) => ({
  ...state,
  resendVerifyStatus: Status.SUCCESS,
});
const resendVerifyRequest = (state) => ({
  ...state,
  resendVerifyStatus: Status.REQUEST,
  resendVerifyError: ''
});
const resendVerifyFailure = (state, action) => ({
  ...state,
  resendVerifyStatus: Status.FAILURE,
  resendVerifyError: action.error
});

const forgotPassword = (state) => ({
  ...state,
  forgotPasswordStatus: Status.SUCCESS
});
const forgotPasswordRequest = (state) => ({
  ...state,
  forgotPasswordStatus: Status.REQUEST,
  forgotPasswordError: ''
});
const forgotPasswordFailure = (state, action) => ({
  ...state,
  forgotPasswordStatus: Status.FAILURE,
  forgotPasswordError: action.error
});

const resetPassword = (state) => ({
  ...state,
  resetPasswordStatus: Status.SUCCESS
});
const resetPasswordRequest = (state) => ({
  ...state,
  resetPasswordStatus: Status.REQUEST,
  resetPasswordError: ''
});
const resetPasswordFailure = (state, action) => ({
  ...state,
  resetPasswordStatus: Status.FAILURE,
  resetPasswordError: action.error
});

const changePassword = (state) => ({
  ...state,
  changePasswordStatus: Status.SUCCESS
});
const changePasswordRequest = (state) => ({
  ...state,
  changePasswordStatus: Status.REQUEST,
  changePasswordError: ''
});
const changePasswordFailure = (state, action) => ({
  ...state,
  changePasswordStatus: Status.FAILURE,
  changePasswordError: action.error
});

const editProfile = (state, action) => ({
  ...state,
  editProfileStatus: Status.SUCCESS,
  profile: action.payload
});
const editProfileRequest = (state) => ({
  ...state,
  editProfileStatus: Status.REQUEST,
  editProfileError: ''
});
const editProfileFailure = (state, action) => ({
  ...state,
  editProfileStatus: Status.FAILURE,
  editProfileError: action.error
});

const actionHandlers = {
  [Actions.LOGIN_REQUEST]: loginRequest,
  [Actions.LOGIN_SUCCESS]: loginSuccess,
  [Actions.LOGIN_FAILURE]: loginFailure,
  [Actions.REGISTER_REQUEST]: registerRequest,
  [Actions.REGISTER_SUCCESS]: registerSuccess,
  [Actions.REGISTER_FAILURE]: registerFailure,
  [Actions.SET_PROFILE]: setProfile,
  [Actions.LOGOUT]: logout,
  [Actions.BUY]: buy,
  [Actions.SELL]: sell,
  [Actions.CONVERT]: convert,
  [Actions.SEND]: send,
  [Actions.RECEIVE]: receive,
  [Actions.BUY_FAILURE]: buyFailure,
  [Actions.SELL_FAILURE]: sellFailure,
  [Actions.CONVERT_FAILURE]: convertFailure,
  [Actions.SEND_FAILURE]: sendFailure,
  [Actions.RECEIVE_FAILURE]: receiveFailure,
  [Actions.BUY_REQUEST]: buyRequest,
  [Actions.SELL_REQUEST]: sellRequest,
  [Actions.CONVERT_REQUEST]: convertRequest,
  [Actions.SEND_REQUEST]: sendRequest,
  [Actions.RECEIVE_REQUEST]: receiveRequest,
  [Actions.HISTORY_LOAD]: historyLoad,
  [Actions.HISTORY_LOAD_REQUEST]: historyLoadRequest,
  [Actions.HISTORY_LOAD_FAILURE]: historyLoadFailure,
  [Actions.SETTING_LOAD]: loadSetting,
  [Actions.RESEND_VERIFY]: resendVerify,
  [Actions.RESEND_VERIFY_REQUEST]: resendVerifyRequest,
  [Actions.RESEND_VERIFY_FAILURE]: resendVerifyFailure,
  [Actions.VERIFY]: verify,
  [Actions.VERIFY_REQUEST]: verifyRequest,
  [Actions.VERIFY_FAILURE]: verifyFailure,
  [Actions.FORGOT_PASSWORD]: forgotPassword,
  [Actions.FORGOT_PASSWORD_REQUEST]: forgotPasswordRequest,
  [Actions.FORGOT_PASSWORD_FAILURE]: forgotPasswordFailure,
  [Actions.RESET_PASSWORD]: resetPassword,
  [Actions.RESET_PASSWORD_REQUEST]: resetPasswordRequest,
  [Actions.RESET_PASSWORD_FAILURE]: resetPasswordFailure,
  [Actions.CHANGE_PASSWORD]: changePassword,
  [Actions.CHANGE_PASSWORD_REQUEST]: changePasswordRequest,
  [Actions.CHANGE_PASSWORD_FAILURE]: changePasswordFailure,
  [Actions.EDIT_PROFILE]: editProfile,
  [Actions.EDIT_PROFILE_REQUEST]: editProfileRequest,
  [Actions.EDIT_PROFILE_FAILURE]: editProfileFailure,
}

export default createReducer(initialState, actionHandlers);