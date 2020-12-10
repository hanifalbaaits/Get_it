import * as actionType from '../action/actionType';
import { PURGE } from 'redux-persist';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: null,
  period: []
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

    case PURGE:
      return initialState;

    default:
      return state;
  }
}

export default historyReducer;