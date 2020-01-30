// /*
// 	does a thing
// // */

// /*
//     does a thing /9
    
// */
// function someTime(Time, d) {
//     if (d === "Sunday") {
//     if (Time > 8 && Time < 18) {
//     return "shop is open"
//     } else {
//     return "shop is closed"}
//     } else if (d === "Saturday") {
//     if (Time > 8 && Time < 18) {return "shop is open"} else {
//     return "shop is closed"}
//     } else if (Time > 6 && Time < 20) {
//     return "shop is open"
//     } else {
//     return "shop is closed"
//     }
// }
//     ​
//     ​
//     console.log(someTime(14, "Sunday"));






function shopOpenHours(time, day) {
     if (day === "Sunday" || day === "Saturday") {
        if (time > 8 && time < 18) {
            return "shop is open"
        } else if (day === "Saturday" && time > 6 && time < 20) {
            return "shop is open"
        }
        } else {
            return "shop is closed"
        } 
    }

        ​
        ​
console.log(shopOpenHours(14,"Sunday"));