import React, { Component } from 'react';
import '../UserHome/UserHome.css';
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
                <div class="horizflex">
                    <div class = "split left" style={backgroundStyle}>
                        <a href="/buy"/>
                        <h1 class="title centered">Buy Books</h1>
                    </div>
                    <div class = "split right" style={sellStyle}>
                        <a href="/presell"/>
                        <h1 class="title centered">Sell Books</h1>
                    </div>
                </div>

	        </div>
        );
    }
}

export default App;
