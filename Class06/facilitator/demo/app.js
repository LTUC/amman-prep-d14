'use strict';

let colors = ["Red", "Green", "Blue"];

// pop
alert(colors.pop()); // remove "Blue" and alert it
alert(colors); // Red, Green

// push
colors.push("Blue");
alert(colors); // Red, Green, Blue

// shift
alert(colors.shift()); // remove Red and alert it
alert(colors); // Green, Blue

// unshift
colors.unshift("Red");
alert(colors); // Red, Green, Blue





// Methods `push` and `unshift` can add multiple elements at once:
let numbers = [3];
colors.push(4, 5);
colors.unshift(1, 2);

console.log(colors); // [1, 2, 3, 4, 5]



// toString()
let arr = [1, 2, 3, 4];
alert(arr.toString()); // 1,2,3,4




// for 
for ([initialization]; [condition]; [final - expression]) {
    // code to be executed ...
}


for (let i = 0; i < 10; i++) {
    alert("Your Name");
}


// break and continue 
for (let i = 1; i <= 5; i++) {
    if (i == 3) continue; // if true, skip the remaining part of the body.
    console.log(i); // 1, 2, 4, 5
}


//while
while (condition) {
    // code to be executed ...
}

var i = 1;
while (i < 10) {
    console.log(i);
    i++; // i=i+1 same thing
}


// do while 
do {
    // code to be executed ...
  } while (condition);



// functions
function name(parameter1, parameter2, ... parameterN) {
    // function body
  }


    // Declaration
    function sum(x, y) {
        return x + y;
      }
      // Invocation
      let result = sum(1, 2);
      alert( result ); // 3

      //Anonymous
      const square = function(number) { return number * number };
      var x = square(4); // x gets the value 16


  // arrow function way 1
  const square = (x) => {
    return x * x;
  };

  const square = (x) => x * x;


  //scope
  {
    let x = 1;
  }

  //GLOBAL

  let name = "Ali";
  // code here can use name

  function myFunction() {
  // code here can also use name
  }



//Hoisting check the facilitator 
//Asynchronous check the facilitator 



