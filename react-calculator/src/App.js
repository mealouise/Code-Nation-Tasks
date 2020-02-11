import React from 'react';
import './App.css';


class App extends React.Component {

  state = {
    counter:0
  }

  // clear = () => {
  //   counter:0
  // }

clear = () => {
  console.log("button being clicked")
  this.setState({
    counter: 0
  });
}

increment = () => {
  this.setState({
    counter: this.state.counter + 1
  });
}

buttonClicked = (number) => {
  // const buttonValue = this.number.value;
  console.log(number);
  this.setState({
    counter: this.state.counter + number
  });
}
// return( {
//   counter: this.state.number
// }
  
// )
// }
  // this.setState({
  //   counter: this.state.counter + {number}
  // });



// numberClicked = (number) => {
//   console.log(`button clicked is ${number}`)
// }
// }







  render() {
    return (
      <div className="container">
        <div className="counter">{this.state.counter}</div>
        <div className="content">
          <div className="row2">
            <button className="clear" onClick={this.clear}>clear</button>
            <button className="box calculate" >÷</button>
          </div>
          <div className="row3">
            <button className="box box7" onClick={() => this.buttonClicked(7)} >7</button>
            <button className="box box8" onClick={() => this.buttonClicked(8)} >8</button>
            <button className="box box9" onClick={() => this.buttonClicked(9)}>9</button>
            <button className="box calculate" >-</button>
          </div>
          <div className="row4">
            <button className="box box4" onClick={() => this.buttonClicked(4)}>4</button>
            <button className="box box5" onClick={() => this.buttonClicked(5)}>5</button>
            <button className="box box6" onClick={() => this.buttonClicked(6)}>6</button>
            <button className="box calculate">+</button>
          </div>
          <div className="row5">
            <button className="box box1" onClick={() => this.buttonClicked(1)}>1</button>
            <button className="box box2" onClick={() => this.buttonClicked(2)}>2</button>
            <button className="box box3" onClick={() => this.buttonClicked(3)}>3</button>
            <button className="box calculate" >*</button>
            </div>
          <div className="row6">
            <button className="box box0" onClick={() => this.buttonClicked(0)}>0</button>
            <button className="box boxDot">.</button>
            <button className="box calculate">=</button>
          </div>
        </div>
    </div> 
    

    )
  }
}



export default App;
