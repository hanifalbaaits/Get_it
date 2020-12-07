import * as actionType from './actionType';

export const periodRequest = data => ({
  type: actionType.HISTORY.PERIOD_REQUEST,
  payload: data
})

export const periodSuccess = data => ({
  type: actionType.HISTORY.PERIOD_SUCCESS,
  payload: data
})

export const periodError = data => ({
  type: actionType.HISTORY.PERIOD_ERROR,
  payload: data
})

export const periodReset = data => ({
  type: actionType.HISTORY.PERIOD_RESET,
  payload: data
})