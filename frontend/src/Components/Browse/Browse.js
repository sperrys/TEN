import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Browse/Browse.css';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../Footer/Footer.js';

class Result extends Component {

    constructor(props) {
        super(props);
        this.resultTitle = React.createRef();
        this.resultSubtitle = React.createRef();
        this.resultEdition = React.createRef();
        this.resultPrice = React.createRef();
    }

    render() {
        return (
            <form
                className="ResultWrapper"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <div className="ResultContainer">
                    <div className="ResultUpper">
                        <input className="ResultTitle"
                            defaultValue={this.props.title}
                            ref={this.resultTitle}
                            readOnly={true}
                        />
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
                <NavigationBar />
                <BrowseContent />
                <Footer position="fixed" />
            </div>
        );
    }
}

export default Browse;
