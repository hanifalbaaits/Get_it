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

export const resetCredential = data => ({
  type: actionType.AUTH.RESET_CREDENTIAL,
  payload: data
})


export const registerRequest = data => ({
  type: actionType.AUTH.REGISTER_REQUEST,
  payload: data
})

export const registerSuccess = data => ({
  type: actionType.AUTH.REGISTER_SUCCESS,
  payload: data
})

export const registerError = data => ({
  type: actionType.AUTH.REGISTER_ERROR,
  payload: data
})

export const registerReset = data => ({
  type: actionType.AUTH.REGISTER_RESET,
  payload: data
})


export const activationRequest = data => ({
  type: actionType.AUTH.ACTIVATION_REQUEST,
  payload: data
})

export const activationSuccess = data => ({
  type: actionType.AUTH.ACTIVATION_SUCCESS,
  payload: data
})

export const activationError = data => ({
  type: actionType.AUTH.ACTIVATION_ERROR,
  payload: data
})

export const activationReset = data => ({
  type: actionType.AUTH.ACTIVATION_RESET,
  payload: data
})