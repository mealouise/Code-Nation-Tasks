import React from 'react';
import './App.css';
import Imagecard from './components/Imagecard.js';
import news1 from './images/news1.jpg';
import news2 from './images/news2.jpg';
import news3 from './images/news3.jpg';
import news4 from './images/news4.jpg';
import news5 from './images/news5.jpg';
import news6 from './images/news6.jpg';


function App() {
  return (
    <div className="template">
    <div className="container1">
      <h3 className="topHeadline">News headlines ></h3>
      <Imagecard img={news1} headline="My newborn son died and gave another baby life" section="LIFESTYLE" />
      <Imagecard img={news2} headline="Coronavirus: Eating sea urchins and Swiss rolls under quarantine" section="HEALTH" />
      <Imagecard img={news3} headline="How a single locust becomes a plague" section="NATURE" />
      </div>
    <div className="container2">
      <div className="crossBar">
        <h3 className="topHeadline">Sport headlines ></h3>
        <p>X</p>
        </div>
          <Imagecard img={news4} headline="Electrosensitivity: 'I didn't believe people had it, then it happened to me'" section="STORIES" />
          <Imagecard img={news5} headline="Joaquin Phoenix's unusual Oscar campaign" section="ENTERTAINMENT" />
          <Imagecard img={news6} headline="Quiz of the week: What do you recall about the Super Bowl?" section="WORLD" />
      </div>
    </div>
   
  );
}

export default App;
