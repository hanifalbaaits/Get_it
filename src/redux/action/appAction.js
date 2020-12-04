import * as actionType from './actionType';

export const appStateLoading = data => ({
  type: actionType.APP.STATE_LOADING,
  payload: data
})

export const appStateError = data => ({
  type: actionType.APP.STATE_ERROR,
  payload: data
})