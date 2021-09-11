import {
    fetchProductsFailure,
    fetchProductsStart,
    fetchProductsSucces,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    createProductRequest,
    createProductSuccess,
    createProductFailure,  
    updateProductRequest,
    updateProductSuccess,
    updateProductFailure,

} from './actions';

//Fetch
export const fetchProductsStartThunk = () => {
    return async (dispatch, getState) => {
        const { stores } = getState();
        if ( stores.data.length > 1 ){ return }
        dispatch(fetchProductsStart());
        try {
            const response = await fetch("http://localhost:4000/products", {
                method:"GET"
            });
            const dataProducts = await response.json();
            dispatch(fetchProductsSucces(dataProducts));
            console.log(dataProducts)
            }
        catch (error){
            dispatch(fetchProductsFailure(error.message));
        }
    };
};

//Delete
export const deleteProductStartThunk = (id) => {
    return async (dispatch, getState) => {
        dispatch(deleteProductStart());
        try{
            const response = await fetch(`http://localhost:4000/products/${id}`, {
                method: 'DELETE'
            })
            const data = await response.json();
            dispatch(deleteProductSuccess(id))
        } catch (error) {
            dispatch(deleteProductFailure(error.message))
        }

    }
}

//Create
export const createProductStartThunk = (product) => { 
    return async (dispatch, getState) => {
        dispatch(createProductRequest());
        try {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify(product),
            };
            const res = await fetch("http://localhost:4000/products",
                requestOptions
            )
            const data = await res.json()
            dispatch(createProductSuccess(data))
        } catch (error){
            dispatch(createProductFailure(error.message));
        }
    }
}
//update
export const updateProductStartThunk = (product) => { 
    return async (dispatch) => {
        dispatch(updateProductRequest());
        try {
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify(product),
            };
            const res = await fetch(`http://localhost:4000/products${product.id}`,
                requestOptions
            )
            const data = await res.json()
            dispatch(updateProductSuccess(data))
        } catch (error){
            dispatch(updateProductFailure(error.message));
        }
    }
}

