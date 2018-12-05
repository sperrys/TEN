import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './confirmationPage.css';
import NavigationBar from './../NavigationBar/NavigationBar.js';
import Footer        from './../Footer/Footer.js'
import { Router, Route } from 'react-router-dom';
//import searchicon from '../img/searchicon.png';

class ConfirmationPage extends Component {
    	//const data  = this.props.location
		
    render() {
        return (
        	<div>
        		<div class="back">
        		</div>
        		<div class="vertflex">
			      	<div class="border">
			      		<div class = "horizflex">
					      	<div class="vertflex">
					      		<h3 class="rightalign">color</h3>
					      		<h3 class="rightalign">Author</h3>
					      		<h3 class="rightalign">Version</h3>
					      		<h3 class="rightalign">Condition</h3>
					      		<h3 class="rightalign">Textbook ID</h3>
					      	</div>
					      	<div class="vertflex">
					      		<h5 id="booktitle">Intro to advanced descriteid adnc</h5>
					      		<h5 id="author">Miller, Philip</h5>
					      		<h5 id="version">5</h5>
					      		<h5 id="condition">great</h5>
					      		<h5 id="textbookid">1234-567-89</h5>
					      	</div>
				        </div>
		  	        </div>
		  			<div class="horizflex">
		  				<form action="/confirmation">
    						<input type="submit" value="Submit" />
						</form>
		  			</div>
		  	    </div>
	        </div>
        );
    }
}

class App extends Component {
	componentWillReceiveProps(nextProps) {
     if (nextProps.location !== this.props.location) {
       console.log('navigated to new page! data:', nextProps.location.state);
     }
  	}

	render() {
		return(
			<div>
				<div className="BodyWrapper">
					<NavigationBar />
					<div className="ConfirmationPage" style={{backgroundColor: '#fff'}}>
						<ConfirmationPage />
			 		</div>
               </div>
            <Footer position="fixed" />
            </div>
        );
    }
}

export default App;