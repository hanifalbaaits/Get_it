import * as actionType from '../action/actionType';
import { PURGE } from 'redux-persist';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: null,
  topupType: [],
  topupAccount: [],
  topup: null
}

const topupTypeRequest = state => ({
  ...state,
  isLoading: true
})

const topupTypeSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  topupType: payload,
})

const topupTypeError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const topupTypeReset = () => ({
  isLoading: false,
  isError: false,
  errorMsg: null,
  topupType: []
})


const topupAccountRequest = state => ({
  ...state,
  isLoading: true
})

const topupAccountSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  topupAccount: payload,
})

const topupAccountError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const topupAccountReset = () => ({
  isLoading: false,
  isError: false,
  errorMsg: null,
  topupAccount: []
})


const topupRequest = state => ({
  ...state,
  isLoading: true
})

const topupSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  topup: payload,
})

const topupError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const topupReset = () => ({
  isLoading: false,
  isError: false,
  errorMsg: null,
  topup: null
})

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.TRANSACTION.TOPUP_TYPE_REQUEST:
      return topupTypeRequest(state, action.payload);
    case actionType.TRANSACTION.TOPUP_TYPE_SUCCESS:
      return topupTypeSuccess(state, action.payload);
    case actionType.TRANSACTION.TOPUP_TYPE_ERROR:
      return topupTypeError(state, action.payload);
    case actionType.TRANSACTION.TOPUP_TYPE_RESET:
      return topupTypeReset(state, action.payload);
    
    case actionType.TRANSACTION.TOPUP_ACCOUNT_REQUEST:
      return topupAccountRequest(state, action.payload);
    case actionType.TRANSACTION.TOPUP_ACCOUNT_SUCCESS:
      return topupAccountSuccess(state, action.payload);
    case actionType.TRANSACTION.TOPUP_ACCOUNT_ERROR:
      return topupAccountError(state, action.payload);
    case actionType.TRANSACTION.TOPUP_ACCOUNT_RESET:
      return topupAccountReset(state, action.payload);
    
    case actionType.TRANSACTION.TOPUP_REQUEST:
      return topupRequest(state, action.payload);
    case actionType.TRANSACTION.TOPUP_SUCCESS:
      return topupSuccess(state, action.payload);
    case actionType.TRANSACTION.TOPUP_ERROR:
      return topupError(state, action.payload);
    case actionType.TRANSACTION.TOPUP_RESET:
      return topupReset(state, action.payload);

    case PURGE:
      return initialState;

    default:
      return state;
  }
}

export default transactionReducer;