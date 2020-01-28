
const signInButton = document.getElementById("signIn");
const signOutButton = document.getElementById("signOut");
const userSignedIn = document.getElementById("userSignedIn");
const userSignedOut = document.getElementById("userSignedOut");
const userDetails = document.getElementById("userDetails");
const emailDetails = document.getElementById("email");
const passwordDetails = document.getElementById("password");



signOutButton.style.visibility ="hidden";

let email;
let password;
let signedIn = true;

const signedInFunction = () => {
    if (signedIn){
        console.log(`I am true`);
        
        if (emailDetails.value == "") {
            return alert("Please enter your email")
        }
        if (passwordDetails.value == "") {
            return alert("Please enter your password")
        }
        signedIn = false;
        userDetails.style.visibility = "hidden";
        userSignedIn.textContent = "Hello you are signed in!";
        signOutButton.style.visibility ="visible";
     
    } else {
        console.log(`I am false.`);
        signedIn = true;
        // signInButton.style.visibiity = "visible";
    }

}


signInButton.addEventListener("click", () => {
    signedInFunction()

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