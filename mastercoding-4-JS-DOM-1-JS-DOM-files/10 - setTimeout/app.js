function greeting (name) { 
    console.log("Hello " + name);

    setTimeout(function() {
        console.log("Today is wednesday");
    }, 5000); //time delay on the function, so when loaded js will wait 5 seconds then we'll see the console.log
}
greeting("emma");