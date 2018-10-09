import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './Home.css';
import NavigationBar from './NavigationBar.js'

class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <div>This is our home page!</div>
            </div>
        );
    }
}

export default App;
