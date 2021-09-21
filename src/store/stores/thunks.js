import {
    fetchStoresFailure,
    fetchStoresStart,
    fetchStoresSucces,
    updateStoreRequest,
    updateStoreSuccess,
    updateStoreFailure,

} from './actions';

//Fetch
export const fetchStoreStartThunk = () => {
    return async (dispatch, getState) => {
        const { stores } = getState();
        if ( stores.data.length > 1 ){ return }
        dispatch(fetchStoresStart());
        try {
            const response = await fetch("https://json-server-for-my-apps.herokuapp.com/store", {
                method:"GET"
            });
            const data = await response.json();
            dispatch(fetchStoresSucces(data));
            }
        catch (error){
            dispatch(fetchStoresFailure(error.message));
        }
    };
};


//update
export const updateStoreStartThunk = (store) => {
    return async (dispatch) => {
        dispatch(updateStoreRequest());
        try {
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer`
                },
                body: JSON.stringify(store),
            };
            const res = await fetch(`https://json-server-for-my-apps.herokuapp.com/${store.id}`,
                requestOptions
            )
            const data = await res.json()
            dispatch(updateStoreSuccess(data))
        } catch (error){
            dispatch(updateStoreFailure(error.message));
        }
    }
}

