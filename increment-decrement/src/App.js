import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    counter:0
  }

  incrememt = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement = () => {
    if (this.state.counter <= 0) {
    alert("Sorry the number can't be negative")
    }
    else 
    this.setState({
      counter: this.state.counter - 1

    });
  }

  render() {
    return (
      <div className="container">
        <h1>Increment/Decrement</h1>
        <div className="border">
        <h1>{this.state.counter}</h1>
        </div>
          <button id="button1" className="button" onClick={this.incrememt}>Increment</button>
          <button className="button" onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default App;
