
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class SellPage extends React.Component {
    constructor(props) {
	super(props);
							
	this.state = {labelNames: 
		[{name: 'Name',           value: '', type: "text",   placeholder: 'eg. Tony Monacle'},
		 {name: 'ISBN',           value: '', type: "number",   placeholder: 'eg. 9781234567890'},
		 {name: 'Class ID',        value: '', type: "number", placeholder: 'eg. 0022'},
		 {name: 'Textbook Title', value: '', type: "text",   placeholder: 'eg. An Invitation to Spanish (student edition)'},
		 {name: 'Edition Number', value: '', type: "number", placeholder: 'eg. 9'},
		 {name: 'Price', 		  value: '', type: "number", placeholder: 'eg. 33'},
		 {name: 'Email', 		  value: '', type: "text",   placeholder: 'eg. example@mail.com'},
		 {name: 'Phone Number',   value: '', type: "text",   placeholder: 'eg. 123-456-7890'},
		 {name: 'Venmo ID', 	  value: '', type: "text",   placeholder: 'eg. @jumboKid22'}]
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

			// Find the label with the given name, and update its value
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
		
		var submitArray = [];

		for (var i = 0; i < labelNames.length; i++) 
		{
			var label = labelNames[i];

			var labelObject = {};
			labelObject[label.name] = label.value;
			submitArray.push(labelObject);
		}

		window.alert("Your book has been submitted");
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

		// Map each label object to a label component using renderLabel()
		return(
			<div>
				{this.state.labelNames.map((label, index) =>
				(this.renderLabel(label.name, label.type, label.value, label.placeholder)))
				}
			</div>

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