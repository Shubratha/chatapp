import React,{ Component } from 'react';
import 'typeface-roboto';
import './App.css';
import QuoteGenerator from './components/QuoteGenerator'

class App extends Component {
  render(){
    return (
      <div className="App App-background">
        <div className="App-header App-background">
          <QuoteGenerator />
        </div>
      </div>
    );
  }
}

export default App;
