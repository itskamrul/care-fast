import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HealthConcerns from './Components/HealthConcerns/HealthConcerns';
import Pruducts from './Components/Products/Pruducts';
import Header from './Components/Shared/Header/Header';
import NavBar from './Components/Shared/Navbar/NavBar';
import AllProduct from './Components/AllProduct/AllProduct';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path="/allProduct">
              <AllProduct></AllProduct>
            </PrivateRoute>
            <PrivateRoute path="/productDetails/:productID">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
