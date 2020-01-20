/*
    Challenge 1:
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000
  */

let sum = 0;
let runTimes = 10;

// We are going to loop 10 times to sum all multoples or 3 or 5.
for (let num = 0; num < runTimes; num++) { 

    if (num % 3 === 0) { // if number is divisible by 3
        sum = sum + num;
    } else {
        // THis will run if there is a rainer higher than zero so therefore its not a multiple
    }

    if (num % 5 === 0) { // if number is divisle by 5
        sum = sum + num;
    }
}

console.log(`Sum of multiple ${sum}`);