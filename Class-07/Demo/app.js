// problem domain: ASAC coffee house is a new cafe so they are updating their menu 
// There are alot of drinks that they can add to the menu and  it's too time-consuming to hand-code them each time  
// so They need a better and faster way.

// Each drink should has:
// - name
// - ingredients
// - an image
// - cold
// - hot 
// - price 

// TODO: dynamically generate drink objects using form data

'use strict';
// Third Step : Create a global array to store the objects 
const allDrinks = [];
// First Step : Create Constructor 
function Drink(name , ingredients , imageDrink , cold,hot) {
    this.name = name;
    this.ingredients = ingredients;
    this.image = imageDrink;
    this.isCold = cold;
    this.isHot = hot;
    this.price = 0;
    allDrinks.push(this);
}

Drink.prototype.renderDrink = function () {
    document.write(`<p> Drink Name is : ${this.name} </p>`);
    document.write(`<p> Drink Price is : ${this.price} </p>`);

}

Drink.prototype.generateRandomNum = function (min ,max) {
    
    this.price= Math.floor(Math.random() * (max - min + 1) + min);
}


// Second Step : Creating Objects
let americano = new Drink("americano", ["hot water", "espresson"], "./assets/americano.png", false, true);
// allDrinks.push(americano)
let latte = new Drink("latte", ["water", "espresson", "milk", "sugar"], "./assets/latte.png", true, true);
// allDrinks.push(latte);

let turkish = new Drink("turkish", ["water", "coffee"], "./assets/latte.png", true, false);

// Fourth Step: iterating through Alldrinks array and call the methods 
for (let i = 0; i < allDrinks.length; i++){
    allDrinks[i].generateRandomNum(1, 5);
    allDrinks[i].renderDrink();
}


console.log(americano);
console.log(latte);
console.log(allDrinks)
