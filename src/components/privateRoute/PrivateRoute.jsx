import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({component: Component, isLogin, ...Rest}) => {
  // const isLogin = useSelector((state:any) => state.login.isLogin)
  return isLogin ? <Route {...Rest} render={routeProps=><Component {...routeProps}/>}  /> : <Redirect to="/owner" />;
};

export default PrivateRoute;
