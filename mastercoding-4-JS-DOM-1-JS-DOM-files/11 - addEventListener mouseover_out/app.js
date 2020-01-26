const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
/*declare new const*/




button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

removeBtn.addEventListener('click', () => {
    let listItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];

    list.removeChild(listItem);
})
const list = document.getElementById("list"); //grabbing the li

const listItem = document.getElementsByTagName("li"); //grab all li's on the page
// console.log(listItem);
// console.log(listItem.length);
// listItem[0] //as know have 3 could just grab each individual list item
// listItem[1]
// listItem[2]

for(let i= 0; i<listItem.length; i++){ // we use for loop so it will run function of the length of the list
    // console.log(listItem);
    listItem[i].addEventListener("mouseover", () => {
        listItem[i].textContent = listItem[i].textContent.toUpperCase(); //get the li, access the text content , say what it is but turns code to uppercase
    });
    listItem[i].addEventListener("mouseout" ,() => {
        listItem[i].textContent = listItem[i].textContent.toLowerCase();
    });

}

/*New code below*/
// list.addEventListener("mouseover", () => {
//     // console.log("mouse hover over ul")
// })