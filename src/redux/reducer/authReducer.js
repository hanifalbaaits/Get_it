import * as actionType from '../action/actionType';
import { PURGE } from 'redux-persist';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: null,
  isLogin: false,
  credential: {}
}

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

const updateCredential = (state, payload) => ({
  ...state,
  credential: payload
})

const authReduceer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH.LOGIN_REQUEST:
      return loginRequest(state, action.payload);
    case actionType.AUTH.LOGIN_SUCCESS:
      return loginSuccess(state, action.payload);
    case actionType.AUTH.LOGIN_ERROR:
      return loginError(state, action.payload);
    case actionType.AUTH.LOGIN_RESET:
      return loginReset(state, action.payload);

    case actionType.AUTH.UPDATE_CREDENTIAL:
      return updateCredential(state, action.payload);

    case PURGE:
      return initialState;

    default:
      return state;
  }
}

export default authReduceer;