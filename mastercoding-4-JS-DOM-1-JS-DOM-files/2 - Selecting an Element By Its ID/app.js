// let heading  = document.getElementById("heading")

// console.log(heading);

// heading.style.backgroundColor = "yellow"


const heading = document.getElementById("heading")
const input = document.getElementById("input")
const button = document.getElementById("button")


// button.addEventListener("click", ()=> { // my attempt
//     input.getElementById = input.value ; 
// });

// input.appendChild("click", fucntion ()) {
//     console.log(this)
//     this.heading.style.color = this.value;
// }
// input.addEventListener("click", heading);

button.addEventListener("click", ()=>{
    heading.style.color = input.value;
} );
