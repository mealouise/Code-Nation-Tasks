// let paragraphs = document.getElementsByTagName('p');


// //types of loops
// for (let paragraph of paragraphs) { // for each paragraph in this array, set paragraph = paragraph
//     console.log(paragraph);
// }


// // in loop

// for (const key in paragraphs) {
//     console.log(key)
// }

// // for (let i = 0; i < paragraphs.length; index++) { // replace for loop with the above - means dont have to define an i variable
// //     console.log(paragraphs[i]);
// // }

// const list = document.getElementsByTagName("li");

// list.length;

const list = document.getElementsByTagName("li");

    // console.log(list);
    console.log(list.length);

    // for (let i = 0; i < list.length; i++) {
    //     list[i].style.color="orange";
    // }

document.getElementsByClassName("not-orange");


for (let i = 0; i < notOrange.length; i++) {
    notOrange[i].style.color="red";
}