import * as actionType from '../action/actionType';
import { PURGE } from 'redux-persist';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: null,
  info: [],
  balance: null,
  updateProfile: [],
  changePassword: null
}

const infoRequest = state => ({
  ...state,
  isLoading: true
})

const infoSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  info: payload
})

const infoError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const infoReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  errorMsg: null,
  info: []
})


const balanceRequest = state => ({
  ...state,
  isLoading: true
})

const balanceSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  balance: payload
})

const balanceError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const balanceReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  errorMsg: null,
  balance: null
})


const updateProfileRequest = state => ({
  ...state,
  isLoading: true
})

const updateProfileSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  updateProfile: payload
})

const updateProfileError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const updateProfileReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  errorMsg: null,
  updateProfile: []
})


const changePasswordRequest = state => ({
  ...state,
  isLoading: true
})

const changePasswordSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  changePassword: payload
})

const changePasswordError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const changePasswordReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  errorMsg: null,
  changePassword: null
})

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PROFILE.INFO_REQUEST:
      return infoRequest(state, action.payload);
    case actionType.PROFILE.INFO_SUCCESS:
      return infoSuccess(state, action.payload);
    case actionType.PROFILE.INFO_ERROR:
      return infoError(state, action.payload);
    case actionType.PROFILE.INFO_RESET:
      return infoReset(state, action.payload);

    case actionType.PROFILE.BALANCE_REQUEST:
      return balanceRequest(state, action.payload);
    case actionType.PROFILE.BALANCE_SUCCESS:
      return balanceSuccess(state, action.payload);
    case actionType.PROFILE.BALANCE_ERROR:
      return balanceError(state, action.payload);
    case actionType.PROFILE.BALANCE_RESET:
      return balanceReset(state, action.payload);

    case actionType.PROFILE.UPDATE_REQUEST:
      return updateProfileRequest(state, action.payload);
    case actionType.PROFILE.UPDATE_SUCCESS:
      return updateProfileSuccess(state, action.payload);
    case actionType.PROFILE.UPDATE_ERROR:
      return updateProfileError(state, action.payload);
    case actionType.PROFILE.UPDATE_RESET:
      return updateProfileReset(state, action.payload);

    case actionType.PROFILE.CHANGE_PASSWORD_REQUEST:
      return changePasswordRequest(state, action.payload);
    case actionType.PROFILE.CHANGE_PASSWORD_SUCCESS:
      return changePasswordSuccess(state, action.payload);
    case actionType.PROFILE.CHANGE_PASSWORD_ERROR:
      return changePasswordError(state, action.payload);
    case actionType.PROFILE.CHANGE_PASSWORD_RESET:
      return changePasswordReset(state, action.payload);

    case PURGE:
      return initialState;

    default:
      return state;
  }
}

export default profileReducer;