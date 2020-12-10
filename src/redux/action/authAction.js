import * as actionType from './actionType';

export const loginRequest = data => ({
  type: actionType.AUTH.LOGIN_REQUEST,
  payload: data
})

export const loginSuccess = data => ({
  type: actionType.AUTH.LOGIN_SUCCESS,
  payload: data
})

export const loginError = data => ({
  type: actionType.AUTH.LOGIN_ERROR,
  payload: data
})

export const loginReset = data => ({
  type: actionType.AUTH.LOGIN_RESET,
  payload: data
})

export const updateCredential = data => ({
  type: actionType.AUTH.UPDATE_CREDENTIAL,
  payload: data
})