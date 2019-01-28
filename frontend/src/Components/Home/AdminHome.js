import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './Home.css';
import AdminNav from '../NavigationBar/Admin/AdminNav';
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
                        <a href={"/" + ROUTES.buy}>
                            <div className="HomeTitle">
                                <div className="HomeTitleText">Buy Textbooks</div>
                            </div>
                        </a>
                    </div>
                    <div className="HomeSection" style={rightStyle}>
                        <a href={"/" + ROUTES.sell}>
                            <div className="HomeTitle">
                                <div className="HomeTitleText">Sell Textbooks</div>
                            </div>
                        </a>
                    </div>
            		<AdminNav />
    	        </div>
            </div>
        );
    }
}

export default App;
