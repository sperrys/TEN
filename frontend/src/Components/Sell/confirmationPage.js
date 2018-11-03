import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './confirmationPage.css';
import NavigationBar from './../NavigationBar/NavigationBar.js';
import Footer        from './../Footer/Footer.js'
//import searchicon from '../img/searchicon.png';

//import Crap from './'

class confirmationPage extends Component {

    render() {
        return (
        	<div>
        		<div class="back">
        			<a href="confirmationPage">&#60; BACK</a>
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
		  				<button id= "continuebutton"><a href="BuyCart">Continue</a></button>
		  			</div>
		  	    </div>
	        </div>
        );
    }
}

class App extends Component {
	render() {
		return(
			<div>
				<div className="BodyWrapper">
					<NavigationBar />
					<div className="confirmationPage" style={{backgroundColor: '#fff'}}>
						<confirmationPage
                            />
			 		</div>
                </div>
            <Footer position="relative" />
            </div>
        );
    }
}

export default App;