
function someTime(time, d) {


    if (d === "Sunday" || d == "Saturday") {
    if (Time > 8 && Time < 18) {
        return "shop is open"
    } else if (d === "Saturday" && Time > 6 && Time < 20) {
        return "shop is open"
    }
    else {
        return "shop is closed"}
    }}
    ​
    ​
    console.log(someTime(14, "Sunday"));