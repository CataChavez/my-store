import ProductListTable from '../../components/productsListTable/ProductListTable'
import CreateProduct from '../../components/createProduct/CreateProduct'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Owner = () => {

    return(
        <Router>
        <Switch>
        <div className="container-fluid">
            <div className="row">
                <div className="col-7">
                    <Route path="/owner"><ProductListTable /></Route>
                    
                </div>
                <div className="col-5">
                    <Route path="/owner"><CreateProduct /></Route>
                </div>
            </div>
        </div>
        </Switch>
        </Router>

    )
}
export default Owner;