import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
<<<<<<< Updated upstream
import Sell from './Components/Sell/Sell';
=======
import confirmationPage from './Components/Sell/confirmationPage';

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
		<Router>
	      <Route exact path='/sell' component={Sell}/>
=======
	    <Router>
	      <Route exact path='/confirmation' component={confirmationPage}/>
>>>>>>> Stashed changes
	    </Router>
    </div>, document.getElementById('root'));
registerServiceWorker();
