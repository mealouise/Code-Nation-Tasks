// * preset conditions for user can get cash */

/* 
    creating a cash machine
    need the following:
    type pin
    check checkBalance
    withdraw Cash
    deposit 
    cancel
    check pin 
*/

/*
    cash machine
    -------------
    1. user enters pin >
    2. user is shown available options >
    3.if user selects option 1 to view balance - show balance >
    4.if users selects withdraw cash - enter amount to withdraw and then show balance >
    5.if user selects deposit - enter amount to deposit and show new balance
    6.if user selects cancel -go back to step 2
*/

let userBalance = 25
let userPin = 1234
let accountNumber = 987654321
let userInput;

/* 1. function to enter pin */

const enterPin = () => {
    userInput = prompt("Enter your pin"); 
    if (userPin == userInput) {
        userOptions();
    } else {
        enterPin(); // to not repeat code can just can just call pin function again
    }
} 
// if think some code can be re-used elsewhere put it in a function
const showBalance = () => {
    alert("Here's you current balance £" +userBalance) //alert shows information whilst prompt asks you information
}

const showWithdrawal = () => {
    userInput = prompt("Please enter the amount you wish to withdraw");
    userBalance = userBalance - parseInt(userInput);
    alert(`You're new balance is £${userBalance}`); 
}
const showDeposit = () => {
    userInput = prompt("Please enter the amount you wish to deposit");
    userBalance = userBalance + parseInt(userInput);
    alert(`You're new balance is £${userBalance}`);
}

const userOptions = () => {
    userInput = prompt("Please choose an option: \n1: Check balance \n2: withdraw cash \n3: deposit \n4:cancel");
    
    if (userInput == 1) { // 2 == means you dont need to convert the string to number as loose comparison
        // if user selects option 1 to view balance - show balance
        showBalance();
    } else if (userInput == 2) {
        // 4.if users selects withdraw cash - enter amount to withdraw and then show balance
        showWithdrawal();
    } else if (userInput == 3) {
       // 5.if user selects deposit - enter amount to deposit and show new balance
       showDeposit();
    } else if (userInput == 4) {
        // 6.user selects cancel -go back to step 2
        // userOptions(); // looks like continous loop so best to go back to pin number
        enterPin();
    }
} 

enterPin()






















// alert("Hello, World")
/* created option function */

// const userOption = (userInput) => {
//     console.log("What would you like to do")
//     if (userInput === 1) {
//         checkBalance()
//     } else if (userInput === 2) {
//         checkPin()
//     } else {
//         console.log("cancel")

//     }
// }

// const optionsFunction = () => {
//     userInput = prompt("Please choose an option: \n1: Check balance \n2: withdraw cash \n3: deposit \n4:cancel")
//     if(userInput == 1) {
//         checkBalance()
//     } else if (userInput == 2) {
//         withdrawCash()
//     } else if (userInput == 3 ) {
//         deposit()
//     } else if (userInput == 4 ) {
//         cancel()
//     } else {
//         alert("WHAT!")
//     }
// // --- have to create all the new functions
// }
// /* pin function */
// const checkPin = () => {
//     userInput = prompt("Please enter your pin:")
//     console.log(userInput)
//     if (userInput == userPin){ 
//         optionsFunction() }
//         else {
//         console.log("Please enter the correct pin")
//     }
// }
// /* did have === but parameter is a string so changed to == so not exact match

// /* check balance function */
// const checkBalance = () => {
//     console.log(`Your balance is £${userBalance}`);
// }
// /* cashwithdrawal function */
// const withdrawCash = () => {
//     userInput = prompt("How much would you like to withdraw?")
//     if (userInput <= userBalance) {
//         userBalance -= userInput
//         alert(`You have successfully withdrawn £${userInput}.\nYour new balance is `)
//         optionsFunction()
//     }
//     else {
//         alert("Not enough money. Please try again.")
//         withdrawCash()
//     }
//     }

// //  /* deposit function */
//  const deposit = () => {
//     userInput = prompt("How much would you like to deposit?")
//     userBalance += parseInt(userInput)
//     alert(`Your new balance is £${userBalance}.`)
//     }

//     /* cancel function */
// const cancel = () => {
//     userInput.cancel = prompt("Cancel")
//     if (userInput = "Yes") {

//     }
//     else {

//     }
// }

// checkPin(1234);

// // userOption(1);
// /* NOTES */
// // have to call the pin first and have changed 'checkbalance' to userOption 1 so user enters password then moves onto option 1
// // otherwise if just call option1 before the pin the user will get money either way