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


export const bannerRequest = data => ({
  type: actionType.PRODUCT.BANNER_REQUEST,
  payload: data
})

export const bannerSuccess = data => ({
  type: actionType.PRODUCT.BANNER_SUCCESS,
  payload: data
})

export const bannerError = data => ({
  type: actionType.PRODUCT.BANNER_ERROR,
  payload: data
})

export const bannerReset = data => ({
  type: actionType.PRODUCT.BANNER_RESET,
  payload: data
})