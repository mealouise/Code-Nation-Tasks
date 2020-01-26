// * Add Event Listener example

const myHeading = document.getElementById("heading"); //declaring variable

// myHeading.addEventListener("click", () => {
//     myHeading.style.color = "purple";
// });

myHeading.addEventListener("mouseover", () => {
    myHeading.style.color = "pink";
});

/// MOST COMMON EVENTLISTENERS: ONLOAD,ONCLICK, ONMOUSEOVER, OVERFOCUS, ONBLUR ///

// *Select Element by ID

const input = document.getElementById("input");
const button = document.getElementById("button");
const domInfo = document.getElementById("domInfo");

button.addEventListener("click", () => {
    domInfo.style.fontSize = input.value;
    domInfo.style.backgroundColor = input.value;
});

//* Select elements by particular type//

const list = document.getElementsByTagName("li");
// if want to change the color of each item in list can use for loop and put items in an array
for (let i=0; i < list.length; i++) {
    list[i].style.fontFamily = "impact";
}

const notBlue = document.getElementsByClassName("not-blue");
for (let i=0; i <notBlue.length; i++) {
    notBlue[i].style.color = "orange";
}

// query selector//

// const listTwo = document.querySelector("list-two");
// for (let i=0; i <listTwo.length; i++) {
//     listTwo[i].style.color = "yellow";}








