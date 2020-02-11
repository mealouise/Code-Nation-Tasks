import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    addressNumber: "",
    addressBook: []
  }

addAddress = (e) => {
  this.setState({
    addressNumber: e.target.value // e.target can only be used on inputs
  });
}

submitAddress = () => {
  let newAddressBook = [...this.state.addressBook]; //cloning the original address book as cant update the state directly in react
  newAddressBook.push(this.state.addressNumber); //push new address number entries into the new address book
  this.setState({
    addressBook : newAddressBook //updating the state with the new address book values
  })
}

render() {
  return (
   <div>
    <h1>Addresses</h1>
    <input type="number" value={this.state.addressNumber} onChange={this.addAddress} />
    <button onClick={this.submitAddress}>Submit</button>
    <p>{this.state.addressNumber}</p>
   </div>
  )}
}

export default App;
