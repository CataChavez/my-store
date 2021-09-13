import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';
import StoresCard from '../../components/storesCard/StoresCard';

const AllStores = () => {

    return(
        <Router>
        <Switch>
            <Route exact path="/store/:id/products" component={ProductCard}></Route>
            <Route exact path="/" component={StoresCard}></Route>
            

        </Switch>
      </Router>

    )
}
export default AllStores;