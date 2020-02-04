
/*
    does a thing /9
    
*/
//no indentation
//check weekday and weekend times
// function someTime(Time, d) { //name of function not descriptive, not consistent casing and d not descriptive
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
// }  ​
//     console.log(someTime(14, "Sunday"));
    function checkWeekendTimes(time) {
        if (time > 8 && time < 18) {
            return "Shop is open"
        } else {
            return "shop is closed"

        }
    }

    function checkWeekdayTimes(time) {
        if (time > 6 && time < 20) {
            return "shop is open"
            } else {
            return "shop is closed"
            }

    }


    function getShopStatus(time, day) { //name of function not descriptive, not consistent casing and d not descriptive
        if (day === "Saturday" || day === "Sunday") {
            return checkWeekendTimes(time)
        } else {
            return checkWeekdayTimes(time)
        }
    }

    console.log(getShopStatus(14, "Sunday"));



// function shopOpenHours(time, day) {
//      if (day === "Sunday" || day === "Saturday") {
//         if (time > 8 && time < 18) {
//             return "shop is open"
//         } else if (day === "Saturday" && time > 6 && time < 20) {
//             return "shop is open"
//         }
//         } else {
//             return "shop is closed"
//         } 
//     }

//         ​
//         ​
// console.log(shopOpenHours(14,"Sunday"));