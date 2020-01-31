
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


//function that combines everything together



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
            player1CardNum = player1Cards.length;
        } else {
            
            player2Cards.push(cardDeck[i]);
            player2CardNum = player2Cards.length;
        }
        // cardDeck = [];
       
}
// score();
}
distributeCards();


const score = () => {
    // console.log(player2Cards);
    
    if (player1Cards[0].speed > player2Cards[0].speed) {

        // player1CardNum++;
        // player2CardNum--;
        let removedCardP1  = player2Cards.shift(); 
        
        player1Cards.push(removedCardP1);
        
        
        //card and position of that card
    // } else if (player1Cards[0].speed === player2Cards[0].speed){ // creating a holdingpile
    //     const holdingPile = player1Cards.shift();

    } else {
        // player1CardNum--;
        // player2CardNum++;
        let removedCardP2 = player1Cards.shift();
        player2Cards.push(removedCardP2);
    } 

    console.log(player2Cards);

}

const reset = () => {
    player1CardNum = 0;
    player2CardNum = 0;
    player1Cards = [];
    player2Cards = [];
    
    }
    
    



// console.log(cardDeck.length)
// function to distribute the cards between 2 players

/**
 * 
 * while(true)
 * 
 *      p1 || p2 = 0
 *          return winningplayer
 */
const winningPlayer = () => {

    while (player1Cards.length > 1 || player2Cards.length > 1) {
        score();
        if (player1Cards.length === 0 || player2Cards.length === 0)
        console.log(`The winning player is `)
        reset(); 



        
    // console.log("player has won")
    for (let i=0; i < cardDeck.length; i++) {
        if (player1Cards.length === 0 || player2Cards.length === 0) {
        console.log("Player has won");
        reset(); 
        }
        else {
        score() 
    }
}
}




// console.log("Player 1's cards are" + JSON.stringify(player1Cards));
// console.log("Player2's cards are" +JSON.stringify(player2Cards));

showCard();
score();

console.log("Player 1's cards are: " + JSON.stringify(player1Cards));
console.log("Player 2's cards are " + JSON.stringify(player2Cards));
winningPlayer();













// const playGame = () => {
//     distributeCards();
//     score();
//     winningPlayer();
// }

// playGame();

// console.log(player1CardNum);
// console.log(player2CardNum);
// have object in a string so can't print the usual way, have to add commar to seperate
// console.log(`Player1's cards are: ', ${player1Cards[0]}`);
// console.log(`Player2's cards are: ', ${player2Cards[0]}`);
// console.log(cardDeck);

//function if player1 wins
// const score = () => {
//     if (player1Cards[0].speed > players2Cards[0].speed) {
//         player1CardNum++;
//         player2CardNum--;
//         let removedCardP1  = player1Cards.splice(0,1); 
//         player1Cards.push(removedCardP1);
        
        
//         //card and position of that card
//     // } else if (player1Cards[0].speed === player2Cards[0].speed){ // creating a holdingpile
//     //     const holdingPile = player1Cards.shift();

//     } else {
//         player1CardNum--;
//         player2CardNum++;
//         let removedCardP2 = player2Cards.splice(0,1);
//         player2Cards.push(removedCardP2);
//     } 
// }
