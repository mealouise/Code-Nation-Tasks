/*
    Challenge 5:
    Create a variable called time, a variable called
    placeOfWork and a variable called townOfHome.
    Create an if statement that logs to the console
    where someone is at times of the day. E.g. if the time
    is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.
*/
let time = 2000;
let placeOfWork = 'learning at code nation';
let townOfHome = 'home in urmston';

if (time >= 600 && time < 800) {
    console.log(`At ${time} I'm commuting.`);
}
else if (time >= 800 && time < 1700) {
    console.log(`At ${time} I'm at ${placeOfWork}.`);
}
else {
    console.log(`At ${time} I'm at ${townOfHome}.`);
}
