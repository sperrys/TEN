import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Browse/BrowseEdit.css';
import AdminNav from '../NavigationBar/Admin/AdminNav.js';
import Footer from '../Footer/Footer.js';

class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.editButton = React.createRef();
        this.resultTitle = React.createRef();
        this.resultSubtitle = React.createRef();
        this.resultEdition = React.createRef();
        this.resultPrice = React.createRef();
        this.toggleEditing = this.toggleEditing.bind(this);
    }

    toggleEditing() {
        const editing = !this.state.editing;
        this.setState({
            editing: editing
        });

        const inputs = ['resultTitle', 'resultSubtitle', 'resultEdition', 'resultPrice'];

        if (editing) {
            this.editButton.current.innerHTML = 'Save';
            this.editButton.current.style.backgroundColor = '#2ecc71';



            for (let i = 0; i < inputs.length; i++) {
                let el = this[inputs[i]];
                el.current.style.borderBottom = '1px dashed lightgray';
                el.current.readOnly = false;
            }
        }
        else {
            this.editButton.current.innerHTML = 'Edit';
            this.editButton.current.style.backgroundColor = '#2c3e50';

            for (let i = 0; i < inputs.length; i++) {
                let el = this[inputs[i]];
                el.current.style.borderBottom = '1px dashed transparent';
                el.current.readOnly = true;
            }
        }
    }

    render() {
        return (
            <form
                className="ResultWrapper"
                onSubmit={(e) => {
                    e.preventDefault();
                    this.toggleEditing();
                }}
            >
                <div className="ResultContainer">
                    <div className="ResultUpper">
                        <input className="ResultTitle"
                            defaultValue={this.props.title}
                            ref={this.resultTitle}
                            readOnly={true}
                        />
                        <button
                            className="EditButton"
                            ref={this.editButton}
                        >
                            Edit
                        </button>
                        <div className="ResultSubtitle">
                            <input
                                className="ResultAuthor"
                                defaultValue={this.props.author}
                                ref={this.resultSubtitle}
                                readOnly={true}
                            />
                            <br />
                            <input
                                className="ResultEdition"
                                defaultValue={this.props.edition}
                                ref={this.resultEdition}
                                readOnly={true}
                            />
                        </div>
                    </div>
                    <div className="ResultLower">
                        <div className="ResultRow">
                            <input
                                className="ResultPrice"
                                defaultValue={this.props.price}
                                ref={this.resultPrice}
                                readOnly={true}
                            />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

class InputField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            suggestion_length: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.hideSuggestions = this.hideSuggestions.bind(this);
        this.showSuggestions = this.showSuggestions.bind(this);
    }

    handleInput() {

        this.showSuggestions();

        const input = ReactDOM.findDOMNode(this).getElementsByClassName('Input')[0];
        const word = input.value;

        let matchingSuggestions = [];
        for (let i = 0; i < this.props.suggestions.length; i++) {
            const testWord = this.props.suggestions[i];
            const testWordSubstring = testWord.substring(0, word.length);
            if (testWordSubstring.toLowerCase() === word.toLowerCase()) {
                matchingSuggestions.push(testWord);
            }
        }

        this.setState({
            suggestions: matchingSuggestions,
            suggestion_length: word.length
        });
    }

    handleClick(suggestion) {
        console.log(suggestion);
        const input = ReactDOM.findDOMNode(this).getElementsByClassName('Input')[0];
        input.value = suggestion;
        this.hideSuggestions();
    }

    hideSuggestions() {
        const suggestions = ReactDOM.findDOMNode(this).getElementsByClassName('InputSuggestions')[0];
        suggestions.style.display = 'none';
    }

    showSuggestions() {
        const suggestions = ReactDOM.findDOMNode(this).getElementsByClassName('InputSuggestions')[0];
        suggestions.style.display = 'block';
    }

    createSuggestionList() {
        const listItems = this.state.suggestions.map((suggestion, index) =>
            <div className="InputSuggestion"
                key={index.toString()}
                onMouseDown={() => this.handleClick(suggestion)}>
                <span className="InputSuggestionRegular">
                    {
                        suggestion.substring(0, this.state.suggestion_length)
                    }
                </span>
                <span className="InputSuggestionBold">
                    {
                        suggestion.substring(this.state.suggestion_length, suggestion.length)
                    }
                </span>
            </div>
        );
        return listItems;
    }

    render() {
        return (
            <div className="InputContainer">
                <input className="Input SearchInput"
                    placeholder={this.props.placeholder}
                    onInput={this.handleInput}
                    onBlur={this.hideSuggestions}
                    />
                <div className="InputSuggestions">
                    {this.createSuggestionList()}
                </div>
            </div>
        );
    }
}

class BrowseContent extends Component {
    render() {
        return (
            <div className="BrowseWrapper">
                <div className="BrowseContainer">
                    <div className="SearchContainer">
                        <div>
                            <InputField
                                placeholder="Textbook"
                                // textbook suggestions go here
                                suggestions={['Problem Solving with C++', 'Partial Differential Equations', 'Chemistry: The Central Science']}
                            />
                        </div>
                        <button className="SearchButton">Search</button>
                    </div>
                    <div className="ResultsWrapper">
                        <Result
                            title="Problem Solving with C++"
                            author="Walter Savitch"
                            edition="9th Edition"
                            price="$50.00"
                        />
                        <Result
                            title="Partial Differential Equations"
                            author="Stanley J. Farlow"
                            edition="1st Edition"
                            price="$35.50"
                        />
                        <Result
                            title="Chemistry: The Central Science"
                            author="Brown, Lemay, Bursten"
                            edition="14th Edition"
                            price="$60.00"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

class Browse extends Component {
    render() {
        return (
            <div>
                <AdminNav />
                <BrowseContent />
                <Footer position="fixed" />
            </div>
        );
    }
}

export default Browse;
