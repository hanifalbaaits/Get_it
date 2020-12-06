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


export const updateRequest = data => ({
  type: actionType.PROFILE.UPDATE_REQUEST,
  payload: data
})

export const updateSuccess = data => ({
  type: actionType.PROFILE.UPDATE_SUCCESS,
  payload: data
})

export const updateError = data => ({
  type: actionType.PROFILE.UPDATE_ERROR,
  payload: data
})

export const updateReset = data => ({
  type: actionType.PROFILE.UPDATE_RESET,
  payload: data
})


export const changePasswordRequest = data => ({
  type: actionType.PROFILE.CHANGE_PASSWORD_REQUEST,
  payload: data
})

export const changePasswordSuccess = data => ({
  type: actionType.PROFILE.CHANGE_PASSWORD_SUCCESS,
  payload: data
})

export const changePasswordError = data => ({
  type: actionType.PROFILE.CHANGE_PASSWORD_ERROR,
  payload: data
})

export const changePasswordReset = data => ({
  type: actionType.PROFILE.CHANGE_PASSWORD_RESET,
  payload: data
})