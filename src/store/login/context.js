import { createContext } from "react";

const ContextLogin = createContext({
    isLogin: localStorage.getItem('accessToken'),
    logIn: (email, cb) => {},
    logOut: () => {},
})

export default ContextLogin