import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './Home.css';
import NavigationBar from '../NavigationBar/NavigationBar.js'
import Footer from '../Footer/Footer.js';

import browseorig from '../../assets/browseorig.jpg';
import sellorig from '../../assets/sellorig.jpg';

class Button extends Component {
    render() {
        return (
            <a href={this.props.link}>
                <button className="BigButton">
                    {this.props.text}
                </button>
            </a>
        );
    }
}

class App extends Component {
    render() {

        const leftStyle = {
            backgroundImage: 'url('+ browseorig +')',
        };
        const rightStyle = {
            backgroundImage: 'url('+ sellorig +')',
        };

        return (
            <div className="HomeWrapper">
            	<div className="HomeContent">
                    <div className="HomeSection" style={leftStyle}>
                    </div>
                    <div className="HomeSection" style={rightStyle}>
                    </div>
            		<NavigationBar />
    	        </div>
                <Footer position="fixed" />
            </div>
        );
    }
}

export default App;
