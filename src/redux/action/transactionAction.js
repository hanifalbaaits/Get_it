import * as actionType from './actionType';

export const topupTypeRequest = data => ({
  type: actionType.TRANSACTION.TOPUP_TYPE_REQUEST,
  payload: data
})

export const topupTypeSuccess = data => ({
  type: actionType.TRANSACTION.TOPUP_TYPE_SUCCESS,
  payload: data
})

export const topupTypeError = data => ({
  type: actionType.TRANSACTION.TOPUP_TYPE_ERROR,
  payload: data
})

export const topupTypeReset = data => ({
  type: actionType.TRANSACTION.TOPUP_TYPE_RESET,
  payload: data
})


export const topupAccountRequest = data => ({
  type: actionType.TRANSACTION.TOPUP_ACCOUNT_REQUEST,
  payload: data
})

export const topupAccountSuccess = data => ({
  type: actionType.TRANSACTION.TOPUP_ACCOUNT_SUCCESS,
  payload: data
})

export const topupAccountError = data => ({
  type: actionType.TRANSACTION.TOPUP_ACCOUNT_ERROR,
  payload: data
})

export const topupAccountReset = data => ({
  type: actionType.TRANSACTION.TOPUP_ACCOUNT_RESET,
  payload: data
})


export const topupRequest = data => ({
  type: actionType.TRANSACTION.TOPUP_REQUEST,
  payload: data
})

export const topupSuccess = data => ({
  type: actionType.TRANSACTION.TOPUP_SUCCESS,
  payload: data
})

export const topupError = data => ({
  type: actionType.TRANSACTION.TOPUP_ERROR,
  payload: data
})

export const topupReset = data => ({
  type: actionType.TRANSACTION.TOPUP_RESET,
  payload: data
})