import React from 'react';
import './App.css';
import './Follow.css';
import Trends from './components/Trends';

function App() {
  return (
    <div>
   <div className="container">
   <h4 className="headline">Trends for you</h4>
     <Trends country="Trending in United Kingdom" hashtag="#GalentinesDay" tweetnumber="16.1k Tweets" />
     <Trends country="Trending in United Kingdom" hashtag="#GalentinesDay" tweetnumber="16.1k Tweets" />
     <Trends country="Trending in United Kingdom" hashtag="#GalentinesDay" tweetnumber="16.1k Tweets" />
     <Trends country="Trending in United Kingdom" hashtag="#GalentinesDay" tweetnumber="16.1k Tweets" />
     <Trends country="Trending in United Kingdom" hashtag="#GalentinesDay" tweetnumber="16.1k Tweets" />
   </div>
    <div classname="containerFollow">
    <h4 className="followHeadline">Who to follow</h4>
    </div>


    </div>

    
  );
}

export default App;
