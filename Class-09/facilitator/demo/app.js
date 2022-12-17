'use strict';


// TODO: local storage 


'use strict';

function Drink(name, ingredients, isCold, isHot) {
  this.name = name;
  this.ingredients = ingredients;
  this.imagePath = `./images/${this.name}.PNG`;
  this.isCold = isCold;
  this.isHot = isHot;
  this.price = 0;
  this.calculatePrice(2, 10);
  Drink.allDrinks.push(this);
}

Drink.prototype.calculatePrice = function (min, max) {
  this.price = getRandomNumber(min, max);
};

function render() {
  const container = document.getElementById('drink');
  container.innerHTML = '';

  for (let i = 0; i < Drink.allDrinks.length; i++) {
    let drink = Drink.allDrinks[i];

    const divEl = document.createElement('div');
    container.appendChild(divEl);

    const h4El = document.createElement('h4');
    divEl.appendChild(h4El);
    h4El.textContent = drink.name;

    const pEl = document.createElement('p');
    divEl.appendChild(pEl);
    if (drink.isCold && drink.isHot) {
      pEl.textContent = `${drink.name} is available Hot and Cold and it has the following ingredients : `;
    } else if (drink.isHot) {
      pEl.textContent = `${drink.name} is available only Hot and it has the following ingredients : `;
    } else {
      pEl.textContent = `${drink.name} is available only Cold and it has the following ingredients : `;
    }

    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for (let i = 0; i < drink.ingredients.length; i++) {

      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = drink.ingredients[i];
    }

    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src', drink.imagePath);
  }
};

Drink.allDrinks = [];
const espresso = new Drink('espresso', ['espresso'], false, true);
const latte = new Drink('latte', ['espresso', 'milk', 'whipped milk'], true, true);
const mocha = new Drink('mocha', ['espresso milk', 'whipped cream', 'chocolate syrub'], true, true);




function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function addNewDrink(event) {
  event.preventDefault();

  let name = event.target.name.value;
  let imgurl = event.target.imgurl.value;
  let ingredients = event.target.ingredients.value.split(',');
  let isCold = event.target.isCold.checked;
  let isHot = event.target.isHot.checked;

  new Drink(name, ingredients, imgurl, isCold, isHot);
  settingItem();
  render();

}


function settingItem() {
  let data = JSON.stringify(Drink.allDrinks);
  localStorage.setItem('drinks', data);
}


function gettingItem() {
  let stringObj = localStorage.getItem('drinks');
  let parsedObj = JSON.parse(stringObj);
  if (parsedObj !== null) {
    Drink.allDrinks = parsedObj;
  }
  render();
}


let drinkForm = document.getElementById("drinkForm");
drinkForm.addEventListener('submit', addNewDrink);
gettingItem();