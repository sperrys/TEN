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
                    link={"/" + ROUTES.STUDENT_HOME}
                />
                <NavigationBarItem
                	float="right"
                	text="About"
                    link={"/" + ROUTES.ABOUT}
                />
                <NavigationBarItem
                	float="right"
                    text="PreSell"
                    link={"/" + ROUTES.PRESELL}
                />
                <NavigationBarItem
                	float="right"
                    text="Browse"
                    /* TODO: add browse route here*/
                />
            </div>
        );
    }
}

export default NavigationBar;
