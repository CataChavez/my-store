import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from "react-redux"
import './App.css';
import AllStoresNavbar from './components/allStoresNavbar/AllStoresNavbar';
import EditProduct from './components/editProduct/EditProduct';
import DeleteProduct from './components/deleteProduct/DeleteProduct'
import LoginForm from './components/loginForm/LoginForm';
import { Login } from './components/login/Login';
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import ProductCard from './components/productCard/ProductCard';
import StoresCard from './components/storesCard/StoresCard';
import ProductListTable from './components/productsListTable/ProductListTable'
import CreateProduct from './components/createProduct/CreateProduct'

function App() {
  const success = useSelector(state => state.login.success)
  return (
    <div className="App">
      <Router>
        <AllStoresNavbar />
        <Switch>
          <Route path="/" exact><StoresCard/></Route>    
          <Route path="/store/:id/products" exact><ProductCard/></Route>
          
          <Route path="/login" exact><LoginForm /></Route>

          <PrivateRoute path="/owner/:id/dashboard" exact isLogin={success}>
            <Login />   
            <div className="container-md">
              <div className="row justify-content-md-center ">
                <div className="col-7">
                  <ProductListTable />
                </div>
                <div className="col-md-auto">
                  <CreateProduct />
                </div>
              </div>
            </div>
          </PrivateRoute>

          <PrivateRoute path="/owner/:id/dashboard/edit/product/:productId" exact component={EditProduct} isLogin={success}/>
          <PrivateRoute path="/owner/:id/dashboard/delete/product/:productId" exact component={DeleteProduct} isLogin={success}/>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
