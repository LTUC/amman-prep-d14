
var number = 15
var number1 = 2
console.log("the value of this number is" + number)

var stringName = 'rawan'
console.log("my name is "+ stringName);
var stringNumber = '2'


// console.log("the summation"+ number + number1);
console.log("the summation", number + number1);

var result =number + number1
// console.log(result);
console.log("the summation"+ result);

// var number = 5
number = 90
console.log(number);
var res = number1 - 4
console.log(res);

var x = 1.6;

var bool = false
var y;
var nullValue = null


// data types
console.log("data type of number", typeof number);
console.log("data type of res", typeof res);
console.log("data type of x", typeof x);
console.log("data type of stringName", typeof stringName);
console.log("data type of bool", typeof bool);
console.log("data type of y", typeof y);
console.log("summation of number and stringName", number + stringName);
console.log("summation of number and stringNumber", number + parseInt(stringNumber));


// math operation
var rand = Math.random()
console.log("random random numbers", rand);

console.log("Power of number", Math.pow(number, 2));


// comparison operators
// >, <, <=, >=, ==, ===, !=

console.log(number > number1);
console.log(stringNumber <= number);
console.log(stringNumber == number);
var newVar = 2

console.log(stringNumber == newVar);
console.log(stringNumber === newVar);


// logical operator
// &&, ||, !

console.log(!bool);
console.log( !bool || (number > number1));
// console.log( (!bool || true) && false);  // T || T => T && F => False
// T || F => T

// Priority 
// (), ^, !, &&, || 

// console.log(Math.pow(2,2) >= 5);

// Between logical and comparison operators the priority goes to comparisons


// Starting with let

let firstLet = 5;   // 1- the first problem is redeclaring varibles 
console.log(firstLet);

// let firstLet = 8;
// console.log(firstLet);

firstLet = 8;
console.log(firstLet);


var firstVar = 7;
console.log(firstVar);
// var firstVar = 'rawan'
// console.log(firstVar);
firstVar = 89
console.log(firstVar);

// 2- Undefined values
var txt = "this is a var text"
let txt1 = "this is a let text"

console.log(this.txt);
console.log(this.txt1);

let newLet = 1

if (newLet % 2 == 0) {
    console.log("this is even number");
}else if (newLet % 3 == 0) {
    console.log("this is odd number");
}else if(newLet < 2){
    console.log(newLet);
}else 
console.log("nothing else");


switch (newLet % 2) {
    case 0:
        console.log("this is even number");
        break;
    case 1:
        console.log("this is odd number"); 
        break;  
    default:
        console.log("nothing"); 
        break;
}

// prompt box
// output depends on input may string mnay null
let age = prompt("Please enter your age here:", 23)
console.log(age);
console.log(typeof age);

// var emp = ""


// confirm box
// output is boolean also depends on the input(clicking)
let conf = confirm("Is this the right informatoion ?")
console.log(conf);
console.log(typeof conf);


// Alert box

let names = prompt("please enter your name ?")
alert("Welcome here "+ names)

// 3- Scoping
// global, local

var test1 = 23

if(test1 < 45){
    console.log("you can enter");
    var test2 = 90
    console.log(test2);
    let test3 = "hi"
    console.log(test3);
}else{
    console.log("you can't enter");
}
console.log(test2);
console.log(test3);
