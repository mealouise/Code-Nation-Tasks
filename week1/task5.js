/*
    Challenge 5:
    Create a variable called time, a variable called
    placeOfWork and a variable called townOfHome.
    Create an if statement that logs to the console
    where someone is at times of the day. E.g. if the time
    is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.
*/
let time = 20

if ( time >= 0 && time < 6) {
    console.log(`At ${time} I'm at home.`)
}
    else if (time >= 6 && time < 8) {
        console.log(`At ${time} I'm commuting.`)
    }
    else if (time >= 9 && time < 17) {
        console.log(`At ${time} I'm at work.`)
    }
    else {
        console.log("I'm in bed")
    }
