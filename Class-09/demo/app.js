'use strict';
// Third Step : Create a global array to store the objects 
const allDrinks = [];
// Get <section> tag from html file by it's id
let secEle = document.getElementById("secTag");
// Get <form> tag from html file by it's id
let form = document.getElementById("form");
let tableEle = document.getElementById("table");
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
    // Update the rednerDrink function by Dom Manpulation 
    let divEle = document.createElement("div");
    secEle.appendChild(divEle)
    let h3Ele = document.createElement("h3");
    h3Ele.textContent = `Drink Name : ${this.name}`
    divEle.appendChild(h3Ele);

    let imgEle = document.createElement("img");
    imgEle.src = this.image;
    divEle.appendChild(imgEle);

    let ulElem = document.createElement("ul");
    divEle.appendChild(ulElem);
    for (let x = 0; x < this.ingredients.length; x++) {
        let liEle = document.createElement("li");
        liEle.textContent = this.ingredients[x];
        ulElem.appendChild(liEle);
    }

}

Drink.prototype.renderTable = function () {
    let trEl = document.createElement("tr");
    tableEle.appendChild(trEl);

    let tdEl = document.createElement("td");
    tdEl.textContent = this.name; 
    trEl.appendChild(tdEl);
    
    let td2El = document.createElement("td");
    td2El.textContent = this.price;
    trEl.appendChild(td2El);


}

// Function to generate a random number 
Drink.prototype.generateRandomNum = function (min, max) {
    this.price = Math.floor(Math.random() * (max - min + 1) + min);
}

// Second Step : Creating Objects
let americano = new Drink("americano", ["hot water", "espresson"], "./assets/americano.png", false, true);
let latte = new Drink("latte", ["water", "espresson", "milk"], "./assets/latte.png", true, true);
let turkish = new Drink("turkish", ["water", "coffee"], "./assets/latte.png", true, false);
let mocha = new Drink("Mocha", ["water", "coffee"], "./assets/latte.png", true, false);

form.addEventListener("submit", submitHandler);

// Submit Handler function to handle the submit event that will occur on the form 
function submitHandler(event) {
    event.preventDefault();
    // console.log(event);
    //  Storing values that are coming from "the form inputs" into new variables 
    let drinkName = event.target.Dname.value;
    let img = event.target.img.value;
    let ingredients = event.target.ingredients.value;
    let isCold = event.target.cold.checked;
    let isHot = event.target.hot.checked;
    console.log(drinkName, isCold);
    let ingredientsArr = ingredients.split(",");
    let newDrink = new Drink(drinkName, ingredientsArr, img, isCold, isHot);
    newDrink.renderDrink();
    // console.log("array after submit event", allDrinks);
    savaData(allDrinks)
}

console.log("before saving in the LS",allDrinks);

// **first Step LS: create a function to save my objects in the LS**
function savaData(data) {
    let stringArr = JSON.stringify(data); // array of stings 
    localStorage.setItem('drinks', stringArr);
}

// **Second Step LS: create a function to get my objects from the LS**

function getData() {
    let retrivedArr = localStorage.getItem('drinks'); // array of strings
    // console.log("data is coming from LS", retrivedArr);
    let objArr = JSON.parse(retrivedArr) // array of objs
    console.log("data is coming from LS", objArr);
    // objArr.renderDrink();
// (name, ingredients, imageDrink, cold, hot) {
    if (objArr != null) {
        // iterating through objArr array that is coming from LS and starting from the new object index ; create new instance
        for (let i = 4; i < objArr.length; i++){
            new Drink(objArr[i].name, objArr[i].ingredients, objArr[i].imageDrink, objArr[i].cold,
                objArr[i].hot);
        }
    }
    renderAll();
}
getData();
// Fourth Step: iterating through Alldrinks array and call the methods 
function renderAll() {
    
    for (let i = 0; i < allDrinks.length; i++) {
        allDrinks[i].generateRandomNum(1, 5);
        allDrinks[i].renderDrink();
        allDrinks[i].renderTable();
    }

}

// renderAll();

