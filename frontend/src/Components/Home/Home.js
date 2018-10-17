import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './Home.css';
import NavigationBar from '../NavigationBar/NavigationBar.js'
import Footer from './Footer.js'

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
        return (
            <div>
            	<div className="HomeContent">
            		<NavigationBar />
                    <div className="HomeTitle">
                        Textbook Exchange Network
                    </div>
                    <div className="HomeSubtitle">
                        Looking to buy a textbook that isnt ridiculously expensive?
                        Want to sell a textbook that you no longer need?
                    </div>
                    <div className="HomeAffirmation">
                        Were here for you.
                    </div>
                    <div className="ButtonContainer">
                        <Button
                            text="Browse"
                            link="/browse"
                        />
                        <Button
                            text="Sell"
                            link="/sell"
                        />
                    </div>
    	        </div>
                <Footer position="fixed" />
            </div>
        );
    }
}

export default App;
