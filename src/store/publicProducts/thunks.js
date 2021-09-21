import {
    fetchPublicProductsFailure,
    fetchPublicProductsStart,
    fetchPublicProductsSuccess,
} from './actions';

//Fetch
export const fetchPublicProductsStartThunk = (id) => {
    return async (dispatch, getState) => {
        const { publicProducts } = getState()
        dispatch(fetchPublicProductsStart());
        try {
            const response = await fetch(`https://json-server-for-my-apps.herokuapp.com/store/${id}/products`, {
                method:"GET"
            });
            const dataPublicProducts = await response.json();
            dispatch(fetchPublicProductsSuccess(dataPublicProducts));

            }
        catch (error){
            dispatch(fetchPublicProductsFailure(error.message));
        }
    };
};

