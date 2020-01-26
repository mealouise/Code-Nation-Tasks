const image = document.getElementById("cat");
const button = document.getElementById("submit");
image.style.display = "none";//shows image
// console.log(image.style);

// hide the image when the button is clicked and show it whens its clicked again
button.addEventListener("click", () => {
    // console.log(image.style)
    // image.style.display = "none";
    // image.style.display = "block"
     if (image.style.display === "none") {
         image.style.display = "block";
//     if (image.style.display == "block") {
//         image.style.display = "none";
//     } else image.style.display = "block";
// })
     } else {
         image.style.display = "none";
     }
    })
