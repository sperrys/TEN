import React, { Component } from 'react';
import './BuyCart.css';
import { BUY_ADD_CART_ROUTE } from "../../../index.js";
import NavigationBar from './../../NavigationBar/NavigationBar.js';
import proofimg from '../../../assets/buy/proof.png';
import BuyCartItem from '../../../assets/buy/BuyCartItem/BuyCartItem.js'

class BuyCart extends Component {

    render() {
        return (
        	<div>
        		<NavigationBar />
                {/* TODO: make this a button - currently make whole screen clickable*/}
        		<div class="back">
        			<a href={"/" + BUY_ADD_CART_ROUTE}>&#60; BACK</a>
        		</div>
                <div class="horizflex">
	            	<div class="vertflex cartborder summary">
			      		<h3 id="order">Order Summary</h3>
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
				    </div>
				    <div class ="proof">
				    	<div class ="vertflex vertcenter venmo">
				    		<h1> Acceptable Venmo Proof </h1>
							<img id="proofimg" src={proofimg} alt="proof img"/>
							<button id= "approve">{/* TODO: Link to Buy Thanks page*/}Approve Transaction</button>
				    	</div>
				    </div>
                </div>
	        </div>
        );
    }
}

export default BuyCart;
