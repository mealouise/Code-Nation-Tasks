import React,{useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  counter: 0;

const myFunc = () => {
  console.log('button clicked');
  setCounter(counter + 1);
}
  return (
    <div>
      <h1>My current counter is {counter}</h1>
      <button onClick={myFunc}>Increase</button>
    </div>
   
  );

}

export default App;
