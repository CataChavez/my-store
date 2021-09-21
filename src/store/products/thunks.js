import {
    fetchProductsFailure,
    fetchProductsStart,
    fetchProductsSuccess,
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
export const fetchProductsStartThunk = (id) => {
    return async (dispatch, getState) => {
        const { products } = getState()
        dispatch(fetchProductsStart());
        try {
            const response = await fetch(`https://json-server-for-my-apps.herokuapp.com/store/${id}/products`, {
                method:"GET"
            });
            const dataProducts = await response.json();
            dispatch(fetchProductsSuccess(dataProducts));

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
            const response = await fetch(`https://json-server-for-my-apps.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
            const dataProducts = await response.json();
            dispatch(deleteProductSuccess(id))
        } catch (error) {
            dispatch(deleteProductFailure(error.message))
        }

    }
}

//Create
export const createProductStartThunk = ({ product_name, description, price, stock, product_img, storeId }) => { 
    const product = { product_name, description, price, stock, product_img, storeId }
    console.log(product)
    return async (dispatch) => {
            dispatch(createProductRequest());
            try {
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify(product) 
            };
            const res = await fetch("https://json-server-for-my-apps.herokuapp.com/products", requestOptions)
            const dataProducts = await res.json()
            dispatch(createProductSuccess(dataProducts))
                 
        } catch (error){
            dispatch(createProductFailure(error.message));
        
        }
    }
}
//update
export const updateProductStartThunk = ({id, product_name, description, price, stock, product_img, storeId }) => { 
    const product = { product_name, description, price, stock, product_img, storeId }
    return async (dispatch) => {
        dispatch(updateProductRequest());
        try {
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json; charset=UTF-8", },
                body: JSON.stringify(product),
            };
            const res = await fetch(`https://json-server-for-my-apps.herokuapp.com/products/${id}`,
                requestOptions
            )

            const dataProducts = await res.json()
            dispatch(updateProductSuccess(dataProducts))
        } catch (error){
            dispatch(updateProductFailure(error.message));
        }
    }
}

