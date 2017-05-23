import React, { Component } from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel';
import ResultDisplay from './ResultDisplay';
import calculate from './Calculate.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            runningTotal:null,
            operator:null,
            nextValue:null

        }
    }
    handleClick = (buttonName) => {
        this.setState(calculate(this.state,buttonName));
    }
    render() {
        return (
            <div className="App">
            <ResultDisplay value={this.state.nextValue ||this.state.runningTotal||0} />
            <ButtonPanel clickHandler={this.handleClick}/>
            </div>
        );
    }
}

export default App;
