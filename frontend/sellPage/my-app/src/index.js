
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class SellPage extends React.Component {
    constructor(props) {
	super(props);
							
	this.state = {labelNames: {
		name: 'Tony Monacle',
		isbn: 'eg. 9781234567890',
		classID: 'eg. 0022',
		textbookTitle: "eg. An Invitation to Spanish (student edition)",
		editionNumber: "eg. 9",
		price: "eg. 33 ",
		email: "eg. example@mail.com",
		phoneNumber: "eg. 123-456-7890",
		venmoID: "eg. @jumboKid22"}
	};


	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
			const labels = this.state.labelNames.slice();
			
      const target = event.target;
      const name   = target.name;
			const value  = target.value;
			
			labels[name] = value;

	    this.setState({labelNames: labels});
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

	_renderLabels() {

		/*const labelNames = this.state.labelNames;
		const labelKeys = Object.getOwnPropertyNames(labelNames);

		var components = [];
		const Test = ({labelKeys}) => (
			<>
				{labelKeys.map(label => (
					this.renderLabel(labelKeys[label], "text", label)
				))}
			</>
		); 
		console.log(Test);*/

		return(
		<>
		{this.renderLabel("name", 		   "text",   this.state.labelNames.name)}
		{this.renderLabel("isbn", 		   "text",   this.state.labelNames.isbn)}
		{this.renderLabel("classID", 	   "text", 	 this.state.labelNames.classID)}
		{this.renderLabel("textbookTitle", "text",   this.state.labelNames.textbookTitle)}
		{this.renderLabel("editionNumber", "number", this.state.labelNames.editionNumber)}
		{this.renderLabel("price", 		   "number", this.state.labelNames.price)}
		{this.renderLabel("email", 		   "text",   this.state.labelNames.email)}
		{this.renderLabel("phoneNumber",   "text",  this.state.labelNames.phoneNumber)}
		{this.renderLabel("venmoID", 	   "text",    this.state.labelNames.venmoID)}
		</>
		)       
	}

    render() {

	
	return (
		<form onSubmit={this.handleSubmit}>
        <p>Textbook Exchange Network Sell Page</p>

				{this._renderLabels()}
		
        <input type="submit" value="Submit" />
      </form>
		);
    }
}

class Label extends React.Component {
	render() {
	  return (
		<label className="label">
			{this.props.name}
			<input name={this.props.name} type={this.props.type} value={this.props.value} />
		</label>
	  );
	}
  }  

ReactDOM.render(
		<SellPage />,
		document.getElementById('root')
		);