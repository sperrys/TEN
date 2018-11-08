import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserHome from './Components/Home/UserHome/UserHome';
import AdminHome from './Components/Home/AdminHome/AdminHome';
import About from './Components/About/About';
import PreSell from './Components/Sell/Sell';
import BuyFind from './Components/Buy/BuyFind/BuyFind';
import BuyCart from './Components/Buy/BuyCart/BuyCart';
import BuyAddtoCart from './Components/Buy/BuyAddtoCart/BuyAddtoCart';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router-dom'

ReactDOM.render(
	<div className="BodyWrapper">
	    <Router>
	      <Route exact path='/' component={UserHome}/>
	    </Router>
		<Router>
	      <Route exact path='/adminhome' component={AdminHome}/>
	    </Router>
	    <Router>
	      <Route exact path='/about' component={About}/>
	    </Router>
		<Router>
	      <Route exact path='/presell' component={PreSell}/>
	    </Router>
		<Router>
	      <Route exact path='/buy' component={BuyFind}/>
	    </Router>
	    <Router>
	      <Route exact path='/addtocart' component={BuyAddtoCart}/>
	    </Router>
		<Router>
	      <Route exact path='/cart' component={BuyCart}/>
	    </Router>

    </div>, document.getElementById('root'));
registerServiceWorker();
