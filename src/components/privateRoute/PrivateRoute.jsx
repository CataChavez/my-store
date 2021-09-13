import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";



const PrivateRoute = ({component: Component, isLogin, ...Rest}) => {
  const userId= useSelector(state => state.login.data.id)
  // const isLogin = useSelector((state:any) => state.login.isLogin)
  return isLogin ? <Route {...Rest} render={routeProps=><Component {...routeProps}/>}  /> : <Redirect to={`/owner/${userId}`} />;
};
export default PrivateRoute;
