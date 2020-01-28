
const signInButton = document.getElementById("signIn");
const signOutButton = document.getElementById("signOut");
const userSignedIn = document.getElementById("userSignedIn");
const userSignedOut = document.getElementById("userSignedOut");
const userDetails = document.getElementById("userDetails");
const emailDetails = document.getElementById("email");
const passwordDetails = document.getElementById("password");


//can do initally set in css
// signOutButton.style.display ="none";

// let email;
// let password;
let signedIn = false; //not signed in to begin with so has to be false
const signInFunction = () => {
    // ! means not equal to
    if (!signedIn){
        console.log(`I am true`) 
        if (!emailDetails.value) {
            return alert("Please enter your email")
        }
        if (!passwordDetails.value) {
            return alert("Please enter your password")
        }
        // if (passwordDetails.value !== "winston" && ) {
        //     return alert("You have entered the wrong password")
        // }
            
        if (emailDetails.value === "esheridan45@gmail.com" && passwordDetails.value === "winston")  {
            alert("You are now logged in!") //no return here as want the function to keep running
            // console.log("is esheridan");
            
        } else {
            return alert("Your credentials are incorrect")
           
        }

        signedIn = true; //user has filled in their email and password
        userDetails.style.display = "none";
        userSignedIn.textContent = "Hello you are signed in!";
        signInButton.style.display = "none";
        signOutButton.style.display = "block";

    }

}

const signOutFunction = () => {
    signedIn = false;
    console.log("signed out button called")
    userDetails.style.display ="block";
    signOutButton.style.display = "none";
    signInButton.style.display = "block";
    emailDetails.value = "";
    passwordDetails.value = "";

}




signInButton.addEventListener("click", () => {
    signInFunction();

})

signOutButton.addEventListener("click", () => {
    signOutFunction();
})




// email.textContent = input.value
// password.textContent = input.value
    // signInButton.style.visibiity = "hidden";
        // } else if {
        //     alert("Please enter your username & password")
        // }
        // userSignedIn.textContent = "Hello you are signed in!";
        // userDetails.style.visibility = "hidden";
        // signOutButton.style.visibility ="visible";
        // signInButton.style.visibiity = "hidden";