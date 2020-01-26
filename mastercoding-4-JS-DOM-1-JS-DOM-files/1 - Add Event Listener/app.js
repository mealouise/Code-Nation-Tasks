const myHeading = document.getElementById("heading");

myHeading.addEventListener("click", () => { //function doesnt have a name - only being used once if we dont access function dont necessarily give a name.not calling
    myHeading.style.color = "red";
});

//can create a function so dont duplicate code

let heading1 = document.getElementById('heading 1');
let heading2 = document.getElementById('heading 2');
let heading3 = document.getElementById('heading 3');


// const func = () => { //option 1 declaring function. this changes based on how defined function
//     console.log(this)
// }


function func() { // option 2
    console.log(this)
    this.style.color = "red"
}

heading1.addEventListener("click", func)

heading2.addEventListener("click", func)

heading3.addEventListener("click", func)