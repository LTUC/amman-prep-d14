'use strict';

// Second Part a simple example how to save and get the data from LS
let form = document.getElementById("form");
let nameInput = document.getElementById("name");

let hobbyInput = document.getElementById("Hobby");
let h4 = document.getElementById("h4");
h4.style.marginLeft = "33%";
h4.textContent = `I'm ${localStorage.getItem('firstValue')} 😊 & I love ${localStorage.getItem('secondValue')} 😉 `
form.addEventListener("submit", submitHandler);

function submitHandler(event) {
    event.preventDefault();
    // first: I will save the data "inside the submitHandler function"
     localStorage.setItem('firstValue', nameInput.value)
    //  localStorage.getItem('firstValue');
     localStorage.setItem('secondValue', hobbyInput.value)
    //  localStorage.getItem('secondValue');
    h4.textContent = `I'm ${localStorage.getItem('firstValue')} 😊 & I love ${localStorage.getItem('secondValue')} 😉 `
    // console.log(nameInput.value);
}


// First Part "localStorage and it methods"

// console.log(localStorage);


// // 1- save the data
// localStorage.setItem("color", "red");
// localStorage.setItem("age", "30");
// localStorage.setItem("age2", 30);

// // 2- remove a specific key 

// localStorage.removeItem("age");

// // 3- get a specific item 

// let getData = localStorage.getItem("color")
// console.log(getData);

// // 4- key to get the item by it's index

// let getkey = localStorage.key(1)
// // console.log(getkey);

// // 5- clear the localStorage

// // console.log(getkey);
// localStorage.clear();
// console.log(getkey);













// second :I will get the data "inside the submitHandler function"
// localStorage.setItem('secondValue', hobbyInput.value)

// third : I will update the text content to get fill the text from local storage "inside the submitHandler function"
//  h4.textContent = `I'm ${localStorage.getItem('firstValue')} 😊 & I love ${localStorage.getItem('secondValue')} 😉 `

// fourth : i will add this line before the submitHandler function to get the data that is stored in the LS
// h4.textContent = `I'm ${localStorage.getItem('firstValue')} 😊 & I love ${localStorage.getItem('secondValue')} 😉`h4.textContent = `I'm ${localStorage.getItem('firstValue')} 😊 & I love ${localStorage.getItem('secondValue')} 😉`