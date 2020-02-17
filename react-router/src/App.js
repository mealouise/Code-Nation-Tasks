import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Explore from '.components/Explore.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends Component {
  state = {
    basket:0 
  }

addToBasket = () => {
  console.log("add to basket was clicked");
  this.setState({

    basket: this.state.basket + 1
  });
}


  render() {
    return (
      <div>
      <BrowserRouter>
      <Navbar myBasket={this.state.basket}/>
      <Switch>
        <Route exact path='/' render={ () => <Home addToBasket={this.addToBasket} />} />
        <Route path='/about' component={About} /> 
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}


export default App;
