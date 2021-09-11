import {
    FETCH_STORES_START,
    FETCH_STORES_SUCCESS,
    FETCH_STORES_FAILURE,
    UPDATE_STORE_FAILURE,
    UPDATE_STORE_SUCCESS,
    UPDATE_STORE_REQUEST,
} from './constants';

import { storeIndex } from '../storeIndex'

//fetch
export const fetchStoresStart = () => ({
    type: FETCH_STORES_START,
});

export const fetchStoresSucces = (stores) => ({
    type: FETCH_STORES_SUCCESS,
    payload: stores,
});

export const fetchStoresFailure = (errorMessage) => ({
    type: FETCH_STORES_FAILURE,
    payload: errorMessage,
});

//Update
export const updateStoreRequest = () => ({
    type: UPDATE_STORE_REQUEST,
})

export const updateStoreSuccess = (editedStore) => { // este llego de afuera
    const { stores : tiendas } = storeIndex.getState()//obtenemos los stores como "stores", del store en este caso del index
    const stores = tiendas.data // renombramos stores un nuevo arreglo?
    const  indexEdit = stores.findIndex(store => store.id === editedStore.id) //buscamos el usuario que hay que manipular donde el id sea igual al de usuario que llega
    stores[indexEdit] = editedStore
    return ({
        type: UPDATE_STORE_SUCCESS,
        payload: stores
    })
}

export const updateStoreFailure = (errorMessage) => ({
    type: UPDATE_STORE_FAILURE,
    payload: errorMessage,
});

