import * as actionType from './actionType';

export const productRequest = data => ({
  type: actionType.PRODUCT.ALL_REQUEST,
  payload: data
})

export const productSuccess = data => ({
  type: actionType.PRODUCT.ALL_SUCCESS,
  payload: data
})

export const productError = data => ({
  type: actionType.PRODUCT.ALL_ERROR,
  payload: data
})

export const productReset = data => ({
  type: actionType.PRODUCT.ALL_RESET,
  payload: data
})