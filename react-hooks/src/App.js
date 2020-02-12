import React,{useState} from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState( //initialise the state, function setMovies to update the array
    [
      {
        name: "The Matrix",
        year: 1999
      },
      {
        name: "Harry Potter",
        year: 2001
      },
      {
        name: "Toy Story",
        year: 1995
      }
    ]
  );

  const [filteredMovies, setFiltered] = useState([""]);

  const changeMovie = () => {
    console.log("Change movie clicked");
    const newState = [...movies];

    newState[1].name = "Gladiator";
    newState[1].year = 2001
    setMovies(newState);
  
  }

  const searchMovies = (e) => {
    // console.log(e.target.value);
    const getState = [...movies]; //copy of movies state(array with the 3 films)

    // const test = ['cat', 'dog', 'camel'];

    const myFilter = getState.filter((movie) => { //get the copy of the array and put function
       
          return movie.name.toUpperCase().indexOf(e.target.value.toUpperCase()) >= 0
        });
  

    //myfilter = ['The Matrix', 'Harry Potter'];
    console.log(myFilter);
    setFiltered(myFilter);
    // console.log(animal.indexOf(e.target.value));
  }
  
  
  return (
    <div className="container">
    <h1>Search for Movies:</h1>
    <input type="text" onChange={searchMovies} />
      <h2>Movies:</h2>
     {filteredMovies.map( (movie) => {
       return <h3>{movie.name}</h3>
     })}

       </div>
  );
    }
    


      
      /* /* /* {myFilter.map( (movie) => {
        return <h3>{movie.name} was released on {movie.year}</h3>
      {/* } )} */ 

      /* <button onClick={changeMovie}>Change Movie</button> */


export default App;
