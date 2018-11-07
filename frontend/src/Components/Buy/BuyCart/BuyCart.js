import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './BuyCart.css';
import NavigationBar from './../../NavigationBar/NavigationBar.js';
import proofimg from '../../../assets/buy/proof.png';


class BuyCartItem extends Component {
    render() {
        return (
        	<div>
        		<hr class="hrblack"/>
				<table>
					<tr>
						<td>{this.props.price}</td>
						<td>TO</td>
		  				<td>{this.props.venmo}</td>
					</tr>
					<tr>
						<td></td>
						<td>FOR</td>
						<td>{this.props.title}</td>
					</tr>
				</table>

			</div>
        );
    }
}

class BuyCart extends Component {

    render() {
        return (
        	<div>
        		<NavigationBar />
        		<div class="back">
        			<a href="BuyAddtoCart">&#60; BACK</a>
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
							<img id="proofimg" src={proofimg}/>
							<button id= "approve"><a href="BuyThanks">Approve Transaction</a></button>
				    	</div>
				    </div>
                </div>
	        </div>
        );
    }
}

export default BuyCart;
