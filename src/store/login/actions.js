import { LOGIN_STORE_ERROR, 
  LOGIN_STORE_INIT, 
  LOGIN_STORE_SUCCESS,
} from "./types";


export const storeLogin = ({ email, password }, cb) => {
  return (dispatch, getState) => {
    dispatch({ type: LOGIN_STORE_INIT });

    const loginSuccess = (email, id, storeId) => {    
      dispatch({ type: LOGIN_STORE_SUCCESS, payload: { email, id, storeId } });
    };

    const loginFail = (error) => {
      dispatch({ type: LOGIN_STORE_ERROR, payload: error });
    };
    
    try {
      fetch("https://json-server-for-my-apps.herokuapp.com/login", {
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
      }).then((data)=>{
        console.log(data)
        if (data.accessToken){
          localStorage.accessToken=data.accessToken
          
          loginSuccess(email, data.user.id, data.user.storeId);
          cb(getState().login.data.id)
          cb(getState().login.data.storeId)

        } else loginFail(data.error);
      })
    } catch (error) {
      loginFail(error);
    }
  };
};

