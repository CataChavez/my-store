import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer";
import productsReducer from "./products/productsReducer";
import storesReducer from "./stores/storesReducer";
import publicProductsReducer from "./publicProducts/publicProductsReducer"


const rootReducer = combineReducers({
    stores: storesReducer,
    products: productsReducer,
    login: loginReducer,
    publicProducts: publicProductsReducer
})

export default rootReducer;
