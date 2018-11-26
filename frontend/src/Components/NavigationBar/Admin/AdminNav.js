import React, { Component } from 'react';
import { ADMIN_HOME_ROUTE, ABOUT_ROUTE, BUY_FIND_ROUTE } from "../../index.js";
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
                <img id="Ten-Logo"src={ten} />
                <NavigationBarItem
                	float="left"
                	text="Textbook Exchange Network"
                    link={"/" + ADMIN_HOME_ROUTE}
                />
                <NavigationBarItem
                	float="right"
                	text="About"
                    link={"/" + ABOUT_ROUTE}
                />
                <NavigationBarItem
                	float="right"
                    text="PreSell"
                    /* TODO: add sell route here*/
                />
                <NavigationBarItem
                	float="right"
                    text="Browse"
                    link={"/" + BUY_FIND_ROUTE}
                />
            </div>
        );
    }
}

export default NavigationBar;
