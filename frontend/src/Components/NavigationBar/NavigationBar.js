import React, { Component } from 'react';
import { USER_HOME_ROUTE, ABOUT_ROUTE, PRESELL_ROUTE } from "../../index.js";
import './NavigationBar.css';

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
                <NavigationBarItem
                	float="left"
                	text="Textbook Exchange Network"
                    link={"/" + USER_HOME_ROUTE}
                />
                <NavigationBarItem
                	float="right"
                	text="About"
                    link={"/" + ABOUT_ROUTE}
                />
                <NavigationBarItem
                	float="right"
                    text="PreSell"
                    link={"/" + PRESELL_ROUTE}
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
