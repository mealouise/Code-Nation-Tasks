
//have stats and build up card how it looks

class Card { // multiples cards wuth same properties. duplicate objects
    constructor(name, image,src) { //functions run when you create instance of the class

    }
    //so far returns the div element with class "card" note at this point the div isnt attached to the dom
    createCard() {
        let card = document.createElement('div');  // create a div for the card
        card.classList.add('card'); //giving card class name "card"

        return card;
    }
    //not attached to the dom
    createTitle(name){
        let title = document.createElement('h1'); // create a h1 for the title
        let text = document.createTextNode(name); // creating the text name

        title.appendChild(text);//put text name into the h1

        title.classList.add('title'); //add title class

        return title;

    }

    createImage(src) {
        let image = document.createElement('img'); //create image element
        image.classList.add('image'); //add class name "image"

        image.src = src; // says what the new url for the image will be 
    
        return image;
    }

    createAttributeList() {
        let container = document.createElement('div'); //creating the container div
        container.classList.add('listcontainer'); //added class name to container "listcontainer"

        // console.log(container);
        let list = document.createElement('ul'); //create element ul

        container.appendChild(list); // put text in it
      
        for (let i = 0; i < 5; i++) {
            let listItem = document.createElement('li'); //creates 4 li's

            let attributeText = document.createTextNode("attribute"); //creates the text for the list item

            listItem.appendChild(attributeText); //attached it to the list item(append text to list item)

            list.appendChild(listItem); //(appends list item to the ul)
        }
        console.log(container);
     }
}
let card = new Card();
card.createAttributeList();

// card.createAttributeList();