import React, { Component } from 'react';
import './UserHome.css';
import NavigationBar from '../../NavigationBar/NavigationBar.js';
import browseorig from '../../../assets/img/browseorig.jpg';
import sellorig from '../../../assets/img/sellorig.jpg';

class App extends Component {
    render() {
        const backgroundStyle = {
            backgroundImage: 'url('+ browseorig +')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '100%'
        };
        const sellStyle = {
            backgroundImage: 'url('+ sellorig +')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '100%'
        };
        return (
        	<div>
        		<NavigationBar />
                <div className="horizflex">
                    <div className = "split left" style={backgroundStyle}>
                        <a href="/buy"/>
                        <h1 className="title centered">Buy Books</h1>
                    </div>
                    <div className = "split right" style={sellStyle}>
                        <a href="/presell"/>
                        <h1 className="title centered">Sell Books</h1>
                    </div>
                </div>

	        </div>
        );
    }
}

export default App;
