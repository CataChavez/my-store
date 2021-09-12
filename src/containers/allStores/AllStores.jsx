import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from '../../components/loginForm/LoginForm';
import ProductCard from '../../components/productCard/ProductCard';
import StoresCard from '../../components/storesCard/StoresCard';

const AllStores = () => {

    return(
        <Router>
        <Switch>

            <Route exact path="/store/:id/products"><ProductCard/></Route>
            <Route exact path="/" component={StoresCard}></Route>
            
            <Route exact path="/login">{LoginForm}</Route>            
  
        </Switch>
      </Router>

    )
}
export default AllStores;