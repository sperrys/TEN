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

export const ROUTES = {
	STUDENT_HOME: '',
	VOLUNTEER_HOME: 'adminhome',
	ABOUT: 'about',
	PRESELL: 'presell',
	BUY_FIND: 'buy',
	BUY_CART: 'cart',
	BUY_ADD_CART: 'addtocart'
}

ReactDOM.render(
	<div className="BodyWrapper">
	    <Router>
	      <Route exact path={"/" + ROUTES.STUDENT_HOME} component={UserHome}/>
	    </Router>
		<Router>
	      <Route exact path={"/" + ROUTES.VOLUNTEER_HOME} component={AdminHome}/>
	    </Router>
	    <Router>
	      <Route exact path={"/" + ROUTES.ABOUT} component={About}/>
	    </Router>
		<Router>
	      <Route exact path={"/" + ROUTES.PRESELL} component={PreSell}/>
	    </Router>
		<Router>
	      <Route exact path={"/" + ROUTES.BUY_FIND} component={BuyFind}/>
	    </Router>
	    <Router>
	      <Route exact path={"/" + ROUTES.BUY_ADD_CART} component={BuyAddtoCart}/>
	    </Router>
		<Router>
	      <Route exact path={"/" + ROUTES.BUY_CART} component={BuyCart}/>
	    </Router>

    </div>, document.getElementById('root'));
registerServiceWorker();
