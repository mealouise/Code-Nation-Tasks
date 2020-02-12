
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';


class App extends Component {
  
  state = {
    firstValues:0,
    currentOperator: "",
    secondValue: 0,
    result: ""

  }

  setOperator = (operator) => {
    console.log("My operator is" + operator)
  }

  myFunc = (element) => {
    console.log("button clicked")
    // this.setState({
    //   counter: this.state.counter + 1 //grab everything from state before but not displayed on the sreen
    // });
    console.log("My number is " + element);
  }
  
  render() {
    return (
      <div>
      <Navbar page="Blog" />
      {/* <input type="text"/> */}
      <button onClick={() => this.myFunc(7)}>7</button>
      <button onClick={() => this.setOperator("+")}>+</button>
      <button onClick={this.myFunc}>5</button>
      <h1>My Counter is: {this.state.counter}</h1>
        
      </div>
    )
  }
}


export default App;
