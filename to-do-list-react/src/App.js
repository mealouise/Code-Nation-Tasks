import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  // const [todos, setTodos] = useState([
  //   { text: 'eat pretzels', key: '1' },
  //   { text: 'watch f1', key: '2' },
  //   {text: 'make a to-do list', key:'3' }
  // ]);


  return (
  <div>
    <p>Hello!</p>
    <TodoList/>

  </div>
  );
}

export default App;
