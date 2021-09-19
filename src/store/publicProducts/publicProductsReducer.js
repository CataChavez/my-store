import {
    FETCH_PUBLIC_PRODUCTS_START,
    FETCH_PUBLIC_PRODUCTS_SUCCESS,
    FETCH_PUBLIC_PRODUCTS_FAILURE,    
  } from "./constants";
  
import initialState from '../initialState'
  
  const publicProductsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PUBLIC_PRODUCTS_START:
        return {
          ...state,
          isLoading: 'loading',
        };
      case FETCH_PUBLIC_PRODUCTS_SUCCESS:
        return {
          ...state,
          isLoading: 'succeeded',
          dataProduct: action.payload,
        };
      case FETCH_PUBLIC_PRODUCTS_FAILURE:
        return {
          ...state,
          errorMessage: action.payload,
          isLoading: 'failed',
          dataProduct: [],
        };
      default:
        return state;
    }
  };
  export default publicProductsReducer;
  