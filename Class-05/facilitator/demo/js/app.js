'use strict';

/*js Data types :
1- value Types (primitives):
a. numbers
b. string
c. symbol
d. undefined
e. Null
2- Reference Types (Objects) :
a.Objects
b.Functions
c.Arrays
*/

// numbers
var num1 = 10;
var num2 = 129.6;
var num3 = 43 + 44;
var num4 = Math.sqrt(3);
console.log(typeof num1, typeof num2, typeof num3, typeof num4);

// strings
var str = 'this is a string';
var sentence = 'my name is ';
var theName = 'Rania';
console.log(typeof str);
var allSentence = sentence + '' + theName;
console.log(allSentence);

// booleans
var bool = true;
console.log(typeof bool);

//example for null & undefined
var supervisor = null;// I do NOT have a supervisor.(No value)

var supervisor = undefined;
// I may or may not have a supervisor. I either don't know
// if I do or not, or I am choosing not to tell you. It is
// irrelevant or none of your business.(unknown if it has a value or not)


//Logical operations :
let b1 = !false; // true
let b2 = true && false; // false
let b3 = false || true; // true
let b4 = 123 === '456'; // false
let b5 = 14 === 10 + 4; // true


// popup boxes 
alert("This is alert message.");

let input = prompt("Enter your mail here : ");
console.log("Your mail is : ", input);

let result = confirm("are you Sure");
console.log("Confirm result is : ", result);

// Conditional Statement;

var value = 12;

if (value % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

var color = prompt('What is your favorite color?');

if (color.toLocaleLowerCase() == 'red') {

  console.log('red');

} else if (color.toLocaleLowerCase() == 'blue') {

  console.log('blue');
} else {
  console.log(color);
};

//switch
var value1 = 12;
switch (value1 % 2) {
  case 0:
    console.log("Even number");
    break;
  case 1:
    console.log("Odd number");
    break;
  default:
    console.log("Invalid input");

}

// combination bet conditions and popup boxes
var person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  var x = "Hello " + person + "! How are you today?";
  alert(x)
} else {
  prompt("please add a valid name ");
}
// sec example
var age = prompt("Please enter your age");
if (age <= 19) {
  alert("WooW,you are so young person!!")
} else if (age > 19 && age <= 40) {
  alert("Ooh, you are mature person")
} else {
  alert("now you wise Person !!")
}