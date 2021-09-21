import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import {useSelector} from 'react-redux'


function App() {
  const isLogin = useSelector(state => state.login.success)

  return (
    <div className="App">
      <Router>
        <AllStoresNavbar />
        <Switch>
          <Route path="/" exact><StoresCard/></Route>    
          <Route path="/store/:id/products" exact><ProductCard/></Route>
          
          <Route path="/login" exact component={LoginForm}></Route>
        
          <PrivateRoute path="/owner/dashboard" isLogin={isLogin}> 
            <Login />
            <ProductListTable />    
          </PrivateRoute>
          <PrivateRoute path="/owner/create" exact isLogin={isLogin} component={CreateProduct} />
          <PrivateRoute path="/owner/edit/:id" exact isLogin={isLogin}  component={EditProduct} />
          <PrivateRoute path="/owner/delete/:id" exact isLogin={isLogin} component={DeleteProduct}  />

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
