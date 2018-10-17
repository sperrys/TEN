import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './About.css';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../Footer/Footer.js'

class StatisticCanvas extends Component {

    componentDidMount() {
        // Get canvas element and context
        const c = ReactDOM.findDOMNode(this).getElementsByTagName('canvas')[0];
        const ctx = c.getContext('2d');

        // Canvas dimension and circle radius
        const dim = this.props.dimension;
        const rad = this.props.radius;

        // Resize canvas according to the screen's DPI for high-resolution
        var dpr = window.devicePixelRatio || 1;
        c.width = dim * dpr;
        c.height = dim * dpr;
        c.style.width = dim + 'px';
        c.style.height = dim + 'px';
        ctx.scale(dpr,dpr);

        // Draw thin circle outline
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#393C72';
        ctx.beginPath();
        ctx.arc(dim/2, dim/2, rad, 0, 2*Math.PI);
        ctx.stroke();

        // Draw thicker circle, representing the percentage
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#fff';
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(dim/2, dim/2, rad, -Math.PI/2, 2*Math.PI * this.props.completion-Math.PI/2);
        ctx.stroke();

        // Draw the percentage inside of the circle
        const percentage = 100 * this.props.completion + '%';
        ctx.font = '40px Roboto Condensed, sans-serif';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(percentage, dim/2, dim/2);
    }

    render() {
        return (
            <div className="StatisticCanvasContainer" style={{width: this.props.dimension}}>
                <canvas className="StatisticCanvas"></canvas>
                <div className="StatisticCanvasLabel">{this.props.label}</div>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <div className="BodyWrapper">
                    <NavigationBar />
                    <div className="SectionWrapper" style={{backgroundColor: '#fff'}}>
                        <div className="SectionTitle" style={{color: '#000'}}>Textbook Exchange Network</div>
                        <div className="SectionSubtitle" style={{color: '#000'}}>Changing the texbook game.</div>
                        <div className="SectionContent" style={{color: 'rgba(0,0,0,.84)'}}>
                            In ipsum ex, sollicitudin vitae ultricies vitae, consectetur a enim. Praesent imperdiet ornare pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut venenatis pharetra sem, quis bibendum augue bibendum ut.
                        </div>
                    </div>
                    <div className="SectionWrapper" style={{backgroundColor: '#5F63BD'}}>
                        <div className="SectionTitle">The Problem</div>
                        <div className="SectionSubtitle">Texbooks are expensive.</div>
                        <div className="StatisticCanvasWrapper">
                            <StatisticCanvas
                                completion={0.65}
                                dimension={200}
                                radius={80}
                                label="of students do not buy textbooks because they are too expensive"
                            />
                            <StatisticCanvas
                                completion={0.48}
                                dimension={200}
                                radius={80}
                                label="said textbook costs affected what classes they took"
                            />
                            <StatisticCanvas
                                completion={0.94}
                                dimension={200}
                                radius={80}
                                label="of students who did not buy textbooks said they were concerned this would hurt their grade"
                            />
                        </div>
                        <div className="SectionContent" style={{color: 'rgba(255,255,255,0.84)'}}>
                            Maecenas consectetur sollicitudin est eu maximus. Bunc ac nulla leo. Duis dolor dui, feugiat hendrerit facilisis eget, congue nec risus. In ipsum ex, sollicitudin vitae ultricies vitae, consectetur a enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut venenatis pharetra sem, quis bibendum augue bibendum ut.
                        </div>
                    </div>
                    <div className="SectionWrapper" style={{backgroundColor: '#F5A23A'}}>
                        <div className="SectionTitle">Our Solution</div>
                        <div className="SectionSubtitle">We&#8217;re making textbooks more affordable.</div>
                        <div className="SectionContent" style={{color: 'rgba(255,255,255,0.84)'}}>
                            Maecenas consectetur sollicitudin est eu maximus. Sed molestie euismod tellus, vel mollis dolor. Quisque a nibh nec risus iaculis scelerisque. Nunc ac nulla leo. Duis dolor dui, feugiat hendrerit facilisis eget, congue nec risus. In ipsum ex, sollicitudin vitae ultricies vitae, consectetur a enim. Praesent imperdiet ornare pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </div>
                    </div>
                </div>
                <Footer position="relative" />
            </div>
        );
    }
}

export default App;
