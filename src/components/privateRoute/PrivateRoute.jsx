import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";



const PrivateRoute = ({component: Component, isLogin, ...Rest}) => {
  //const isLogin = useSelector((state) => state.login.isLogin)
  return isLogin ? <Route {...Rest} render={routeProps=><Component {...routeProps}/>}  /> : <Redirect to={`/login`} />;
};
export default PrivateRoute;
