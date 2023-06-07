'use strict'
// userName = "rawan"
// console.log(userName);

// Arrays
let user1 = "ahmad"
let user2 = "reneh"
let user3 = "haya"
let user4 = "aws"
let user5 = "farah"

// declare array
// 1-
let newArr = []

// 2-
let arr = new Array(10)

// 3- 
let arr1 = [1,3,0,"rawan", ["class 05", "class 06"]]

console.log("arr1: " , arr1);
console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr1.length-1);
console.log(arr1.length);
console.log(arr1[4][1]);

// add the end of array
console.log(arr1.push('haya'))
console.log(arr1);

// add to the begining of the array
console.log(arr1.unshift(90))
console.log(arr1);

// normal or worst case

arr1[arr1.length] = "new elements"
console.log(arr1);
arr1[20] = 23
console.log(arr1);
console.log(arr1[13]);

// remove from the end of the array
let popElement = arr1.pop()
console.log("pop elements:" +popElement)
// console.log(arr1);

// remove from the begining of the array
console.log(arr1.shift())
console.log(arr1);



let grades = [10, 10, 5]
let grades1 = [1,32,0,90,10,11,15]
let grades2 = [1,54,0,11,10,11,0]
let grades3 = [1,11,0,90,73,90,15]
// let sum = grades[0] + grades[1] + grades[2]
// console.log(sum);

// loop
// 1- for loop
// i = i + 1;
// let sum = 0
// for(let i = 0; i < grades3.length; i++){
// sum =  sum + grades[i]
// }
// console.log("summation: "+sum);

// let sum = 0
// for(let i = grades.length-1; i >= 0; i--){
// sum =  sum + grades[i]
// }
// console.log("summation: "+sum);


// 2- while 

// first example
// let i = 0;
// let sum = 0;
// while(i < grades.length){
//     sum += grades[i]
//     ++i;
// }
// console.log(sum);

//second example

// let user = prompt("Please enter you gender: ")

// while (!((user === "female" && user != "male") || (user != "female" && user === "male"))){
//      user = prompt("Please re enter you gender: ")

// }


// while(user != 'female' && user != 'male'){
//     user = prompt("Please re enter: ")
// }


// 3- third 

let variable = 10
do {
console.log("variable: "+ variable);
variable--;
}while(variable > 5) 




// Function
//  let ver = summationFunction(grades)
//  console.log(ver);
// summationFunction(grades1)
// summationFunction(grades2)
// summationFunction(grades3)

// let totalSummation = summationFunction(grades) + summationFunction(grades1) + summationFunction(grades2) + summationFunction(grades3)
// console.log("total summation: "+totalSummation);

// 1- fist type of functions

// function summationFunction(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//     sum =  sum + arr[i]
//     }
//     // console.log("summation: "+sum);
//     // console.log(newVar);
//     return sum
// }

// 2- second type of functions

const summation1 = function summationFunction1(arr){
    let sum = 0
        for(let i = 0; i < arr.length; i++){
        sum =  sum + arr[i]
        }
        return sum
}
console.log(summation1(grades))
console.log(summation1(grades1))
console.log(summation1(grades2))
console.log(summation1(grades3))

// 3- Arrow function

const arrow = (param1, param2) => {
let calculate = Math.pow(param1, param2)
return calculate
}

console.log(arrow(2,2));

