import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './BuyFind.css';
import NavigationBar from './../NavigationBar/NavigationBar.js';
import textbookdiagram from '../../assets/temp-textbook-diagram.jpg';
import searchicon from '../../assets/searchicon.png';


class BuyFind extends Component {

    render() {
        return (
        	<div>
        		<NavigationBar />
		      	<div class="vertcenter">

			      	<div class="horizflex">
			        	<h1 id="idTitle">Textbook ID Number:</h1>
			        	<form id = "searchID">
			        		<input type="text" name="textbookID" placeholder = "Search..."/>
			        	</form>
			        	<button id= "searchbutton" type="submit"><img id="searchimage" src={searchicon}/></button>
			        </div>
		        	<img id="textbookdiagram" src ={textbookdiagram} alt="textbook diagram"/>
	  	        
	  	        </div>
	        </div>
        );
    }
}

export default BuyFind;
