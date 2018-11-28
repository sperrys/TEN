import React, { Component } from 'react';
import { ROUTES } from "../../index.js";
import './NavigationBar.css';
import ten from '../../assets/ten-logo.png';

class NavigationBarItem extends Component {
    render() {
        return (
            <div className="NavigationBarItemContainer" style={{float: this.props.float}}>
                <a href={this.props.link} className="NavigationBarItemAnchor">
                    <div className="NavigationBarItemText">{this.props.text}</div>
                </a>
            </div>
        );
    }
}

class NavigationBar extends Component {
    render() {
        return (
            <div className="NavigationBarContainer">
                <img id="Ten-Logo"src={ten} alt="ten-logo"/>
                <NavigationBarItem
                	float="left"
                	text="Textbook Exchange Network"
                    link={"/" + ROUTES.home}
                />
                <NavigationBarItem
                	float="right"
                	text="About"
                    link={"/" + ROUTES.about}
                />
                <NavigationBarItem
                	float="right"
                    text="Pre-sell"
                    link={"/" + ROUTES.presell}
                />
                <NavigationBarItem
                	float="right"
                	text="Browse"
                	link="/browse"
                />
            </div>
        );
    }
}

export default NavigationBar;
