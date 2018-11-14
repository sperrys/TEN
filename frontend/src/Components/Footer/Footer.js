import React, { Component } from 'react';
import './Footer.css';

class FooterItem extends Component {
    render() {
        return (
            <div className="FooterItem" style={{float: this.props.float}}>
                <a href={this.props.link} className="FooterAnchor">
                    {this.props.text}
                </a>
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
                    <FooterItem
                        float='right'
                        text={'Contact Us'}
                        link='mailto:email@gmail.com'
                    />
                    <FooterItem
                        float='right'
                        text={'Facebook'}
                        link='https://facebook.com'
                    />
                </div>
            </div>
        );
    }
}

export default Footer;
