import React from 'react';
import './App.css';
import Imagebar from './components/Imagebar.js';
import Portfolio from './components/Portfolio.js';
import hotelroom1 from './images/hotelroom1.jpeg';
import hotelroom2 from './images/hotelroom2.jpeg';
import hotelroom3 from './images/hotelroom3.jpeg';
import profile1 from './images/profile1.jpeg';
import profile2 from './images/profile2.jpeg';
import profile3 from './images/profile3.jpeg';



function App() {
  return (
    <div className="template">
    <div className="container1">
      <Imagebar img={hotelroom1} text="A review about the hotel room"/>
      <Portfolio img={profile1} name="Lisa" country="Portsmouth"/>
      </div>
      <div className="container2">
      <Imagebar img={hotelroom2} text="Another review about the hotel room"/>
      <Portfolio img={profile2} name="Mark" country="Australia"/>
      </div>
    <div className="container3">
      <Imagebar img={hotelroom3} text="And another review about the hotel room"/>
      <Portfolio img={profile3} name="Marie" country="London"/>
    </div>

    


    </div>
    
  );
}

export default App;
