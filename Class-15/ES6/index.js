// Promises in JavaScript are a programming construct that allows you to work with asynchronous operations in a more organized and manageable way.

console.log(1);
console.log(2);
console.log(3);

// somthing takes time
let x = new Promise((resolved, reject) => {
  setTimeout(() => {
    if (false) {
      resolved("the resolved data");
    } else {
      reject("Somthing Wrong");
    }
  }, 5000);
});

x.then((reolvedData) => {
  console.log("The resolved data recived = " + reolvedData);
},(rejectedData)=>{
  console.log("The Rejected data recived = " + rejectedData);
});

x.then((res)=>{},(rej)=>{});
x.then((res)=>{}).catch((rej)=>{});
console.log(x);
console.log(4);


//=============


function test(){
  return new Promise()
}

test().then().catch



// Destructuring Assignment: A syntax that allows you to extract values from arrays or objects into individual variables, simplifying code when working with complex data structures.

const obj = {
  name: 'mohmammad',
  age: 26
}

// const objName = obj.name;
// const objAge = obj.age;

// const { age: objAge, name: objName } = obj;

// console.log(objName, objAge)

//==================================

// const name = obj.name;
// const age = obj.age;

// const { name: name, age: age } = obj;

//===================================

const { name, age,test} = obj;

console.log(name, age,test);