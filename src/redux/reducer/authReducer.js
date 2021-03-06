import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actionType from '../action/actionType';
import { PURGE } from 'redux-persist';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: null,
  session: null,
  isLogin: false,
  credential: {},
  register: null,
  activation: null,
  logout: null
}

const sessionRequest = state => ({
  ...state,
  isLoading: true
})

const sessionSuccess = (state, payload) => {
  AsyncStorage.setItem("@SessionToken", payload);
  return {
    ...state,
    isLoading: false,
    isError: false,
    session: payload
  }
}

const sessionError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const sessionReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  errorMsg: null,
  session: null
})

const loginRequest = state => ({
  ...state,
  isLoading: true
})

const loginSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  isLogin: true,
  credential: payload
})

const loginError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  isLogin: false,
  errorMsg: payload
})

const loginReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  errorMsg: null,
  isLogin: false
})

const logoutRequest = state => ({
  ...state,
  isLoading: true
})

const logoutSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  logout: payload
})

const logoutError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const logoutReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  logout: null
})

const updateCredential = (state, payload) => ({
  ...state,
  credential: payload
})

const resetCredential = state => ({
  ...state,
  credential: {}
})


const registerRequest = state => ({
  ...state,
  isLoading: true
})

const registerSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  register: payload
})

const registerError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const registerReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  errorMsg: null,
  register: null
})


const activationRequest = state => ({
  ...state,
  isLoading: true
})

const activationSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  activation: payload
})

const activationError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const activationReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  errorMsg: null,
  activation: null
})

const authReduceer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH.SESSION_REQUEST:
      return sessionRequest(state, action.payload);
    case actionType.AUTH.SESSION_SUCCESS:
      return sessionSuccess(state, action.payload);
    case actionType.AUTH.SESSION_ERROR:
      return sessionError(state, action.payload);
    case actionType.AUTH.SESSION_RESET:
      return sessionReset(state, action.payload);

    case actionType.AUTH.LOGIN_REQUEST:
      return loginRequest(state, action.payload);
    case actionType.AUTH.LOGIN_SUCCESS:
      return loginSuccess(state, action.payload);
    case actionType.AUTH.LOGIN_ERROR:
      return loginError(state, action.payload);
    case actionType.AUTH.LOGIN_RESET:
      return loginReset(state, action.payload);

    case actionType.AUTH.LOGOUT_REQUEST:
      return logoutRequest(state, action.payload);
    case actionType.AUTH.LOGOUT_SUCCESS:
      return logoutSuccess(state, action.payload);
    case actionType.AUTH.LOGOUT_ERROR:
      return logoutError(state, action.payload);
    case actionType.AUTH.LOGOUT_RESET:
      return logoutReset(state, action.payload);

    case actionType.AUTH.UPDATE_CREDENTIAL:
      return updateCredential(state, action.payload);
    case actionType.AUTH.RESET_CREDENTIAL:
      return resetCredential(state, action.payload);
    
    case actionType.AUTH.REGISTER_REQUEST:
      return registerRequest(state, action.payload);
    case actionType.AUTH.REGISTER_SUCCESS:
      return registerSuccess(state, action.payload);
    case actionType.AUTH.REGISTER_ERROR:
      return registerError(state, action.payload);
    case actionType.AUTH.REGISTER_RESET:
      return registerReset(state, action.payload);

    case actionType.AUTH.ACTIVATION_REQUEST:
      return activationRequest(state, action.payload);
    case actionType.AUTH.ACTIVATION_SUCCESS:
      return activationSuccess(state, action.payload);
    case actionType.AUTH.ACTIVATION_ERROR:
      return activationError(state, action.payload);
    case actionType.AUTH.ACTIVATION_RESET:
      return activationReset(state, action.payload);

    case PURGE:
      return initialState;

    default:
      return state;
  }
}

export default authReduceer;