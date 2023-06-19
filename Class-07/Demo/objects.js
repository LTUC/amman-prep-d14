'use strict';

let britshCat = {
    
   catName : "British Shorthair",
   favFood : "Dry food mixed with wet food",
   catImage : "https://static.onecms.io/wp-content/uploads/sites/47/2020/08/05/BRITISH.SHORTHAIR-Profile.png",
   lovePlay : true,
   catPrice : 800,
   greeting: function () {
    //    console.log("hello everyone   " + britshCat.catName);
       console.log(` Welcome All to Cats world my name is ${this.catName} & my fav food is : ${this.favFood}`);
   }
}
// britshCat.catPrice = 900;
// britshCat["lovePlay"] = false;
// console.log(britshCat);
// console.log("Cat Name is : " + britshCat.catName);
// console.log("Cat Price is : " + britshCat["catPrice"])
// console.log("Cat love play ? : " + britshCat.lovePlay);
 britshCat.greeting();

let americanCat = {

    catName: "American Bobtail",
    favFood: "meat and fish",
    catImage: "https://i.pinimg.com/736x/85/57/04/8557043ac4b727236f686591bf820361--american-bobtail-bobtail-cat.jpg",
    lovePlay: true,
    catPrice: 600,
    greeting: function () {
        //    console.log("hello everyone   " + britshCat.catName);
        console.log(` Welcome All to Cats world my name is ${this.catName} & my fav food is : ${this.favFood}`);
    }


}

console.log(americanCat);

americanCat.greeting();















