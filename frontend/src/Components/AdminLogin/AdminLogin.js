import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './AdminLogin.css';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../Footer/Footer.js'
import history from '../../history';


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
    	//alert('Correct password')
    	history.push('/adminhome');
    	window.location.reload()
    }
    event.preventDefault();
  }

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
	        <label>
	        	Password:
	        	<input type="password" value={this.state.value} onChange={this.handleChange} style={{width: 600, height: 50, fontSize: 40, borderRadius: 10}} />
	       </label>
	        	<input type="submit" value="Submit" style={{width: 300, height: 75, backgroundColor:'#4A90E3', fontSize: 40, color: 'white', borderRadius: 10}}/>
	       </form>
		);

	}

}

class App extends Component{
	render() {
		return (
			<div className="Login">
					<center><p>Please login using the administrators password</p></center>
					<center><p>If you have forgotten the password, please ask another administrator for the passcode</p></center>
					<AdminLogin/>
			</div>	
		);
	}
}

export default App;