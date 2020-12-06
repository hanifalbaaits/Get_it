import * as actionType from '../action/actionType';
import { PURGE } from 'redux-persist';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: null,
  product: [],
  banner: []
}

const productRequest = state => ({
  ...state,
  isLoading: true
})

const productSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  product: payload,
})

const productError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const productReset = () => ({
  isLoading: false,
  isError: false,
  errorMsg: null,
  product: []
})


const bannerRequest = state => ({
  ...state,
  isLoading: true
})

const bannerSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: false,
  banner: payload,
})

const bannerError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
})

const bannerReset = () => ({
  isLoading: false,
  isError: false,
  errorMsg: null,
  banner: []
})

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PRODUCT.ALL_REQUEST:
      return productRequest(state, action.payload);
    case actionType.PRODUCT.ALL_SUCCESS:
      return productSuccess(state, action.payload);
    case actionType.PRODUCT.ALL_ERROR:
      return productError(state, action.payload);
    case actionType.PRODUCT.ALL_RESET:
      return productReset(state, action.payload);

    case actionType.PRODUCT.BANNER_REQUEST:
      return bannerRequest(state, action.payload);
    case actionType.PRODUCT.BANNER_SUCCESS:
      return bannerSuccess(state, action.payload);
    case actionType.PRODUCT.BANNER_ERROR:
      return bannerError(state, action.payload);
    case actionType.PRODUCT.BANNER_RESET:
      return bannerReset(state, action.payload);

    case PURGE:
      return initialState;

    default:
      return state;
  }
}

export default productReducer;