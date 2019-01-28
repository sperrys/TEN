import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './Home.css';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import { ROUTES } from "../../index.js";
//import Footer from '../Footer/Footer.js';

import LeftImage from '../../assets/left-image.jpg';
import RightImage from '../../assets/right-image.jpg';

class App extends Component {
    render() {

        const leftStyle = {
            backgroundImage: 'url('+ LeftImage +')',
        };
        const rightStyle = {
            backgroundImage: 'url('+ RightImage +')',
        };

        return (
            <div className="HomeWrapper">
            	<div className="HomeContent">
                    <div className="HomeSection" style={leftStyle}>
                        <a href={"/" + ROUTES.browse}>
                            <div className="HomeTitle">
                                <div className="HomeTitleText">Browse Textbooks</div>
                            </div>
                        </a>
                    </div>
            		<NavigationBar />
    	        </div>
            </div>
        );
    }
}

export default App;
