'use strict';

// Third Step : Create a global array to store the objects 
const allDrinks = [];
// Get <section> tag from html file by it's id
let secEle = document.getElementById("secTag");
// console.log(secEle);

// Get <form> tag from html file by it's id
let form = document.getElementById("form");
// console.log(form);

// First Step : Create Constructor 
function Drink(name, ingredients, imageDrink, cold, hot) {
    this.name = name;
    this.ingredients = ingredients;
    this.image = imageDrink;
    this.isCold = cold;
    this.isHot = hot;
    this.price = 0;
    allDrinks.push(this);
}

// Render Method to render the data in the browser 
Drink.prototype.renderDrink = function () {
    // document.write(`<p> Drink Name is : ${this.name} </p>`);
    // document.write(`<p> Drink Price is : ${this.price} </p>`);

    // Update the rednerDrink function by Dom Manpulation 
    let h3Ele = document.createElement("h3");
    h3Ele.textContent = `Drink Name : ${this.name}`
    secEle.appendChild(h3Ele);
    
    let imgEle = document.createElement("img");
    imgEle.src = this.image;
    secEle.appendChild(imgEle);
    
    let ulElem = document.createElement("ul");
    secEle.appendChild(ulElem);
    for (let x = 0; x < this.ingredients.length; x++){
        let liEle = document.createElement("li");
        liEle.textContent = this.ingredients[x];
        ulElem.appendChild(liEle);
    }
  
}

// Functio to generate a random number 
Drink.prototype.generateRandomNum = function (min, max) {

    this.price = Math.floor(Math.random() * (max - min + 1) + min);
}


// Second Step : Creating Objects
let americano = new Drink("americano", ["hot water", "espresson"], "./assets/americano.png", false, true);
// allDrinks.push(americano)
let latte = new Drink("latte", ["water", "espresson", "milk", "sugar"], "./assets/latte.png", true, true);
// allDrinks.push(latte);

let turkish = new Drink("turkish", ["water", "coffee"], "./assets/latte.png", true, false);

let mocha = new Drink("Mocha", ["water", "coffee"], "./assets/latte.png", true, false);

//                    (the event , the action /function)
form.addEventListener("submit", submitHandler);

// Submit Handler function to handle the submit event that will occur on the form 
function submitHandler(event) {
    event.preventDefault();
    // console.log(event);
    // console.log(event.target.Dname.value);

    // alert('the form is submitted successfuly');
    // console.log("the form is submitted successfuly");

//  Storing values that are coming from "the form inputs" into new variables 
    let drinkName = event.target.Dname.value;
    let img = event.target.img.value;
    let ingredients = event.target.ingredients.value;
    let isCold = event.target.cold.checked;
    let isHot = event.target.hot.checked;
    console.log(drinkName, isCold);
    let ingredientsArr = ingredients.split(",");
//  function Drink(name, ingredients, imageDrink, cold, hot)
    let newDrink = new Drink(drinkName, ingredientsArr, img, isCold, isHot);
    newDrink.renderDrink();
}





// Fourth Step: iterating through Alldrinks array and call the methods 
for (let i = 0; i < allDrinks.length; i++) {
    allDrinks[i].generateRandomNum(1, 5);
    allDrinks[i].renderDrink();
}


// console.log(americano);
// console.log(latte);
console.log(allDrinks);