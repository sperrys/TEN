import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './has_presold.css';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../Footer/Footer.js';
import { ROUTES } from "../../index.js";
import GiraffeImage from '../../assets/giraffeBack.jpg';

class has_presold extends Component {
    render() {
    	const back = {
    		backgroundImage: 'url('+ GiraffeImage +')',
    	};

    	return(
    		<div class = "background" style = {back}>
	    		<div class = "vertflex">
	    			<h1 class = "question"> Seller has Presold? </h1>
	    		
	    			<div class="horizflex">
	    				<a href={"/" + ROUTES.admin_home}>
			  				<button id= "yesbutton">Yes</button>
			  			</a>
			  			<a href={"/" + ROUTES.admin_home}>
			  				<button id= "nobutton">No</button>
			  			</a>
			  			<NavigationBar />
			  		</div>
				</div>
			</div>
    		);
   	}
 }

export default has_presold;