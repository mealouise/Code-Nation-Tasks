import React from 'react';
import './App.css';
import Follow from './components/Follow';
import user1 from './images/user1.png';
import user2 from './images/user2.jpg';
import user3 from './images/user3.png';

function App() {
  return (
    <div>
   <div className="container">
   <h4 className="headline">Who to follow</h4>
     <Follow img={user1} name="Tickmill" username="@Tickmill" />
     <Follow img={user2} name="Your Life In A Song" username="@LifeInASong_UK" />
     <Follow img={user3} name="Country Routes News" username="@CRoutesNews" />
     <h5 className="showMore">Show More</h5>
   </div>
    </div>
    
  );
}

export default App;
