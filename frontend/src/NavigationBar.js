import React, { Component } from 'react';
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
                	link="/"
                />
                <NavigationBarItem
                	float="right"
                	text="About"
                	link="/about"
                />
                <NavigationBarItem
                	float="right"
                	text="Sell"
                	link="/sell"
                />
                <NavigationBarItem
                	float="right"
                	text="Buy"
                	link="/buy"
                />
            </div>
        );
    }
}

export default NavigationBar;
