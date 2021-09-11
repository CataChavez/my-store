import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer";
import productsReducer from "./products/productsReducer";
import storesReducer from "./stores/storesReducer";


const rootReducer = combineReducers({
    stores: storesReducer,
    products: productsReducer,
    login: loginReducer
})

export default rootReducer;