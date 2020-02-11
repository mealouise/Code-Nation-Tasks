import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    number: []
  }

addAddress = (e) => {
  this.setState({
    number: e.target.value
  });

}
render() {
  return (
   <div>
   <h1>Addresses</h1>
   <input type="number" value={this.state.value}/>
   <button>Submit</button>
   <p>{this.state.number}</p>
   </div>
  )}
}

export default App;
