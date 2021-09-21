import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import ContextLogin from "../../store/login/context";

const PrivateRoute = ({component: Component, ...rest}) => {
  const contextLogin = useContext(ContextLogin)
  return contextLogin.isLogin ? (
    <Route 
      {...rest} 
      render={routeProps => (
        <Component {...routeProps} />
        )}
      />
    )  
    : <Redirect to='/' />;
};
export default PrivateRoute;
