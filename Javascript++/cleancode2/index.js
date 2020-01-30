
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