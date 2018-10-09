import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import NavigationBar from './NavigationBar.js'

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
        ctx.font = '40px Open Sans';
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
                <NavigationBar />
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
                </div>
                <div className="SectionWrapper" style={{backgroundColor: '#F5A23A'}}>
                    <div className="SectionTitle">Our Solution</div>
                    <div className="SectionSubtitle">We're making textbooks more affordable.</div>
                </div>
            </div>
        );
    }
}

export default App;
