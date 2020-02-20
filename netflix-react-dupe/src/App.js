import React from 'react';
import './App.css';
import Template from './components/Template'

function App() {
  return (
    <div className="netflix__container">
    <h1 className="netflix__header">Frequently Asked Questions</h1>
      <Template text="What is Netflix?" />
      <Template text="How much does Netflix cost?" />
      <Template text="Where can I watch?" />
      <Template text="How do I cancel?" />
      <Template text="What can I watch on Netflix?" />
      <Template text="How does the free trial work?" />
      <button className="netflix__button">TRY 30 DAYS FREE ></button>
    </div>
  );
}

export default App;
