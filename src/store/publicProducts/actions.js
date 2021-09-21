import {
    FETCH_PUBLIC_PRODUCTS_START,
    FETCH_PUBLIC_PRODUCTS_SUCCESS,
    FETCH_PUBLIC_PRODUCTS_FAILURE,
} from './constants';

//fetch productos publicos
export const fetchPublicProductsStart = () => ({
    type: FETCH_PUBLIC_PRODUCTS_START,
});

export const fetchPublicProductsSuccess = (products) => ({
    type: FETCH_PUBLIC_PRODUCTS_SUCCESS,
    payload: products,
});

export const fetchPublicProductsFailure = (errorMessage) => ({
    type: FETCH_PUBLIC_PRODUCTS_FAILURE,
    payload: errorMessage,
});