import React, { Component, Fragment } from 'react';
import { random } from 'lodash';
import '../style/QuoteGenerator.css';
class QuoteGenerator extends Component {

    constructor(){
        super();
        this.state = {
            quotes: [],
            selectedquote : null,
        }
        this.END_POINT = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'
        this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
        this.getNewQuote = this.getNewQuote.bind(this);
    }

    componentDidMount(){
        fetch(this.END_POINT)
            .then(response => response.json())
            .then(quotes => this.setState({ quotes }, this.getNewQuote));
    }

    get selectedQuote() {
        if(!this.state.quotes.length || !Number.isInteger(this.state.selectedquote)){
            return undefined;
        }
        return this.state.quotes[this.state.selectedquote];
    }

    selectQuoteIndex() {
        if (!this.state.quotes.length) {
            return;
        }
        return random(0, this.state.quotes.length - 1);
    }

    getNewQuote() {
        this.setState({ selectedquote: this.selectQuoteIndex() });
    }

    render(){
        return (
            <Fragment>
                <h1 className="Header">Get inspired. Get motivated!</h1>
                <div className="Quotebox">
                    <br/>
                    <div className="Quote">
                    { this.selectedQuote ? 
                        `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}`
                        : '' }
                    </div>
                        <button onClick={this.getNewQuote} className="Button">
                            Next >
                        </button>
                </div>
            </Fragment>

        );
    }
}

export default QuoteGenerator;
