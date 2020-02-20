import React from 'react';
import './App.css';


class App extends React.Component {

  state = { //place to store input temporarily from users
    n1: "",
    operator: "",
    n2: ""

  }

  // clear = () => {
  //   counter:0
  // }

  clear = () => {
    console.log("button being clicked")
    this.setState({
      n1: "",
      n2: "",
      operator: ""
    });
  }

  calculate = () => {
    // do if statement for each operator e.g if divide then do n1 / n2
    //if statment operator == + then n1 + n2
      if (this.state.operator == "+") {
        this.state.n1 + this.state.n2
      } else if (this.state.operator == "-") {
        this.state.n1 - this.state.n2
      } else if (this.state.operator == "*") {
        this.state.n1 * this.state.n2
      } else if (this.state.operator == "÷") {
        this.state.n1 / this.state.n2
      }
  }

  buttonClicked = (value) => {
    // const buttonValue = this.number.value;
    console.log(value);

    if (value === "-" || value === "+" || value === "*" || value === "/")  {
      this.setState({
        operator: value
      });
      console.log("the operator being clicked",value)
    } else {
      if (this.state.operator == "") {
        this.setState({
          n1: this.state.n1 + value
        });
      } else {
          this.setState({
          n2: this.state.n2 + value
        });
      }
  }
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
        <div className="counter">{
          this.state.operator ? this.state.n2: this.state.n1

        }</div>
        <div className="content">
          <div className="row2">
            <button className="clear" onClick={this.clear}>clear</button>
            <button className="box calculate" onClick={() => this.buttonClicked("/")}>÷</button>
          </div>
          <div className="row3">
            <button className="box box7" onClick={() => this.buttonClicked(7)} >7</button>
            <button className="box box8" onClick={() => this.buttonClicked(8)} >8</button>
            <button className="box box9" onClick={() => this.buttonClicked(9)}>9</button>
            <button className="box calculate" onClick={() => this.buttonClicked("-")}>-</button>
          </div>
          <div className="row4">
            <button className="box box4" onClick={() => this.buttonClicked(4)}>4</button>
            <button className="box box5" onClick={() => this.buttonClicked(5)}>5</button>
            <button className="box box6" onClick={() => this.buttonClicked(6)}>6</button>
            <button className="box calculate" onClick={() => this.buttonClicked("+")}>+</button>
          </div>
          <div className="row5">
            <button className="box box1" onClick={() => this.buttonClicked(1)}>1</button>
            <button className="box box2" onClick={() => this.buttonClicked(2)}>2</button>
            <button className="box box3" onClick={() => this.buttonClicked(3)}>3</button>
            <button className="box calculate" onClick={() => this.buttonClicked("*")}>*</button>
            </div>
          <div className="row6">
            <button className="box box0" onClick={() => this.buttonClicked(0)}>0</button>
            <button className="box boxDot">.</button>
            <button className="box calculate" onClick={() => this.calculate()}>=</button>
          </div>
        </div>
    </div> 
    

    )
  }
}



export default App;
