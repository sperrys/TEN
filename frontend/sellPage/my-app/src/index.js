
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SellPage extends React.Component {
    constructor(props) {
	super(props);

	var labelNames = {name: 'Tony Monacle',
					  isbn: 'eg. 9781234567890',
					  classID: 'eg. 0022',
					  textbookTitle: "eg. An Invitation to Spanish (student edition)",
					  editionNumber: "eg. 9",
					  price: "eg. 33 ",
					  email: "eg. example@mail.com",
				      phoneNumber: "eg. 123-456-7890",
				      venmoID: "eg. @jumboKid22"}

	var numLabels = Object.getOwnPropertyNames(labelNames).length;

	this.state = {labelNames: labelNames,
				   numLabels: numLabels,
				   inputLabels: Array(numLabels).fill(null)};

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      const target = event.target;
      const name   = target.name;
	  const value  = target.value;
	  this.setState({name: value});
    }
  

    handleSubmit(event) {
		alert('A name was submitted: ' + this.state.name);

	    event.preventDefault();
	}
	
	renderLabel(name, type, value)
	{
		return (
			<Label
			  name={name}
			  type={type}
			  value={value}
			  onChange={() => this.handleChange()}
			/>
		  );
	}

    render() {
	return (
		<form onSubmit={this.handleSubmit}>
        <p>Textbook Exchange Network Sell Page</p>

		{this.renderLabel("name", 		   "text",   this.state.inputLabels.name)}
		{this.renderLabel("isbn", 		   "text",   this.state.inputLabels.isbn)}
		{this.renderLabel("classID", 	   "text", 	 this.state.inputLabels.classID)}
		{this.renderLabel("textbookTitle", "text",   this.state.inputLabels.textbookTitle)}
		{this.renderLabel("editionNumber", "number", this.state.inputLabels.editionNumber)}
		{this.renderLabel("price", 		   "number", this.state.inputLabels.price)}
		{this.renderLabel("email", 		   "text",   this.state.inputLabels.email)}
		{this.renderLabel("phoneNumber",   "text",   this.state.inputLabels.phoneNumber)}
		{this.renderLabel("venmoID", 	   "text",   this.state.inputLabels.venmoID)}
            
        <input type="submit" value="Submit" />
      </form>
		);
    }
}

class Label extends React.Component {
	render() {
	  return (
		<label className="label">
			<input name="a label" type="text" value="something"/>
		</label>
	  );
	}
  }  

ReactDOM.render(
		<SellPage />,
		document.getElementById('root')
		);