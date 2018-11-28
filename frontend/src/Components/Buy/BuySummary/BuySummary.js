import React, { Component } from 'react';
import './BuySummary.css';
import { BUY_CART_ROUTE, BUY_FIND_ROUTE } from '../../../index.js';
import NavigationBar from './../../NavigationBar/NavigationBar.js';
import BuyCartItem from '../BuyCartItem/BuyCartItem.js'

class BuySummary extends Component {

    render() {
        return (
        	<div>
        		<NavigationBar />
                {/* TODO: make this a button - currently make whole screen clickable*/}
        		<div class="back">
        			<a href={"/" + BUY_FIND_ROUTE}>&#60; BACK</a>
        		</div>
        		<div class="vertflex">
        			<p>Cart</p>
        			<BuyCartItem
		      			price="$100"
		      			venmo="@TuftsTextbookVENMO"
            			title="Intro to Advanced Data Science"
            		/>
		      		<BuyCartItem
		      			price="$100"
		      			venmo="@TuftsTextbookVENMO"
            			title="Intro to Advanced Data Science"
            		/>
		  			<div class="horizflex">
		  				<button id= "addtocartbutton"><a href={"/" + BUY_CART_ROUTE}>Add to Cart</a></button>
		  			</div>
		  	    </div>
	        </div>
        );
    }
}

export default BuySummary;