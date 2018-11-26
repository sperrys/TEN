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
    if(this.state.value == "jumbo"){
    	history.push('/AdminHome');
    	window.location.reload()
    }
    event.preventDefault();
  }

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
	        <label>
	        	Password:
	        	<input type="password" value={this.state.value} onChange={this.handleChange} 
	        		style={{width: 600, height: 50, fontSize: 40, borderRadius: 10, position: 'fixed', top: 425, right: 100}} 
	        	/>
	       </label>
	        	<input type="submit" value="Submit" 
	        		style={{width: 400, height: 100, backgroundColor:'#4A90E3', fontSize: 40, color: 'white', borderRadius: 10, 
	        		position: 'fixed', top: 550, right: 100}}
	        	/>
	       </form>
		);

	}

}

class App extends Component{
	render() {
		return (
			<div className="Login" style={{backgroundColor: 'black', opacity: .85, width: 1500, height: 1000}}>
				<p style={{position: 'fixed', top: 175, right: 300}}>
							Please login using the administrators password
				</p>
				<p style={{position: 'fixed', top: 225, right: 230}}>
							If you have forgotten the password, please ask another <br />administrator for the passcode
				</p>
				<p style={{position: 'fixed', top: 350, right: 615}}>
							Passcode:
				</p>
				<p style={{position: 'fixed', top: 750, right: 650}}>
							Copyright TEN 2018
				</p>
				<AdminLogin/>
				<img src={logo} style={{position: 'fixed', top: 75, right: 800, height: 725, width: 600}}/>
			</div>	
		);
	}
}

export default App;