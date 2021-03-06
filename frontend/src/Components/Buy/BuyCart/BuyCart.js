import React, { Component } from 'react';
import './BuyCart.css';
import { ROUTES } from "../../../index.js";
import AdminNav from './../../NavigationBar/Admin/AdminNav';
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
        		<AdminNav />
                {/* TODO: make this a button - currently make whole screen clickable*/}
        		<div class="back">
        			<a href={"/" + ROUTES.cart}>&#60; BACK</a>
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
