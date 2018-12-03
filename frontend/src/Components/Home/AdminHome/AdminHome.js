import React, { Component } from 'react';
import '../UserHome/UserHome.css';
import { ROUTES } from "../../../index.js";
import NavigationBar from '../../NavigationBar/NavigationBar.js';
import Footer from '../../Footer/Footer.js'
import browseorig from '../../../assets/browseorig.jpg';
import sellorig from '../../../assets/sellorig.jpg';

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
        		<NavigationBar /> {/* TODO: make new nav bar for admins*/}
                <div class="horizflex">
                    <div class = "split left" style={backgroundStyle}>
                        <a href={"/" + ROUTES.BUY_FIND}>
                            <h1 class="title centered">Buy Books</h1>
                        </a>
                    </div>
                    <div class = "split right" style={sellStyle}>
                        <a href="/">
                            {/* TODO: make this route to sell page for volunteers */}
                        </a>
                        <h1 class="title centered">Sell Books</h1>
                    </div>
                </div>
            <Footer position="fixed"/>
	        </div>
        );
    }
}

export default App;
