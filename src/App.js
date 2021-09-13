import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from "react-redux"
import './App.css';
import AllStoresNavbar from './components/allStoresNavbar/AllStoresNavbar';
import AllStores from './containers/allStores/AllStores';
import EditProduct from './components/editProduct/EditProduct';
import DeleteProduct from './components/deleteProduct/DeleteProduct'
import LoginForm from './components/loginForm/LoginForm';
import { Login } from './components/login/Login';
import OwnerDashboard from './containers/ownerDashboard/OwnerDashboard';
import PrivateRoute from "./components/privateRoute/PrivateRoute";



function App() {
  const success = useSelector(state => state.login.success)
  return (
    <div className="App">
      <Router>
        <AllStoresNavbar />
        <Switch>
          <Route path="/" exact><AllStores /></Route>
          <Route path="/login" exact><LoginForm /></Route>
          <PrivateRoute path="/owner/:id" exact component={Login} isLogin={success}/>
          <PrivateRoute path="/owner/:id/dashboard" exact component={OwnerDashboard} isLogin={success}/>
          <PrivateRoute path="/owner/product/edit/:id" exact component={EditProduct} isLogin={success}/>
          <PrivateRoute path="/owner/product/delete/:id" exact component={DeleteProduct} isLogin={success}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
