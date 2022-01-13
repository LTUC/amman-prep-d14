'use strict'; //will force the user to run this code in the strict mode 

// lets create an object => for example : a person : 

let person = {
    firstName: 'Israa',
    lastName: 'Othman',
    age: 25,
    gender: 'female'
};

// this object has properties, what about the methods ? lets add one method that will return the full name of this person 
let person2 = {
    firstName: 'Israa',
    lastName: 'Othman',
    age: 25,
    gender: 'female',
    fullName : function() {
       let name = this.firstName + this.lastName
        return name;
   }
};


// explaine the interpolation javascript ${} 
let person3 = {
    firstName: 'Israa',
    lastName: 'Othman',
    age: 25,
    gender: 'female',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
   }
};


// what if I wanan print this obj ? 
console.log(person3); // open the console and show them the output 

// what if I wanna print the full name as a string without printing the whole obj (Accessing object methods and properties.)
console.log(person3.fullName());


// what if I wanna add a new property to this obj ? (bracket notation)
person3["height"] = 158;
console.log(person3);
// and same if we wanna add a new method 

// what if I wanna change or reset a value of one of the properties ? ( dot notation )
person3.age = 26; 
console.log(person3);
console.table(person3); // to print the object in an  organized way 

// ask the students questions about what we learned till now ...... 



// *************************************** Constructor **************************** 
// what if I wanna create a group of people, you might say I can copy the person object and change the values for each one 
// but in this way I'm reapeting my code, and I'll have thousends lines of code and this is not efficient 
// to solve this problem, we have something called constructor : 
// lets take an example : 
// it is a function (it is a "blueprint" for creating many objects of the same "type".)

function Person(firstName, lastName, age, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age =  age;
    this.gender = gender;
}

// now we have the blueprint, lets create objects out of it 
// we use new keyword to create a new object : 

let ahmad = new Person("Ahmad", "Othman", 23,"male"); 
console.log(ahmad);

// what if I wanna add a method to the constructor?

Person.prototype.fullName = function()  {
    return `${this.firstName} ${this.lastName}`;
};

console.log(ahmad.fullName());




// ********************************************* DOM **************************************************

// we will create html tags using js => this thing we call it DOM 
// search on google for html dom and show the w3school result for the students and expaline the tree (the image and the code )

// go to the demo folder :) 





