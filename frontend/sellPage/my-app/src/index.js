
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class SellPage extends React.Component {
    constructor(props) {
	super(props);
							
	this.state = {labelNames: 
		[{name: 'name', value: '', placeholder: 'eg. Tony Monacle'},
		 {name: 'isbn', value: '', placeholder: 'eg. 9781234567890'},
		 {name: 'classID', value: '', placeholder: 'eg. 0022'},
		 {name: 'Textbook Title', value: '', placeholder: 'eg. An Invitation to Spanish (student edition)'},
		 {name: 'Edition Number', value: '', placeholder: 'eg. 9'},
		 {name: 'Price', value: '', placeholder: 'eg. 33'},
		 {name: 'Email', value: '', placeholder: 'eg. example@mail.com'},
		 {name: 'Phone Number', value: '', placeholder: 'eg. 123-456-7890'},
		 {name: 'Venmo ID', value: '', placeholder: 'eg. @jumboKid22'}]
	};


	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

			// Parse the name and value of the object that was changed
      		const target = event.target;
      		const name   = target.name;
			const value  = target.value;

			console.log("name: " + name + ", value: " + value);
			
			// TODO could make labels immutable
			var labels = this.state.labelNames;

			for (var i = 0; i < labels.length; i++)
			{
				var label = labels[i];

				if (label.name === name)
				{
					labels[i].value = value;
					break;
				}
			}

			//labels[name] = value;
			console.log("new labels:")
			console.log(labels);

			// Update our state with the change
			this.setState({labelNames: labels});

			console.log(this.state);

    }
  
    handleSubmit(event) {
		

		const labelNames = this.state.labelNames;
		//const labelKeys = Object.getOwnPropertyNames(labelNames);

		var submitArray = [];

		for (var i = 0; i < labelNames.length; i++) 
		{
			var label = labelNames[i];

			var labelObject = {};
			labelObject[label.name] = label.value;
			submitArray.push(labelObject);
		}

		window.alert("Your book has been submitted");
		//window.alert(submitArray);
		console.log(submitArray);

	    event.preventDefault();
	}
	
	renderLabel(name, type, value, placeholder)
	{
		return (
			<Label
			  name={name}
			  type={type}
			  value={value}
			  onChange={(event) => this.handleChange(event)}
			  placeholder={placeholder}
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
			<div>
				{this.state.labelNames.map((label, index) =>
				(this.renderLabel(label.name, "text", label.value, label.placeholder)))
				}
			</div>
		/*<>
		{this.renderLabel("name", 		     "text",   "", this.state.labelNames.name)}
		{this.renderLabel("isbn", 		     "text",   "", this.state.labelNames.isbn)}
		{this.renderLabel("classID", 	     "text",   "", this.state.labelNames.classID)}
		{this.renderLabel("textbookTitle",   "text",   "", this.state.labelNames.textbookTitle)}
		{this.renderLabel("editionNumber",   "number", "", this.state.labelNames.editionNumber)}
		{this.renderLabel("price", 		     "number", "", this.state.labelNames.price)}
		{this.renderLabel("email", 		     "text",   "", this.state.labelNames.email)}
		{this.renderLabel("phoneNumber",     "text",   "", this.state.labelNames.phoneNumber)}
		{this.renderLabel("venmoID", 	     "text",   "", this.state.labelNames.venmoID)}
		</>*/
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

	constructor(props) {
		super(props);

		//this.handleChange = this.handleChange.bind(this);

		this.state = {
			value: ''
		};
	
	}

	handleChange(e) {
		console.log(e.target.value);
		this.setState({value: e.target.value});
	}

	render()
	{
	  return (
		<label className="label">
			{this.props.name}
			<input name=        {this.props.name} 
					type=       {this.props.type}
					onChange=   {this.props.onChange}  
					placeholder={this.props.placeholder}
					value=      {this.props.value}
					
					   />
		</label>
	  );
	}
}


ReactDOM.render(
		<SellPage />,
		document.getElementById('root')
		);