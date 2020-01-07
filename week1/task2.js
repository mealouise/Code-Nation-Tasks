// CHALLENGE TWO
/*
    Create a variable called num.
    Check if the variable is divisible by 3 or 5. If it is log
    “This number is divisible by 3 or 5” to the console.
    Otherwise log “This number is not divisible by 3 or 5”.
*/

/*let num = 20

if (num % 3 | 5) {
    console.log("This number is divisible by 3 or 5")
} else {
    console.log("This number is not divisible by 3 or 5")
}*/

let num = 20
switch(true) {
    case (num % 3)==0:
    case (num % 5)==0:
        console.log("This number is divisible by 3 or 5");
    break;
    default:
        console.log("This number is not divisible by 3 or 5");
}