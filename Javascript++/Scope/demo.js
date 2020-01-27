let aVariable = 1;

const myFunction = () => {
    aVariable = 2;
    console.log(`Line 5: ${aVariable}`); // returns 2
    if (aVariable == 2) {
        console.log(`Line 7: ${aVariable}`); // returns 2
        aVariable = 3;
    } if (aVariable == 3) { // returns 3
        console.log(`line 10: ${aVariable}`);
        aVariable = 4; // returns 4
        console.log(`line 12: ${aVariable}`);
    }
}

// console.log(`line 16: ${aVariable}`); //returns 1
// myFunction()
// console.log(`line 18: ${aVariable}`); // returns 4


// let add = (num1) => { //first parameter
//     return (num2) => { //second parameter
//         return num1 + num2;
//     }
// }
// console.log(add(2)); //returns [function]
// console.log(add(2)(1)); //returns 3


let greeting = () => {
    console.log("Hello code nation"); //simple function which logs hello code nation to the console
}

let repeatLog = (fn) => { // write higher order function which will run simple function 5 times even though only call once. pass the simple function as a paramter and thie will involve a for loop
    for (let i = 0; i < 5; i++) {
        fn();
    }
}
// greeting();
repeatLog(greeting);