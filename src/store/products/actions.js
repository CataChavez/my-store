import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_START,
    CREATE_PRODUCT_FAILURE,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_REQUEST,
} from './constants';

import { storeIndex } from '../storeIndex'

//fetch
export const fetchProductsStart = () => ({
    type: FETCH_PRODUCTS_START,
});

export const fetchProductsSucces = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const fetchProductsFailure = (errorMessage) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: errorMessage,
});

//delete
export const deleteProductStart = () => ({
    type: DELETE_PRODUCT_START
})

export const deleteProductSuccess = (id) => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: id,
})

export const deleteProductFailure = (errorMessage) => ({
    type: DELETE_PRODUCT_FAILURE,
    payload: errorMessage,
})

//create
export const createProductRequest = () => ({
    type: CREATE_PRODUCT_REQUEST,
})

export const createProductSuccess = (product) => ({ // envía el usuario en el payload
    type: CREATE_PRODUCT_SUCCESS,
    payload: product
})

export const createProductFailure = (errorMessage) => ({
    type: CREATE_PRODUCT_FAILURE,
    payload: errorMessage,
});

//Update
export const updateProductRequest = () => ({
    type: UPDATE_PRODUCT_REQUEST,
})

export const updateProductSuccess = (editedProduct) => { // este llego de afuera
    const { products : productos } = storeIndex.getState()//obtenemos los products como "productos", del store en este caso del index
    const products = productos.data // renombramos products un nuevo arreglo?
    const  indexEdit = products.findIndex(note => note.id === editedProduct.id) //buscamos el usuario que hay que manipular donde el id sea igual al de usuario que llega
    products[indexEdit] = editedProduct
    return ({
        type: UPDATE_PRODUCT_SUCCESS,
        payload: products
    })
}

export const updateProductFailure = (errorMessage) => ({
    type: UPDATE_PRODUCT_FAILURE,
    payload: errorMessage,
});

