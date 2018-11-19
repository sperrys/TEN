import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './AdminLogin.css';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../Footer/Footer.js'


class AdminLogin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			password: " "
			//redirect: false;

		};
	}

	validateLogin() {
		return this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
	}

	checkPassword() {
		//if(this.state.password.value == 'h'){
			this.props.history.push(`http://google.com`);
		//}
	}


	render(){
		return (
			<div>
			</div>
		);

	}

}


class App extends Component{
	render() {
		return (
			<div className="Login">
					<center><p>Please login using the administrators password</p></center>
					<center><p>If you have forgotten the password, please ask another administrator for the passcode</p></center>
					<h1>Passcode:    
						<input type="password" id="password" style={{width: 600, height: 50, fontSize: 40, borderRadius: 10}}
						placeholder="Enter passcode here YUH"/> 
					</h1>
					<center><input type="button" onClick={this.checkPassword} style={{width: 300, height: 75, backgroundColor:'#4A90E3', fontSize: 40, color: 'white', borderRadius: 10}} 
							type="submit" value="Submit"/>
					</center>
				<Footer position="fixed"/> 
			</div>	
		);
	}
}

export default App;