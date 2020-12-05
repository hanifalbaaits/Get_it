import * as actionType from './actionType';

export const infoRequest = data => ({
  type: actionType.PROFILE.INFO_REQUEST,
  payload: data
})

export const infoSuccess = data => ({
  type: actionType.PROFILE.INFO_SUCCESS,
  payload: data
})

export const infoError = data => ({
  type: actionType.PROFILE.INFO_ERROR,
  payload: data
})

export const infoReset = data => ({
  type: actionType.PROFILE.INFO_RESET,
  payload: data
})


export const balanceRequest = data => ({
  type: actionType.PROFILE.BALANCE_REQUEST,
  payload: data
})

export const balanceSuccess = data => ({
  type: actionType.PROFILE.BALANCE_SUCCESS,
  payload: data
})

export const balanceError = data => ({
  type: actionType.PROFILE.BALANCE_ERROR,
  payload: data
})

export const balanceReset = data => ({
  type: actionType.PROFILE.BALANCE_RESET,
  payload: data
})