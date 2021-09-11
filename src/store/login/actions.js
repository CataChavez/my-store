import { LOGIN_STORE_ERROR, LOGIN_STORE_INIT, LOGIN_STORE_SUCCESS } from "./types";

export const storeLogin = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_STORE_INIT });
    console.log(email, password)
    const loginSuccess = (email) => {    
      dispatch({ type: LOGIN_STORE_SUCCESS, payload: email });
    };
    const loginFail = (error) => {
      dispatch({ type: LOGIN_STORE_ERROR, payload: error });
    };
    
    try {
      fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }).then((response)=>{
        return response.json()
      }).then((dataStore)=>{
        if (dataStore.jwt){
          localStorage.jwt=dataStore.jwt
          console.log(localStorage.jwt)
          loginSuccess(email);
        }
        else
          loginFail(dataStore.error);
      })
    } catch (error) {
      loginFail(error);
    }
  };
};

