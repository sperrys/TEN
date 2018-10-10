import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './Home.css';
import NavigationBar from './NavigationBar.js'

class App extends Component {
    render() {
        return (
        	<div>
        		<NavigationBar />
		      	<div class="vertcenter">
		        	<h1 id= "title"> Tufts Textbook Exchange </h1>
		            <div class="horizflex">
		                <button><a href="browse.html">Browse</a></button>
		                <button><a href="studentsell.html">Sell</a></button>      
		            </div>
	  	        </div>
	        </div>
        );
    }
}

export default App;
