import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Browse/Browse.css';
import NavigationBar from '../NavigationBar/NavigationBar.js'
import Footer from '../Footer/Footer.js'

class Result extends Component {
    render() {
        return (
            <div className="ResultWrapper">
                <div className="ResultContainer">
                    <div className="ResultUpper">
                        <div className="ResultTitle">
                            {this.props.title}
                        </div>
                        <div className="ResultSubtitle">
                            <div className="ResultAuthor">
                                {this.props.author}
                            </div>
                            <div className="ResultDot">
                                &middot;
                            </div>
                            <div className="ResultEdition">
                                {this.props.edition}
                            </div>
                        </div>
                    </div>
                    <div className="ResultLower">
                        <div className="ResultCondition">
                            Condition: {this.props.condition}
                        </div>
                        <div className="ResultRow">
                            <div className="ResultPrice">
                                {this.props.price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                suggestions={['Hydrogen', 'Helium', 'Lithium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Flourine', 'Neon', 'Sodium', 'Rhodium']}
                            />
                        </div>
                        <button className="SearchButton">Search</button>
                    </div>
                    <div className="ResultsWrapper">
                        <Result
                            title="Problem Solving with C++"
                            author="Walter Savitch"
                            edition="9th Edition"
                            condition="Great"
                            price="$50.00"
                        />
                        <Result
                            title="Partial Differential Equations"
                            author="Stanley J. Farlow"
                            edition="1st Edition"
                            condition="Used"
                            price="$35.50"
                        />
                        <Result
                            title="Chemistry: The Central Science"
                            author="Brown, Lemay, Bursten"
                            edition="14th Edition"
                            condition="Brand New"
                            price="$60.00"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

class App extends Component {
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

export default App;