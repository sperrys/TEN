import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserHome from './Components/Home/UserHome/UserHome';
import AdminHome from './Components/Home/AdminHome/AdminHome';
import About from './Components/About/About';
import PreSell from './Components/Sell/Sell';
import BuyFind from './Components/Buy/BuyFind/BuyFind';
import BuyCart from './Components/Buy/BuyCart/BuyCart';
import BuyAddtoCart from './Components/Buy/BuyAddtoCart/BuyAddtoCart';
import BuySummary from './Components/Buy/BuySummary/BuyAddtoCart';

export const USER_HOME_ROUTE = "";
export const ADMIN_HOME_ROUTE = "adminhome";
export const ABOUT_ROUTE = "about";
export const PRESELL_ROUTE = "presell";
export const BUY_FIND_ROUTE = "buy";
export const BUY_CART_ROUTE = "cart";
export const BUY_ADD_CART_ROUTE = "addtocart";
export const BUY_SUMMARY_ROUTE = "buysummary";

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
		<Router>
	      <Route exact path={"/" + BUY_FIND_ROUTE} component={BuyFind}/>
	    </Router>
	    <Router>
	      <Route exact path={"/" + BUY_ADD_CART_ROUTE} component={BuyAddtoCart}/>
	    </Router>
		<Router>
	      <Route exact path={"/" + BUY_CART_ROUTE} component={BuyCart}/>
	    </Router>
	    <Router>
	      <Route exact path={"/" + BUY_SUMMARY_ROUTE} component={BuySummary}/>
	    </Router>

    </div>, document.getElementById('root'));
registerServiceWorker();
