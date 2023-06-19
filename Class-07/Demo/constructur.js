'use strict';


function Cat(nameE , food , imgCat ,playCat , price) {

    this.catName = nameE;
    this.favFood = food;
    this.catImage = imgCat;
    this.lovePlay = playCat;
    this.catPrice = price;
    
      
}

Cat.prototype.greeting = function () {
    //    console.log("hello everyone   " + britshCat.catName);
    console.log(` Welcome All to Cats world my name is ${this.catName} & my fav food is : ${this.favFood}`);
}

let britshcat = new Cat("British Shorthair", "Dry food mixed with wet food", "https://static.onecms.io/wp-content/uploads/sites/47/2020/08/05/BRITISH.SHORTHAIR-Profile.png" , false ,800);
let americanCat = new Cat("American Bobtail", "meat and fish", "https://i.pinimg.com/736x/85/57/04/8557043ac4b727236f686591bf820361--american-bobtail-bobtail-cat.jpg", true, 600);

console.log(britshcat);
britshcat.greeting();
console.log(americanCat);
americanCat.greeting();
