
let films = [
    "matrix", "interstellar", "ghostbusters", "prometheus"]; //Displays 4 films stored in an array

for ( let i = 0; i < films.length;i++) { // Use a loop to show each film in the array
    console.log(films[i]);
}

//Create a function called filmCheck() that checks if then 3rd film in the array is Ghostbusters.
const filmCheck = () => { 
    //  If it is, it should return “yey it’s ghostbusters”. If it isn’t, it
    //  should return “booo, we want ghostbusters”
    if (films[2] === "ghostbusters" ) { //have overcomplicated so can just do =="ghostbusters"
        console.log("yey it's ghostbusters")
    } else { 
        console.log("booo, we want ghostbusters")
    }       
}
filmCheck();
