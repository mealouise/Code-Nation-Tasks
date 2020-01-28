class Test {
    constructor() {
         // don't want to write events //short cut
         this.button = document.getElementById('button');
        console.log("constructor: ", this);
         this.button.addEventListener("click", this.onClick.bind(this)); //reference the class test
    
    }

    onClick() {
        console.log("method: ",this) //want access to the class not the button element so use bind which will take this inside the method
    } // got any events on element, want to change value of this to the class unless you want reference to the button so this will reference a class
}
let test = new Test();


//top trumps


let aheight = 197
let bheight = 100


if(aheight < bheight) {
    console.log("a won");
} else
console.log("b won")

if(arrayOne[0] < arrayTwo[0]) {

}