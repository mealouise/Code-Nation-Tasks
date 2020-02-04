
//have stats and build up card how it looks

class Card { // multiples cards wuth same properties. duplicate objects
    constructor(name,src) { //functions run when you create instance of the class
        this.name = name;
        this.src = src;
        this.container = document.getElementById("container");

        let card = this.constructCard();
        this.container.appendChild(card);
    }

    constructCard() {//puts everything together
        let card = this.createCard();
        let title = this.createTitle();
        let image = this.createImage();
        let attributes = this.createAttributeList();

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(attributes);

        // console.log(card);
        return card;

    }




    //so far returns the div element with class "card" note at this point the div isnt attached to the dom
    createCard() {
        let card = document.createElement('div');  // create a div for the card
        card.classList.add('card'); //giving card class name "card"

        return card;
    }
    //not attached to the dom
    createTitle(){
        let title = document.createElement('h1'); // create a h1 for the title
        let text = document.createTextNode(this.name); // creating the text name

        title.appendChild(text);//put text name into the h1

        title.classList.add('title'); //add title class

        return title;

    }

    createImage() {
        let image = document.createElement('img'); //create image element
        image.classList.add('image'); //add class name "image"

        image.src = this.src; // says what the new url for the image will be 
    
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
        return container;
       
     }
}

// let arr = ["harry potter", "ron weasley","hermoine granger", "professor dumbledore", "dobby"]; // so can change data in the cards

// for (let i = 0; i < arr.length; i++) {
    let card = new Card("dean", "https://images.unsplash.com/photo-1580124173799-934609852db8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60");

    // console.log(card);
    // card.createAttributeList()

// let card = new Card();
// card.createAttributeList();

// card.createAttributeList();

let player1 = true;
let player1Score;
let player2Score;

let arrAnimal = ["Snow Leopard", "Giraffe", "Lion"];

let arrPicture = [""];

let arrAttributes = 

