// CHALLENGE 3 
    /*create a variable called num.
    If num is divisible by 3 log “fizz” to the console, if it’s
    divisible by 5 log “buzz” to the console, if it’s divisible
    by both 3 and 5 log “fizz buzz” to the console.
    Otherwise log num to the console.
have to add ==0 to take away any remainder and be cautious of the order as the first 1 is always true, need to check both conditions first*/



let num = 15;
if ( num % 3==0 && num % 5==0) {
    console.log("fizz buzz");
} else if (num % 3==0) {
    console.log("fizz")
} else if (num % 5==0) {
    console.log("buzz");
} else {
    console.log(num)
}