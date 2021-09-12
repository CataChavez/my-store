import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AllStoresNavbar from './components/allStoresNavbar/AllStoresNavbar';
import AllStores from './containers/allStores/AllStores';
import Owner from './containers/owner/Owner';
import EditProduct from './components/editProduct/EditProduct';
import DeleteProduct from './components/deleteProduct/DeleteProduct'


function App() {
  return (
    <div className="App">
      <Router>
        <AllStoresNavbar />
        <Switch>
          <Route path="/" exact><AllStores/></Route>
          <Route path="/owner/:id" exact><Owner/></Route>
          <Route path="/owner/product/edit/:id"><EditProduct/></Route>
          <Route path="/owner/product/delete/:id"><DeleteProduct/></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
