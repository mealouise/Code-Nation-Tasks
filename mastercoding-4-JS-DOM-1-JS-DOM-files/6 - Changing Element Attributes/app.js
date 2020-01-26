const input = document.getElementById("input");
const button= document.getElementById("submit");

const image = document.getElementById("image");
//console.log the image - just to check targetting the correct element

button.addEventListener("click", () => {
    console.log(image);
    img src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.sciencenews.org%2Fwp-content%2Fuploads%2F2019%2F12%2F122119_YE_9_main-1028x579.jpg&imgrefurl=https%3A%2F%2Fwww.sciencenews.org%2Farticle%2Fchina-landed-moon-missions-apollo-top-science-stories-2019-yir&docid=qgQjrkEWvnx3wM&tbnid=FvsPDye6dwVISM%3A&vet=10ahUKEwifjI3U1pTnAhWUr3EKHTO3C-EQMwjPASgjMCM..i&w=1028&h=579&bih=751&biw=1186&q=moon&ved=0ahUKEwifjI3U1pTnAhWUr3EKHTO3C-EQMwjPASgjMCM&iact=mrc&uact=8"
    // image.src = input.value; //takes value of input
});