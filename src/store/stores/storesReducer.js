import {
    FETCH_STORES_START,
    FETCH_STORES_SUCCESS,
    FETCH_STORES_FAILURE,
    UPDATE_STORE_REQUEST,
    UPDATE_STORE_SUCCESS,
    UPDATE_STORE_FAILURE,
  
  } from "./constants";
  
import initialState from '../initialState'

  const storesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_STORES_START:
        return {
          ...state,
          isLoading: 'loading',
        };
      case FETCH_STORES_SUCCESS:
        return {
          ...state,
          isLoading: 'succeeded',
          data: action.payload,
        };
      case FETCH_STORES_FAILURE:
        return {
          ...state,
          errorMessage: action.payload,
          isLoading: 'failed',
          data: [],
        };
 
      case UPDATE_STORE_REQUEST:
        return {
          ...state,
          isLoading: 'loading',
        };
      case UPDATE_STORE_SUCCESS:
        return {
          ...state,
          isLoading: 'succeeded',
          data: action.payload //solo trae el usuario, el payload es el arreglo de usuarios, lo produce las acciones
        };
      case UPDATE_STORE_FAILURE:
        return {
          ...state,
          errorMessage: action.payload,
          isLoading: 'failed',
        };
      
  
      default:
        return state;
    }
  };
  export default storesReducer;
  