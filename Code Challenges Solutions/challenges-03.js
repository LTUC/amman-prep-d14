"use strict";

// Important:
// To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.values, Object.entries )
// Resources:
// for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// -------------------------------------------------------------------------------------------------------
//  Challenge 1:
//  Required:
//
//  Write a function that takes an object and returns the formatted text based on the provided object as the example:
// 
// Input:
//  let obj = {
//      firstName: 'Ellie',
//      lastName: 'jon',
//      age: 67,
//      hobby: 'Gaming and Sleeping'
//  }
//
//  Output: "my name is Ellie Jon I am 67 YO, and I love Gaming and Sleeping."

//  Note that:
//  1- The text template is "my name is ** ** I am ** YO, and I love **."
//  2- The first letters of the firstName and lastName should be capital letter

const objLat = (obj) => {
  return `my name is ${obj.firstName.charAt(0).toUpperCase() + obj.firstName.slice(1)} ${obj.lastName} I am ${obj.age} YO, and I love ${obj.hobby}.`;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:

// You are given an object that contains name and age of some customers.
// Write a function that returns an array of strings that follows the below structure
//
// the string format is "Customer Name :*** *** , Age :**"

// Input:
// {
//     "Romio Joliat": 35,
//     "Mario Ristrova": 39,
//     "Sofia firnando": 50,
// }
//
// Output:
// ["Customer Name :Romio Joliat , Age :35", "Customer Name :Mario Ristrova , Age :39", ... ]

const customerAndAge = (obj) => {
  const arr = [];
  for (let str in obj) {
    arr.push(`Customer Name :${str} , Age :${obj[str]}`);
  }
  return arr;
};
// -------------------------------------------------------------------------------------------------------

module.exports = {
  objLat,
  customerAndAge
};
