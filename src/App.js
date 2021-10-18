import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HealthConcerns from './Components/HealthConcerns/HealthConcerns';
import Pruducts from './Components/Products/Pruducts';
import Header from './Components/Shared/Header/Header';
import NavBar from './Components/Shared/Navbar/NavBar';
import AllProduct from './Components/AllProduct/AllProduct';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <HealthConcerns></HealthConcerns>
            <Pruducts></Pruducts>
          </Route>
          <Route path="/home">
            <Header></Header>
            <HealthConcerns></HealthConcerns>
            <Pruducts></Pruducts>
          </Route>
          <Route path="/allProduct">
            <AllProduct></AllProduct>
          </Route>
          <Route path="/productDetails/:productID">
            <ProductDetails></ProductDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
