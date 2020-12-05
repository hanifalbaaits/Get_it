import * as actionType from '../action/actionType';
import { PURGE } from 'redux-persist';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: null,
  info: [],
  balance: null
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

const infoReset = () => ({
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

const balanceReset = () => ({
  isLoading: false,
  isError: false,
  errorMsg: null,
  balance: null
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

    case PURGE:
      return initialState;

    default:
      return state;
  }
}

export default profileReducer;