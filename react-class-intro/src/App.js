import React from 'react';
import './App.css';

class App extends React.Component {
 
  state = {
    counter:0,
    footballClub: "Man U"
  }

greeting = () => {
  console.log("Hello Telmo");
}

increment = () => {
  this.setState({
    counter: this.state.counter + 1
  });
}

decrement = () => {
  this.setState({
    counter: this.state.counter - 1
  });
}

changeClub = () => {
  this.setState({
    footballClub: "Man City"
  });
}




  render() {
    return( //everything you see on the page
      <div>
      <h1>My First React Class Component</h1>
      <h1>My current counter is {this.state.counter}</h1>
      <h1>My favourite football club is {this.state.footballClub}</h1>
      <button onClick={this.greeting}>Say Hello</button>
      <button onClick={this.increment}>Increment My Counter</button>
      <button onClick={this.decrement}>Decrement</button>
      <button onClick={this.changeClub}>Change Football Club</button>
      </div>
    )
  }
}



export default App;
