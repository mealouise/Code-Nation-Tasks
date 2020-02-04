const play = document.getElementById("play");
const cardDeck1 = document.getElementById("cardDeck1");
const cardDeck2= document.getElementById("cardDeck2");
const player1Status = document.getElementById("player1Status");
const player2Status = document.getElementById("player2Status");
const animalImageOne = document.getElementById("animalImage");
const animalImageTwo = document.getElementById("animalImage");
const reset = document.getElementById("reset");
const nameOne = document.getElementById("nameOne");
const nameTwo = document.getElementById("nameTwo");
// const speedButton = document.getElementById("speed");


let player1CardNum;
let player2CardNum;


let player1Cards = [];
let player2Cards = [];

const cardDeck = [{
    name: "Cheetah",
    speed: 104
},
{
    name: "Gray Wolf",
    speed: 48
},
{
    name: "Polar Bear",
    speed: 24
},
{
    name: "Leopard",
    speed: 64
}];


//function that shows current card
const showCard = () => {
    // player1Cards[0] = currentCardP1;
    // player2Cards[0] = currentCardP2;
    console.log("Player 1's cards are" + JSON.stringify(player1Cards[0]));
    console.log("Player2's cards are" + JSON.stringify(player2Cards[0]));

}



const distributeCards = () => {
    for (let i=0; i < cardDeck.length; i++) {
        if ( i % 2 == 0) {
            
            player1Cards.push(cardDeck[i]);
            // cardDeck1.textContent = `Card Deck 1: ${player1Cards.length}`;
        } else {
            
            player2Cards.push(cardDeck[i]);
            // cardDeck2.textContent = `Card Deck 2: ${player2Cards.length}`;
        }
        // cardDeck = [];
    }
    console.log(player2Cards);
    console.log(player1Cards);
    console.log('-----------');
    // score();
}

const takeCard = () => {
    showCard();


    if (player1Cards[0].speed > player2Cards[0].speed) {

        // player1CardNum++;
        // player2CardNum--;
        let removedCardP1  = player2Cards.shift(); 
        player1Cards.push(removedCardP1);
        
        removedCardP1 = player1Cards.shift()
        player1Cards.push(removedCardP1)

    } else if (player2Cards[0].speed > player1Cards[0].speed) {
    
        // player1CardNum--;
        // player2CardNum++;
        let removedCardP2 = player1Cards.shift();
        player2Cards.push(removedCardP2);

        removedCardP2 = player2Cards.shift()
        player2Cards.push(removedCardP2)
    } 
}

//////////// } else if (player1Cards[0].speed === player2Cards[0].speed){ // creating a holdingpile
    //     const holdingPile = player1Cards.shift();

const restart = () => {
    player1CardNum = 0;
    player2CardNum = 0;
    player1Cards = [];
    player2Cards = [];
    
    // nameOne.textContent = "",
    // nameTwo.textContent = "",
}


const loose = () => {

    
    if (player1Cards.length === 0) {
        console.log("Player 1 has lost!")
        player1Status.textContent = "You have lost!";
    } else if (player2Cards.length === 0) {
        console.log("Player 2 has lost!")
        player2Status.textContent = "You have lost!";
    }
    // dont put reset here as it resets the game even if a player hasnt won.
    // reset();
}
    console.log(player1Cards);
    console.log(player2Cards);
    console.log('-----------');

const winner = () => {
    if (player1Cards.length === 4) {
        console.log("Player 1 has won!")
        player1Status.textContent = "Winner";
    } else if (player2Cards.length === 4) {
        console.log("Player 2 has won!")
        player2Status.textContent = "Winner";
    }
}


distributeCards();
// Create a button to reset the game that calls the reset() function and distributeCards() functions

play.addEventListener("click", () => {
    
    winner();
    takeCard();
    loose();

    cardDeck1.textContent = `Card Deck 1: ${player1Cards.length}`;
    cardDeck2.textContent = `Card Deck 2: ${player2Cards.length}`;
    
    /* 
        do an if statementhere to check if player 1 or 2 has won, 
        if a player has won you dont need to update the cards on the screen
        i.e do the below.
    */
   if(player1Cards.length > 0 && player2Cards.length > 0) {
        nameOne.textContent = player1Cards[0].name;
        nameTwo.textContent = player2Cards[0].name;
   }

});

reset.addEventListener("click", () => {
    restart();

    nameOne.textContent = "";
    nameTwo.textContent = "";
    cardDeck1.textContent = `Card Deck 1:`;
    cardDeck2.textContent = `Card Deck 2:`;
});


// console.log(cardDeck.length)
// function to distribute the cards between 2 players   
    // // console.log("player has won")
    // for (let i=0; i < cardDeck.length; i++) {
    //     if (player1Cards.length === 0 || player2Cards.length === 0) {
    //     console.log("Player has won");
    //     reset(); 
    //     }
    //     else {
    //     score() 
    // }




// console.log("Player 1's cards are" + JSON.stringify(player1Cards));
// console.log("Player2's cards are" +JSON.stringify(player2Cards));

// score();
// score();
// score();
// winningPlayer();

console.log("Player 1's cards are: " + JSON.stringify(player1Cards));
console.log("Player 2's cards are " + JSON.stringify(player2Cards));
// winningPlayer();


// const winningPlayer = () => { //POINTER - help with the loop to loop throughthe score function and declare a winner

//     while (player1Cards.length > 0 || player2Cards.length > 0) {
//         score();
//         if (player1Cards.length === 0) {
//             return ("Player 1 has won!")
//         }
//         if (player2Cards.length === 0) {
//         return ("Player 2 has won!")
//         }
//         reset(); 
// }
// }
