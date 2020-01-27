
//have stats and build up card how it looks

class Card {
    constructor(name, image,src) { //functions run when you create instance of the class

    }

    createCard() {
        let card = document.createElement('div');  // create a div for the card
        card.classList.add('card'); //adding a class name

        return card;
    }
ß
    createTitle(name){
        let title = document.createElement('h1'); // create a h1 for the title
        let text = document.createTextNode(name); // put text name into the h1

        title.appendChild(text);

        title.classList.add('title'); //add title class

        return title;

    }

    createImage(src) {
        let image = document.createElement('img'); //create image element
        image.classList.add('image'); //add class to it

        image.src = src; // asign image to it
    

        return image;
    }

    createAttributeList() {
        let container = document.createElement('div');
        container.classList.add('listcontainer'); //added class to listcontainer

        // console.log(container);
        let list = document.createElement('ul');

        container.appendChild(list);
      
        for (let i = 0; i < 5; i++) {
            let listItem = document.createElement('li');

            let attributeText = document.createTextNode("attribute");

            listItem.appendChild(attributeText);

            list.appendChild(listItem); //
        }
        console.log(container);

        





    }
}

let card = new Card();
card.createAttributeList();

// card.createAttributeList();