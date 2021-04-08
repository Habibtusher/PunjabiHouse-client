import logo from './logo.svg';
import './App.css';
import AddProduct from './Components/AddProducts/AddProduct';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useHistory
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Manage from './Components/Manage/Manage';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ProductList from './Components/ProductList/ProductList';
import Order from './Components/Order/Order';


export const UserContext = createContext();


function App() {


  const [loggedInUser, setLoggedInUser] = useState({});



  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="container main">
          <div className="row">
            <nav className="header col-md-9 col-sm-12">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
                <li>
                  <Link to="/deals">Deals</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>

            <div className="name col-md-3 col-sm-12">
              <h3 style={{ color: 'primary', fontFamily: "Arial, Helvetica, sans-serif" }}>Punjabi House</h3>
            </div>
          </div>
        </div>



        <Switch>
          <PrivateRoute path="/admin">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <Manage></Manage>
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/orders">
            <Order> </Order>
          </PrivateRoute>
          <PrivateRoute path="/productList/:id">
            <ProductList></ProductList>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
