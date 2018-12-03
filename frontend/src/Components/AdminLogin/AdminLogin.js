import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './AdminLogin.css';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../Footer/Footer.js'
import history from '../../history';
import logo from '../../assets/logo.png';


class AdminLogin extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.value === "jumbo"){
    	history.push('/AdminHome');
    	window.location.reload()
    }
    event.preventDefault();
  }

	render(){
		return (
		<div className="AdminLoginInputContainer">
			<form onSubmit={this.handleSubmit}>
	        <label>
	        	<input type="password" className="AdminLoginInput" value={this.state.value} onChange={this.handleChange} />
	       </label>
	        	<input type="submit" value="Submit" className="AdminLoginSubmit"/>
	       </form>
	    </div>
		);

	}

}

class App extends Component{
	render() {
		return (
			<div className="AdminLoginTextContainer">
					<p className="AdminLoginP1">
								Please login using the administrators password
					</p>
					<p className="AdminLoginP2">
								If you have forgotten the password, please ask another <br />administrator for the passcode
					</p>
					<p className="AdminLoginP3">
								Passcode:
					</p>
					<p className="AdminLoginP4">
								Copyright TEN 2018
					</p>
					<AdminLogin/>
					<img src={logo} id="LogoStyling"/>
			</div>	
		);
	}
}

export default App;