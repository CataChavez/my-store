import ProductListTable from '../../components/productsListTable/ProductListTable'
import CreateProduct from '../../components/createProduct/CreateProduct'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const OwnerDashboard = () => {

    return(
        <Router>
        <Switch>
        <div className="container-fluid">
            <div className="row">
                <div className="col-7">
                    <Route path="/owner/:id" exact><ProductListTable /></Route>
                    
                </div>
                <div className="col-5">
                    <Route path="/owner/:id" exact><CreateProduct /></Route>
                </div>
            </div>
        </div>
        </Switch>

        </Router>

    )
}
export default OwnerDashboard;