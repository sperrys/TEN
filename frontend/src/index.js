import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Sell from './Components/Sell/Sell';
import confirmationPage from './Components/Sell/confirmationPage';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router-dom' 
=======
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserHome from './Components/Home/UserHome/UserHome';
import AdminHome from './Components/Home/AdminHome/AdminHome';
import About from './Components/About/About';
import PreSell from './Components/Sell/Sell';
import BuyFind from './Components/Buy/BuyFind/BuyFind';
import BuyCart from './Components/Buy/BuyCart/BuyCart';
import BuyAddtoCart from './Components/Buy/BuyAddtoCart/BuyAddtoCart';

export const USER_HOME_ROUTE = "";
export const ADMIN_HOME_ROUTE = "adminhome";
export const ABOUT_ROUTE = "about";
export const PRESELL_ROUTE = "presell";
export const BUY_FIND_ROUTE = "buy";
export const BUY_CART_ROUTE = "cart";
export const BUY_ADD_CART_ROUTE = "addtocart";
>>>>>>> b5858d5d969503a0e4bfb9b437fe739676965b76

ReactDOM.render(
	<div className="BodyWrapper">
	    <Router>
	      <Route exact path={"/" + USER_HOME_ROUTE} component={UserHome}/>
	    </Router>
		<Router>
	      <Route exact path={"/" + ADMIN_HOME_ROUTE} component={AdminHome}/>
	    </Router>
	    <Router>
	      <Route exact path={"/" + ABOUT_ROUTE} component={About}/>
	    </Router>
		<Router>
	      <Route exact path={"/" + PRESELL_ROUTE} component={PreSell}/>
	    </Router>
<<<<<<< HEAD
	    <Router>
	      <Route exact path={"/" + PRESELL_ROUTE} component={confirmationPage}/>
	    </Router>
=======
		<Router>
	      <Route exact path={"/" + BUY_FIND_ROUTE} component={BuyFind}/>
	    </Router>
	    <Router>
	      <Route exact path={"/" + BUY_ADD_CART_ROUTE} component={BuyAddtoCart}/>
	    </Router>
		<Router>
	      <Route exact path={"/" + BUY_CART_ROUTE} component={BuyCart}/>
	    </Router>

>>>>>>> b5858d5d969503a0e4bfb9b437fe739676965b76
    </div>, document.getElementById('root'));
registerServiceWorker();
