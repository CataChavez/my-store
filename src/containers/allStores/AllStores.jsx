import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllStoresNavbar from '../../components/allStoresNavbar/allStoresNavbar'
import LoginStore from '../../components/loginStore/LoginStore';
import ProductCard from '../../components/productCard/ProductCard';
import StoresCard from '../../components/storesCard/StoresCard';

const AllStores = () => {
    return(
        <Router>
            <Route path="/"><AllStoresNavbar/></Route>
        <Switch>
            <Route path="/loginstore" component={LoginStore}></Route>
            <div className="container">
                <div className="row row-cols-1 rows-cols-md-3 g-4">
                    <div className="col">
                        <Route path="/" component={StoresCard}></Route>
                    </div>
                </div>
                <div className="row row-cols1 rows-cols-md-3 g-4">
                    <div className="col">
                        <Route path="/store/:id/products" component={ProductCard}></Route>
                    </div>
                </div>
            </div>
        </Switch>
      </Router>

    )
}
export default AllStores;