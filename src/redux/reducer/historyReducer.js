import * as actionType from '../action/actionType';
import { PURGE } from 'redux-persist';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: null,
  period: [],
  lastTransaction: [],
  lastTopup: []
}

const periodRequest = state => ({
  ...state,
  isLoading: true
})

const periodSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  period: payload,
})

const periodError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const periodReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  errorMsg: null,
  period: []
})


const lastTransactionRequest = state => ({
  ...state,
  isLoading: true
})

const lastTransactionSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  lastTransaction: payload,
})

const lastTransactionError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const lastTransactionReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  errorMsg: null,
  lastTransaction: []
})


const lastTopupRequest = state => ({
  ...state,
  isLoading: true
})

const lastTopupSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  lastTopup: payload,
})

const lastTopupError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const lastTopupReset = state => ({
  ...state,
  isLoading: false,
  isError: false,
  errorMsg: null,
  lastTopup: []
})

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.HISTORY.PERIOD_REQUEST:
      return periodRequest(state, action.payload);
    case actionType.HISTORY.PERIOD_SUCCESS:
      return periodSuccess(state, action.payload);
    case actionType.HISTORY.PERIOD_ERROR:
      return periodError(state, action.payload);
    case actionType.HISTORY.PERIOD_RESET:
      return periodReset(state, action.payload);
    
    case actionType.HISTORY.LAST_TRANSACTION_REQUEST:
      return lastTransactionRequest(state, action.payload);
    case actionType.HISTORY.LAST_TRANSACTION_SUCCESS:
      return lastTransactionSuccess(state, action.payload);
    case actionType.HISTORY.LAST_TRANSACTION_ERROR:
      return lastTransactionError(state, action.payload);
    case actionType.HISTORY.LAST_TRANSACTION_RESET:
      return lastTransactionReset(state, action.payload);

    case actionType.HISTORY.LAST_TOPUP_REQUEST:
      return lastTopupRequest(state, action.payload);
    case actionType.HISTORY.LAST_TOPUP_SUCCESS:
      return lastTopupSuccess(state, action.payload);
    case actionType.HISTORY.LAST_TOPUP_ERROR:
      return lastTopupError(state, action.payload);
    case actionType.HISTORY.LAST_TOPUP_RESET:
      return lastTopupReset(state, action.payload);

    case PURGE:
      return initialState;

    default:
      return state;
  }
}

export default historyReducer;