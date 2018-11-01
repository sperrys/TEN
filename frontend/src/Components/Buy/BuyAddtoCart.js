import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './BuyAddtoCart.css';
import NavigationBar from './../NavigationBar/NavigationBar.js';

import searchicon from '../../assets/searchicon.png';


class BuyFind extends Component {

    render() {
        return (
        	<div>
        		<NavigationBar />
        		<div class="back">
        			<a href="buy">&#60; BACK</a>
        		</div>
        		<div class="vertflex">
			      	<div class="border">
			      		<div class = "horizflex">
					      	<div class="vertflex">
					      		<h3 class="rightalign">Book Title</h3>
					      		<h3 class="rightalign">Author</h3>
					      		<h3 class="rightalign">Version</h3>
					      		<h3 class="rightalign">Condition</h3>
					      		<h3 class="rightalign">Textbook ID</h3>
					      	</div>
					      	<div class="vertflex">
					      		<h5 id="booktitle">Intro to advanced descriteid adnc</h5>
					      		<h5 id="author">Miller, Philip</h5>
					      		<h5 id="version">5</h5>
					      		<h5 id="condition">Great</h5>
					      		<h5 id="textbookid">1234-567-89</h5>
					      	</div>
				        </div>
		  	        </div>
		  			<div class="horizflex">
		  				<button id= "addtocartbutton"><a href="BuyCart">Add to Cart</a></button>
		  			</div>
		  	    </div>
	        </div>
        );
    }
}

export default BuyFind;
