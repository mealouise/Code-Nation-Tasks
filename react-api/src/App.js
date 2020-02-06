import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Users from './components/Users';

class App extends Component {
  state = {
    users: [],
    loading: false

  }

  componentDidMount = async () => {
    console.log('Inside of component did Mount'); //grabbing data from API
    this.setState({
      loading:true
    });
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    console.log(response.data);
    console.log("Before updating state")
    this.setState({ //updating the state from whars from the api, and when its changed or updated the render function will run again
      users: response.data,
      loading: false
    })

    console.log("After updating the state");
  }


  render() {
    console.log('Inside of Render');

    const allUsers = this.state.users.map( user => {
      return <h1 key={user.id}>My name is {user.name} and I'm from {user.address.city}</h1>
    });
    let user2 = "";

    if( this.state.users.length > 0) {
      user2 = this.state.users[1].name;
    }
  
    return (
      <div>
        <Users loading={this.state.loading} data={allUsers} />
      </div>
    )
  }
}




export default App;
