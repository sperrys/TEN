import React, { Component } from 'react';
import './BuyAddtoCart.css';
import { ROUTES } from '../../../index.js';
import NavigationBar from './../../NavigationBar/NavigationBar.js';

class BuyFind extends Component {

    render() {
        return (
        	<div>
        		<NavigationBar />
                {/* TODO: make this a button - currently make whole screen clickable*/}
        		<div class="back">
        			<a href={"/" + ROUTES.BUY_FIND}>&#60; BACK</a>
        		</div>
        		<div class="vertflex">
			      	<div class="border">
			      		<div class = "horizflex item">
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
		  				<button id= "addtocartbutton"><a href={"/" + ROUTES.BUY_CART}>Add to Cart</a></button>
		  			</div>
		  	    </div>
	        </div>
        );
    }
}

export default BuyFind;
