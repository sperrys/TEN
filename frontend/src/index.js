import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router-dom'

ReactDOM.render(
	<div className="BodyWrapper">
	    <Router>
	      <Route exact path='/' component={Home}/>
	    </Router>
	    <Router>
	      <Route exact path='/about' component={About}/>
	    </Router>
	    <Router>
	      <Route exact path='/adminlogin' component={AdminLogin}/>
	    </Router>
    </div>, document.getElementById('root'));
registerServiceWorker();
