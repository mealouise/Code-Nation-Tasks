import React from 'react';
import './App.css';
import Imagebar from './components/Imagebar.js';
import hotelroom1 from './images/hotelroom1.jpeg';
import hotelroom2 from './images/hotelroom2.jpeg';
import hotelroom3 from './images/hotelroom3.jpeg';
import fivestars from './images/fivestars.png';
import profile1 from './images/profile1.jpeg';
import profile2 from './images/profile2.jpeg';
import profile3 from './images/profile3.jpeg';



function App() {
  return (
    <div>
      <Imagebar img={hotelroom1} text="A review about the hotel room" img={profile1}/>
      <Imagebar img={hotelroom2} text="Another review about the hotel room"/>
      <Imagebar img={hotelroom3} text="And another review about the hotel room"/>

    </div>
    
  );
}

export default App;
