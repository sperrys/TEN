import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import PreSell from './Components/Sell/Sell';
import BuyFind from './Components/Buy/BuyFind/BuyFind';
import BuyCart from './Components/Buy/BuyCart/BuyCart';
import BuyAddtoCart from './Components/Buy/BuyAddtoCart/BuyAddtoCart';


export const ROUTES = {
	user_home: '',
	admin_home: '/admin-home'
	about: 'about',
	presell: 'presell',
	buy: 'buy',
	cart: 'cart',
	addtocart: 'addtocart'
}

ReactDOM.render(
	<div className="BodyWrapper">
	    <Router>
	    	<Route exact path={"/" + ROUTES.user_home} component={Home}/>
	    </Router>
	    <Router>
	    	<Route exact path={"/" + ROUTES.about} component={About}/>
	    </Router>
		<Router>
	    	<Route exact path={"/" + ROUTES.presell} component={PreSell}/>
	    </Router>
		<Router>
	    	<Route exact path={"/" + ROUTES.buy} component={BuyFind}/>
	    </Router>
	    <Router>
	    	<Route exact path={"/" + ROUTES.cart} component={BuyAddtoCart}/>
	    </Router>
		<Router>
	    	<Route exact path={"/" + ROUTES.addtocart} component={BuyCart}/>
	    </Router>
    </div>, document.getElementById('root'));
registerServiceWorker();
