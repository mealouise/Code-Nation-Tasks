// Selectors for game controls
const moveLeft  = document.getElementById("moveLeft");
const moveRight  = document.getElementById("moveRight");
const moveUp  = document.getElementById("moveUp");
const moveDown  = document.getElementById("moveDown");

// Selector for character so we can move the bugs bunny
const bugsBunny  = document.getElementById("bugsBunny");

// Event listners, if a button is clicked add a margin to bugs so he moves
moveLeft.addEventListener("click", () => {
    bugsBunny.style.marginLeft = "0px";
});

moveRight.addEventListener("click", () => {
    bugsBunny.style.marginLeft = "300px";
});

moveUp.addEventListener("click", () => {
    bugsBunny.style.marginTop = "0px";
});

moveDown.addEventListener("click", () => {
    bugsBunny.style.marginTop= "300px";
});