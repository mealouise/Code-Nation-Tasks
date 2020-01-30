
let player1CardNum;
let player2CardNum;


let player1Cards = [];
let player2Cards = [];

const cardDeck = [{
    name: "Cheetah",
    speed: 104,
},
{
    name: "Gray Wolf",
    speed: 48,
},
{
    name: "Polar Bear",
    speed: 24,
},
{
    name: "Leopard",
    speed: 64,
}];


//function that combines everything together



//function that shows current card
const showCard = () => {
    player1Cards[0] = currentCardP1;
    player2Cards[0] = currentCardP2;
}


// console.log(cardDeck.length)
// function to distribute the cards between 2 players
const distributeCards = () => {
    for (let i=0; i < cardDeck.length; i++) {
        if ( i % 2 == 0) {
            player1Cards.push(cardDeck[i]);
            player1CardNum = player1Cards.length;
        } else {
            player2Cards.push(cardDeck[i]);
            player2CardNum = player2Cards.length;
        }
        // cardDeck = [];
       
}
}
distributeCards();
// console.log(player1CardNum);
// console.log(player2CardNum);
console.log(`Player1's cards are: ${player1Cards.length}`);
console.log(`Player2's cards are: ${player2Cards.length}`);
// console.log(cardDeck);

//function if win / or loose what happens
const winOrLose = () => {
    if (player1Cards[0].speed > players2Cards[0].speed) {
        player1CardNum++;
        player2CardNum--;
        player1Cards.push(currentCardP2.splice()); //card and position of that card
    // } else if (player1Cards[0].speed === player2Cards[0].speed){ // creating a holdingpile
    //     const holdingPile = player1Cards.shift();

    } else {
        player1CardNum--;
        player2CardNum++;
        player2Cards.push(currentCardP1.splice());

    } 
}
winOrLose();
console.log(player1Cards);
console.log(player2CardNum);