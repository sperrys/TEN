import React, { Component } from 'react';
import './BuyFind.css';
import Footer from '../../Footer/Footer';
import AdminNav from './../../NavigationBar/Admin/AdminNav';
import textbookdiagram from '../../../assets/buy/temp-textbook-diagram.jpg';
import searchicon from '../../../assets/buy/searchicon.png';


class BuyFind extends Component {

    render() {
        return (
        	<div>
        		<AdminNav />
		      	<div class="vertcenter">

			      	<div class="horizflex">
			        	<h1 id="idTitle">Textbook ID Number:</h1>
			        	<form id = "searchID">
			        		<input type="text" name="textbookID" placeholder = "Search..."/>
			        	</form>
			        	<button id= "searchbutton" type="submit"><img id="searchimage" src={searchicon} alt="searchimg"/></button>
			        </div>
		        	<img id="textbookdiagram" src ={textbookdiagram} alt="textbook diagram"/>

	  	        </div>
                <Footer position="fixed"/>
	        </div>
        );
    }
}

export default BuyFind;
