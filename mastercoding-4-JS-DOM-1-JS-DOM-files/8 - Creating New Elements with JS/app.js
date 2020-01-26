const input = document.getElementById("input"); //grabbing the elements to be used elsewhere
const button = document.getElementById("submit");

// let list = document.getElementsByTagName("ul")[0];another way of writing the same code - will get error if use const twice
let list = document.getElementById("list"); // 

const showhidebtn = document.getElementById("showhide-btn");

button.addEventListener("click", () => {
    // console.log("button clicked"); //check function is working
    let listItem = document.createElement("li"); //created new variable listitem
    listItem.textContent = input.value; //whatever user enters set as the new list item
    // console.log(listItem);
    list.appendChild(listItem); // child list item we just created
    if (input.value =="") {
        document.getElementById('errorMessage').textContent= 
        'Please enter a vegetable'; // if statement has to be before the blank input value
    } else {
        list.appendChild(listItem);
    }
    input.value = ""; //clears input in a field
  
});

showhidebtn.addEventListener("click", () => {
    // console.log("hide button clicked");
    if (list.style.display == "none") {
        list.style.display = "block"; //will be shown on page again
        showhidebtn.textContent = "hide"; // access button to change text to hide
    } else {
        list.style.display = "none";
        showhidebtn.textContent = "show";
    }

});

