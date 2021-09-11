import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
  
  } from "./constants";
  
import initialState from '../initialState'
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_START:
        return {
          ...state,
          isLoading: 'loading',
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          isLoading: 'succeeded',
          dataProduct: action.payload,
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          errorMessage: action.payload,
          isLoading: 'failed',
          dataProduct: [],
        };
        case DELETE_PRODUCT_START:
          return{
              ...state,
              isLoading: 'loading',
          };
      case DELETE_PRODUCT_SUCCESS:
          return{
              ...state,
              isLoading: 'succeeded',
              dataProduct: state.dataProduct.filter((product) => product.id !== parseInt(action.payload)), //aca hace el filtro para mostrar los usuarios sin el id borrado
          };
      case DELETE_PRODUCT_FAILURE:
          return{
              ...state,
              errorMessage: action.payload,
              isLoading: 'failed',
              dataProduct: [],
          };
  
      case CREATE_PRODUCT_REQUEST:
        return {
          ...state,
          isLoading: 'loading',
        };
      case CREATE_PRODUCT_SUCCESS:
        return {
          ...state,
          isLoading: 'succeeded',
          dataProduct: [ ...state.dataProduct, action.payload ]//el estado actual y la accion del nuevo payload
        };
      case CREATE_PRODUCT_FAILURE:
        return {
          ...state,
          errorMessage: action.payload,
          isLoading: 'failed',
        };
  
      case UPDATE_PRODUCT_REQUEST:
        return {
          ...state,
          isLoading: 'loading',
        };
      case UPDATE_PRODUCT_SUCCESS:
        return {
          ...state,
          isLoading: 'succeeded',
          dataProduct: action.payload //solo trae el usuario, el payload es el arreglo de usuarios, lo produce las acciones
        };
      case UPDATE_PRODUCT_FAILURE:
        return {
          ...state,
          errorMessage: action.payload,
          isLoading: 'failed',
        };
      
  
      default:
        return state;
    }
  };
  export default productsReducer;
  