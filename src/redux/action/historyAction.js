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


export const lastTransactionRequest = data => ({
  type: actionType.HISTORY.LAST_TRANSACTION_REQUEST,
  payload: data
})

export const lastTransactionSuccess = data => ({
  type: actionType.HISTORY.LAST_TRANSACTION_SUCCESS,
  payload: data
})

export const lastTransactionError = data => ({
  type: actionType.HISTORY.LAST_TRANSACTION_ERROR,
  payload: data
})

export const lastTransactionReset = data => ({
  type: actionType.HISTORY.LAST_TRANSACTION_RESET,
  payload: data
})


export const lastTopupRequest = data => ({
  type: actionType.HISTORY.LAST_TOPUP_REQUEST,
  payload: data
})

export const lastTopupSuccess = data => ({
  type: actionType.HISTORY.LAST_TOPUP_SUCCESS,
  payload: data
})

export const lastTopupError = data => ({
  type: actionType.HISTORY.LAST_TOPUP_ERROR,
  payload: data
})

export const lastTopupReset = data => ({
  type: actionType.HISTORY.LAST_TOPUP_RESET,
  payload: data
})