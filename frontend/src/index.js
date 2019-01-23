import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminLogin from './Components/AdminLogin/AdminLogin';
import Home from './Components/Home/Home';
import AdminHome from './Components/Home/AdminHome';
import About from './Components/About/About';
import PreSell from './Components/Sell/Sell';
import BrowseEdit from './Components/BrowseEdit/BrowseEdit';
import BuyFind from './Components/Buy/BuyFind/BuyFind';
import BuyCart from './Components/Buy/BuyCart/BuyCart';
import BuyAddtoCart from './Components/Buy/BuyAddtoCart/BuyAddtoCart';


export const ROUTES = {
	user_home: '',
	admin_home: 'admin-home',
	about: 'about',
	presell: 'presell',
	browse_edit: 'browse-edit',
	cart: 'cart',
	addtocart: 'addtocart',
	admin_login: 'admin-login'
}

ReactDOM.render(
	<div className="BodyWrapper">
	    <Router>
	    	<Route exact path={"/" + ROUTES.user_home} component={Home}/>
	    </Router>
		<Router>
	    	<Route exact path={"/" + ROUTES.admin_home} component={AdminHome}/>
	    </Router>
	    <Router>
	    	<Route exact path={"/" + ROUTES.about} component={About}/>
	    </Router>
		<Router>
	    	<Route exact path={"/" + ROUTES.presell} component={PreSell}/>
	    </Router>
		<Router>
	    	<Route exact path={"/" + ROUTES.browse_edit} component={BrowseEdit}/>
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
		<Router>
	    	<Route exact path={"/" + ROUTES.admin_login} component={AdminLogin}/>
	    </Router>
    </div>, document.getElementById('root'));
registerServiceWorker();
