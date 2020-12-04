import * as actionType from '../action/actionType';
import { PURGE } from 'redux-persist';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: null
}

export const setLoading = (state, payload) => ({
  ...state,
  isLoading: payload,
  isError: payload ? false : state.isError,
  errorMsg: payload ? null : state.errorMsg
})

export const setError = (state, payload) => ({
  ...state,
  isError: true,
  errorMsg: payload,
})

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.APP.STATE_LOADING:
      return setLoading(state, action.payload);
    case actionType.APP.STATE_ERROR:
      return setError(state, action.payload);

    case PURGE:
      return initialState;

    default:
      return state
  }
}

export default appReducer;