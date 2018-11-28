import React, { Component } from 'react';
import './Footer.css';

class FooterItem extends Component {
    render() {
        return (
            <div className="FooterItem" style={{float: this.props.float}}>
                {this.props.text}
            </div>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <div className="FooterWrapper" style={{position: this.props.position}}>
                <div className="FooterContainer">
                    <FooterItem
                        float='left'
                        text={'© Textbook Exchange Network ' + new Date().getFullYear()}
                    />
                </div>
            </div>
        );
    }
}

export default Footer;
