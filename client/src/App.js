import React,{useState} from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import FormCategories from './components/FormCategories/FormCategories';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from 'axios';
import Catalogo from "./components/Catalogo";
import CrudShow from "./components/CrudProducts/CrudShow";
import AdminProducts from "./components/AdminProducts/AdminProducts";
import LandingPage from './components/LandingPage';
import PrductsMati from './components/ProductsMati';
import Footer from './components/Footer';
import NavbarAdmin from './components/NavbarAdmin';
import Login from "./components/Login";
import SignUp from "./components/SignUp";


import store from './store';
import { Provider } from 'react-redux';

function App() {
  
  return (
    <div>
      <Provider store={store}>
      <Router> 
<<<<<<< HEAD
       
        <Route path="/user" render={() => <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />}/>
=======
        <Route path="/user" render={() => <SearchBar />}/>
>>>>>>> 3a945342c08da6c8667031d8e12f3b652d8437fe
        <Route path="/admin" component={NavbarAdmin} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/user/catalogo"
          render={() => <Catalogo />}
        />
        <Route exact path="/admin/categories" component={FormCategories} />
        {/* <Route exact path="/admin/producto" component={CrudShow} /> */}
        <Route exact path="/admin/product" component={AdminProducts} />
        <Route exact path="/user/product/:id" component={PrductsMati} />
        <Route path="/user" component={Footer} />
        <Route path="/SignIn" component={Login} />
        <Route path="/SignUp" component={SignUp} />
      </Router>
      </Provider>
    </div>
  );
}

export default App;