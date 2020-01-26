//cycle over the list items and apply colors from the array called colours
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
const listItems = document.querySelectorAll("li"); //looks for all elements with li(not widely used)

for (let i = 0; i < colours.length; i++) { //til run out of li's keep going// another word for list is array, array = list
    listItems[i].style.color = colours[i]; //issues with loop is it doesn't cycle back. soon as color i=purple it won't change any more colours to any new items added
}


// const listItems = document.querySelectorAll("li:nth-child(even)");
// console.log(listItems);
// // console.log(listItems.length);

// for (let i =0; i <listItems.length; i++) {
//     listItems[i].style.color = "lightgreen";
// }