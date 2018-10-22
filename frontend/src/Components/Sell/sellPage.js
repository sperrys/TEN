class NameForm extends React.Component {
    constructor(props) {
	super(props);
	this.state = {name: 'Tony Monacle',
		      isbn: 'eg. 9781234567890',
		      classID: 'eg. 0022',
		      textbookTitle: "eg. An Invitation to Spanish (student edition)",
		      editionNumber: "eg. 9",
		      price: "eg. 33 ",
		      email: "eg. example@mail.com",
		      phoneNumber: "eg. 123-456-7890",
		      venmoID: "eg. @jumboKid22"
                  
	};

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
	this.setState({value: event.target.value});
    }

    handleSubmit(event) {
	alert('A name was submitted: ' + this.state.value);
	event.preventDefault();
    }

    render() {
	return (
		<form onSubmit={this.handleSubmit}>
        <label>
		Name:
		<input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        
        <label>
		ISBN:
		<input name="isbn" type="text" value={this.state.isbn} onChange={this.handleChange} />
        </label>
        
        <label>
		Class ID:
		<input name="classID" type="text" value={this.state.classID} onChange={this.handleChange} />
        </label>
        
        <label>
		Textbook Title:
		<input name="textbookTitle" type="text" value={this.state.textbookTitle} onChange={this.handleChange} />
        </label>
        
        <label>
		Edition Number:
		<input name="editionNumber" type="number" value={this.state.editionNumber} onChange={this.handleChange} />
        </label>
        
        <label>
		Price:
		<input name="price" type="number" value={this.state.price} onChange={this.handleChange} />
        </label>
        
        <label>
		Email:
		<input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
        </label>
        
        <label>
		Phone Number:
		<input name="phoneNumber" type="text" value={this.state.phoneNumber} onChange={this.handleChange} />
        </label>
        
        <label>
		Venmo ID:
		<input name="venmoID" type="text" value={this.state.venmoID} onChange={this.handleChange} />
        </label>
        
        
        
        
        
        
        
        
        <input type="submit" value="Submit" />
      </form>
		);
    }
}

ReactDOM.render(
		<NameForm />,
		document.getElementById('root')
		);