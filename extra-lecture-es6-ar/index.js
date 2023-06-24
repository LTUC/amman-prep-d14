"use strict";
const axios = require("axios");
let arr = [1, 2, 3];
let usersArr = ["mhmd", "ghufran", "zaid"];

// console.log(arr);

// test();

// const test = (x,y)=>{
// console.log('from arrow');
// }

// function test(x,y){
//   console.log('from regular');
//   this.
// }

// arrow vs function decleration
// 1 - hoisting
// 2- this. key word

//===============================================================

const user = {
  name: "mohammad",
  age: 30,
};

// const myName = user.name;
// const myAge = user.age;

// console.log(myName, myAge);

//========

// const { name: myName, age: myAge } = user;

// console.log(myName, myAge);

//========

// const { name: name, age: age } = user;

// console.log(name, age);

//========

// const { name, age, hoppy } = user;

// console.log(name, age, hoppy);

//===============================================================

// let testArr = ["t1", "t2", "t3"];
// console.log(testArr);
// let newTestArr = testArr;
// console.log(newTestArr);
// newTestArr.push("t4");
// console.log(newTestArr);
// console.log(testArr);

// let testArr = ["t1", "t2", "t3"];
// console.log(testArr);
// let newTestArr = [...testArr];
// console.log(newTestArr);
// newTestArr.push("t4");
// console.log(newTestArr);
// console.log(testArr);

//===============================================================

const human = {
  job: "SD",
  age: 30,
};

// let ali = human;
// ali.hoppy = "football";
// console.log(ali);
// console.log(human);

// let ali = { ...human };
// ali.hoppy = "football";
// console.log(ali);
// console.log(human);

// let ali = { ...human, hoppy: "basketball" };
// console.log(ali);

//==============================================================

// 1 - callbacks;
// 2 - promises;
// 3 - async;

// function mul(x, y) {
//   return x * y;
// }

// function addNum(num, fuc, one, two) {
//   return num + fuc(one, two);
// }

// //

// let status = false;

// let data = new Promise((resolved, reject) => {
//   setTimeout(() => {
//     if (status) {
//       resolved("promise resolved");
//     } else {
//       reject("rejected");
//     }
//   }, 6000);
// });

// console.log('my promise',data);

// data.then((res) => {console.log(res);}).catch((rej) => console.log(rej));
// console.log(1);
// console.log(2);
// console.log(3);

// getData();
// async function getData(){
//   let recivedData = await axios.get('https://hacker-news.firebaseio.com/v0/item/8863.json');
// console.log('Axios promise',recivedData);
// SVGFEDropShadowElementsd
// SVGAnimatedPreserveAspectRatiosdas
// MediaStreamAudioDestinationNodesad
// addEventListener
// }

// let recivedData = axios.get('https://hacker-news.firebaseio.com/v0/item/8863.json');
// console.log('Axios promise',recivedData);

// recivedData.then((x)=>{console.log(x.data)}).catch((r)=>{console.log(r)});

//===============================================================

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   sum += arr[i];
// }

// ForEach  ==> always returns undefind
// Map ==> always returns an array with the same length of the original array
// Filter ===>  always returns an array but with the same length or less
// Find

let x = arr.forEach((element) => {
  console.log(element);
});
console.log(x);

let y = arr.map((element, index, arr) => {
  console.log(element, index, arr);
  return element + 2;
});
console.log(y);

let z = arr.filter((element) => {
  return element > 2;
});
console.log(z);

let k = arr.find((element) => {
  return element == "ali";
});
console.log(k);

let j = arr.reduce((preValue,element) => {
  return preValue+element
}, 3);
console.log(j);

/* 
pre = 3 , element = 1;
pre = 4, element = 2;
pre = 6 , element = 3;
j = pre+element = 9



*/
//===============================================================

// module.exports = {
//   exportedArr: arr,
//   exportedUserArr: usersArr,
// };

// module.exports = {
//   arr: arr,
//   usersArr: usersArr,
// };

module.exports = {
  arr,
  usersArr,
};
