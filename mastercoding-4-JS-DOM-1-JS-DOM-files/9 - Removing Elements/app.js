const input = document.getElementById('input');
const button = document.getElementById('submit');
/*add new const below*/
const removeBtn = document.getElementById("remove");

/*from previous ex*/
button.addEventListener('click', () => {
    let listItem = document.createElement('li');

    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    
    list.appendChild(listItem);

    input.value = '';
})

/*New code below*/

removeBtn.addEventListener('click', () => {
    // console.log("remove button clicked");
    let lastItem = document.querySelector("li:last-child"); //grabbed last item, then ul
    let list = document.getElementsByTagName("ul")[0];//grab first ul on the page
    list.removeChild(lastItem);
})