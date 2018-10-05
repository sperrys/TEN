import React, { Component } from 'react';
import './App.css';

class NavigationBarItem extends Component {
    render() {
        return (
            <div className="NavigationBarItemContainer" style={{float: this.props.float}}>
                <a className="NavigationBarItemAnchor">
                    <div className="NavigationBarItemText">{this.props.text}</div>
                </a>
            </div>
        );
    }
}

class NavigationBar extends Component {
    render() {
        return (
            <div id="NavigationBarContainer">
                <NavigationBarItem float="left" text="Textbook Exchange Network" />
                <NavigationBarItem float="right" text="About" />
                <NavigationBarItem float="right" text="Sell" />
                <NavigationBarItem float="right" text="Browse" />
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <NavigationBar />
        );
    }
}

export default App;
