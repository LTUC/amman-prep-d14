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

function Drink(name,ingredients,isCold,isHot){
  this.name = name;
  this.ingredients = ingredients;
  this.imagePath = `./images/${this.name}.PNG`;
  this.isCold = isCold;
  this.isHot = isHot;
  this.price = 0;
}

Drink.prototype.calculatePrice = function(min,max){
  this.price = getRandomNumber(min,max);
};

Drink.prototype.render = function(){
  const container = document.getElementById('drink');
  // create the element
  // append the element to it's parent
  // add text content to the element || attribuates

  const divEl = document.createElement('div');
  container.appendChild(divEl);

  const h4El = document.createElement('h4');
  divEl.appendChild(h4El);
  h4El.textContent = this.name;
  
  const pEl = document.createElement('p');
  divEl.appendChild(pEl);
  if(this.isCold && this.isHot) {
    pEl.textContent = `${this.name} is available Hot and Cold and it has the following ingredients : `;
  }else if(this.isHot){
    pEl.textContent = `${this.name} is available only Hot and it has the following ingredients : `;
  }else{
    pEl.textContent = `${this.name} is available only Cold and it has the following ingredients : `;
  }

  const ulEl = document.createElement('ul');
  divEl.appendChild(ulEl);
  for(let i=0; i< this.ingredients.length; i++)
  {
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = this.ingredients[i];
  }

  const imgEl = document.createElement('img');
  divEl.appendChild(imgEl);
  imgEl.setAttribute('src',this.imagePath);
};


const espresso = new Drink('espresso',['espresso'],false,true);
const latte = new Drink('latte',['espresso','milk','whipped milk'],true,true);
const mocha = new Drink('mocha',['espresso milk', 'whipped cream','chocolate syrub'],true,true);

espresso.calculatePrice(2,10);
espresso.render();

latte.calculatePrice(2,10);
latte.render();

mocha.calculatePrice(2,10);
mocha.render();


function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function addNewDrink(event){
  event.preventDefault();

  let name = event.target.name.value;
  let imgurl = event.target.imgurl.value;
  let ingredients = event.target.ingredients.value.split(',');
  // console.log(ingredients);
  let isCold = event.target.isCold.checked;
  let isHot = event.target.isHot.checked;

  let newDrink = new Drink(name, ingredients, imgurl, isCold, isHot);
  newDrink.render();

}


let drinkForm = document.getElementById("drinkForm");
drinkForm.addEventListener('submit', addNewDrink);