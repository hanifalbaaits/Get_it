import * as actionType from '../action/actionType';
import { PURGE } from 'redux-persist';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: null,
  topupType: [],
  topupAccount: [],
  topup: null,
  payment: null,
  topupTime: null
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

const topupTypeReset = state => ({
  ...state,
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

const topupAccountReset = state => ({
  ...state,
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

const topupReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  errorMsg: null,
  topup: null
})


const topupTimeSet = (state, payload) => ({
  ...state,
  topupTime: payload
})

const topupTimeReset = state => ({
  ...state,
  topupTime: null
})


const paymentRequest = state => ({
  ...state,
  isLoading: true
})

const paymentSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  payment: payload,
})

const paymentError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const paymentReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  errorMsg: null,
  payment: null
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

    case actionType.TRANSACTION.TOPUP_TIME_SET:
      return topupTimeSet(state, action.payload);
    case actionType.TRANSACTION.TOPUP_TIME_RESET:
      return topupTimeReset(state, action.payload);

    case actionType.TRANSACTION.PAYMENT_REQUEST:
      return paymentRequest(state, action.payload);
    case actionType.TRANSACTION.PAYMENT_SUCCESS:
      return paymentSuccess(state, action.payload);
    case actionType.TRANSACTION.PAYMENT_ERROR:
      return paymentError(state, action.payload);
    case actionType.TRANSACTION.PAYMENT_RESET:
      return paymentReset(state, action.payload);

    case PURGE:
      return initialState;

    default:
      return state;
  }
}

export default transactionReducer;