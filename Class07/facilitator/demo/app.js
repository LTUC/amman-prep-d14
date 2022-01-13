'use strict';

// problem domain: ASAC coffee house is a new cafe so they are updating their menu 
//  There are alot of drinks that they can add to the menu and  it's too time-consuming to hand-code them each time  
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

function Drink(name, ingredients, isCold, isHot, price) {
  this.name = name;
  this.ingredients = ingredients;
  this.imagePath = `./images/${this.name}.PNG`;
  this.isCold = isCold;
  this.isHot = isHot;
  this.price = price;
}


Drink.prototype.render = function () {
  document.write(`${this.name} is added to the menu :) `);
};


const espresso = new Drink('espresso', ['espresso'], false, true);
const latte = new Drink('latte', ['espresso', 'milk', 'whipped milk'], true, true);
const mocha = new Drink('mocha', ['espresso milk', 'whipped cream', 'chocolate syrub'], true, true);

espresso.render();

latte.render();

mocha.render();


