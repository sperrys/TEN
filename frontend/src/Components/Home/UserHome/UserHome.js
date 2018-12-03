import React, { Component } from 'react';
import { ROUTES } from "../../../index.js";
import './UserHome.css';
import NavigationBar from '../../NavigationBar/NavigationBar.js';
import Footer from '../../Footer/Footer.js';
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
                <div className="BodyWrapper">
                    <NavigationBar />
                    <div className="horizflex">
                        <div className = "split left" style={backgroundStyle}>
                            {/* TODO: add browse route here */}
                            <h1 className="title centered">Browse Books</h1>
                        </div>
                        <div className = "split right" style={sellStyle}>
                            <a href={"/" + ROUTES.PRESELL} >
                                <h1 className="title centered">PreSell Books</h1>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer position="fixed" />
            </div>
        );
    }
}

export default App;
