import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './AdminLogin.css';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../Footer/Footer.js'

class AdminLogin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: " ",
			password: " "
		};
	}

	validateLogin() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
	}

}

render() {
	return 0;
}

class App extends Component{

}