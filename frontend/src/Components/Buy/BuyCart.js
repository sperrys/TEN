import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './BuyCart.css';
import NavigationBar from './../NavigationBar/NavigationBar.js';
import proofimg from '../../assets/proof.png';


class BuyCart extends Component {

    render() {
        return (
        	<div>
        		<NavigationBar />
        		<div class="back">
        			<a href="BuyAddtoCart">&#60; BACK</a>
        		</div>
                <div class="horizflex">
	            	<div class="vertflex border summary">
			      		<h3 >Order Summary</h3>
			      		<hr class="hrblack"/>
			      		<h3 >Author</h3>
			      		<h3 >Version</h3>
			      		<h3 >Condition</h3>
			      		<h3 >Textbook ID</h3>
				    </div>
				    <div class ="proof">
				    	<div class ="vertflex">
				    		<h1> Acceptable Venmo Proof </h1>
							<img id="proofimg" src={proofimg}/>
				    	</div>
				    </div>           	
                </div>
	        </div>
        );
    }
}

export default BuyCart;
