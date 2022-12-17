# Class06:

## Arrays

- How to store a list of something? For example, numbers, colors, users, etc.
- There exists a special data structure named `Array`, to store ordered collections.

#### Arrays Declaration in JavaScript

- There are two syntaxes for creating an empty array:
  - `let colorsArray = new Array();`
  - `let colorsArray = [];`
- You can provide initial elements in the brackets:
  - `let colors = ["Red", "Green", "Blue"];`
- The total number of the elements in the array is its `length` property:
  - `console.log(colors.length);` -> 3
- Array elements are indexing, starting from zero.
- You can get any element by its index in square brackets:
  - `let first = colors[0] // Red`
  - `let last = colors[colors.length - 1] // Blue`
- You can update an element:
  - `colors[0] = 'Yellow'; // now ["Yellow", "Green", "Blue"]`
- You can add a new one to the array:
  - `colors[3] = 'Orange'; // now ["Yellow", "Green", "Blue", "Orange"]`
- You can also use `console.log` or `alert` to show the whole array.
  - `alert( colors );` -> Yellow,Green,Blue,Orange
- The array can store elements of any type. For example, number, string, boolean, function, and object.
  - `let arr = [ 2022, 'Irbid', true, function() { alert('Hello people'); }, { name: 'Ayyoub' }];`

#### Array Methods

- `push` appends(Add) an element to the end.
- `pop` remove and take an element from the end.
- `unshift` add the element to the beginning of the array. So that the 1st element becomes the 2nd.
- `shift` remove and take an element from the beginning. So that the 2nd element becomes the 1st.

  ```js
  // pop
  let colors = ["Red", "Green", "Blue"];
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
  ```

- Methods `push` and `unshift` can add multiple elements at once:

  ```js
  let numbers = [3];
  colors.push(4, 5);
  colors.unshift(1, 2);

  console.log(colors); // [1, 2, 3, 4, 5]
  ```

- The JavaScript method `toString()` converts an array to a string of (comma-separated) array values.

  ```js
  let arr = [1, 2, 3, 4];
  alert(arr.toString()); // 1,2,3,4
  ```

## Loops

- How to run the same code over and over again? For example, Print your name 100 times.
- Loops are a way to repeat the same code multiple times.

### The "for" statement

- A `for` loop repeats until a specified condition evaluates to `false`.

- The `for` loop has the following syntax:

  ```js
  for ([initialization]; [condition]; [final - expression]) {
    // code to be executed ...
  }
  ```

  - `initialization` -> Run before the first execution on the loop. This expression is commonly used to create counters.
  - `condition` ->Expression that is checked before the execution of every iteration.
  - `final-expression` -> Expression that is run after every iteration. Usually used to **increment** a counter. But it can be used to decrement a counter too.

- For loops are commonly used to count a certain number of iterations to repeat a statement. For example, print your name 100 times :

  ```js
  for (let i = 0; i < 100; i++) {
    alert("Your Name");
  }
  ```

- Use a `break` statement to exit the loop before the condition expression evaluates to false.
- The `continue` directive doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

  ```js
  for (let i = 1; i <= 5; i++) {
    if (i == 3) continue; // if true, skip the remaining part of the body.
    console.log(i); // 1, 2, 4, 5
  }
  ```

### The "while" statement

- The `while` loop loops through a block of code as long as a specified condition is true. It is usually used if the number of iterations is **_not known_**.
- The `while` loop has the following syntax:

  ```js
  while (condition) {
    // code to be executed ...
  }
  ```

  - If the `condition` becomes `false`, the statement within the loop stops executing and control passes to the statement following the loop.

- For Example, print in the console the number from 1 to 9:

  ```js
  var i = 1;
  while (i < 10) {
    console.log(i);
    i++; // i=i+1 same thing
  }
  ```

- Avoid infinite loops. Make sure the condition in a loop eventually becomes `false` otherwise, the loop will never terminate!

### The "Do...while" statement

- The `do...while` loop is closely related to the `while` loop. In the do `while` loop, the condition is checked at the end of the loop.
- The `do...while loop has the following syntax:

  ```js
  do {
    // code to be executed ...
  } while (condition);
  ```

  - The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
  - 
## Functions

- How to perform a similar action in many places of the code.
- Functions are one of the fundamental building blocks in JavaScript. It is a block of code designed to perform a particular task, And it is executed when "something" invokes it (calls it).
- `alert(message)`, `prompt(message, default)` and `confirm(question)` are examples of built-in functions.


### Function Declaration

- A function definition (also called a function declaration, or function statement) has the following syntax:

  ```js
  function name(parameter1, parameter2, ... parameterN) {
    // function body
  }
  ```
  - The `function` keyword goes first, then goes the `name` of the function, then a list of `parameters` between the parentheses, and finally the function body between curly braces.
  - The function can be called by its `name();`. and when a value is passed as a function parameter, it’s also called an `argument`.
  - Inside the function, the arguments (the parameters) behave as local variables.

- A function can `return` a value back into the calling code as the result.

  ```js
  // Declaration
  function sum(x, y) {
    return x + y;
  }
  // Invocation
  let result = sum(1, 2);
  alert( result ); // 3
  ```
  - When JavaScript reaches a `return` statement, the function will stop executing.

### Anonymous Function

- JavaScript allows us to define a function without any name. This unnamed function is called the anonymous function. The anonymous function must be assigned to a variable.
- Anonymous function is useful in passing callback function, creating closure, or Immediately invoking function expression.

  ```js
  const square = function(number) { return number * number };
  var x = square(4); // x gets the value 16
  ```

### what is the arrow function?

- Arrow functions are a new way to write functions in JavaScript.
- Arrow functions are always anonymous.
- Arrow functions are always **_function expressions_**.

  > Example:

  ```js
  // normal function
  function square(x) {
    return x * x;
  }

  // arrow function way 1
  const square = (x) => {
    return x * x;
  };

  // arrow function way 2
  const square = (x) => x * x;
  // if only one parameter, you can remove the `()`
  // if only one line of code, you can remove the `{}` and `return`
  ```
## Scope

- JavaScript has 3 types of scope:
  - Block scope
  - Function scope
  - Global scope

### Block scope

- Before ES6 (2015), JavaScript had only Global Scope and Function Scope. ES6 introduced two important new JavaScript keywords: `let` and `const` which provide **Block Scope**.
- Variables declared inside a `{ }` block cannot be accessed from outside the block:

  ```js
  {
    let x = 1;
  }
  // x can NOT be used here
  ```
- Variables declared with the `var` keyword can NOT have block scope.

### Local scope


- Variables declared within a JavaScript function, become `LOCAL` to the function.

  ```js
  // code here can NOT use x

  function myFunction() {
    let x = 1;
    // code here CAN use x
  }

  // code here can NOT use x
  ```

- `Local` variables are created when a function starts and deleted when the function is completed.

### Function Scope

- JavaScript has function scope: Each function creates a new scope.
- Variables defined inside a function are not accessible (visible) from outside the function.
- Variables declared with `var`, `let` and `const` are quite similar when declared inside a function.



### Global JavaScript Variables

- A variable declared outside a function, becomes `GLOBAL`.

  ```js
  let name = "Ali";
  // code here can use name

  function myFunction() {
  // code here can also use name
  }
  ```

### what is the Hoisting in js?

- Hoisting is JavaScript's default behavior of moving all declarations to the top.
- Hoisting is a JavaScript mechanism where variables and functions declared in the code are moved to the top.

> mote: Be carefully that only the declaration gets hoisted NOT the initializations

- One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

- example for Hoisting:

  ```js
  hello("Ahmad");

  function hello(name) {
    console.log("Hello " + name);
  }

  // The result of the code above is: "Hello Ahmad"
  ```

## synchronous and asynchronous functions in javascript

- Synchronous: The code is executed one after another.
  > Example:
  ```js
  let a = 1;
  let b = 2;
  let c = a + b;
  console.log(c); // 3
  ```

- Asynchronous: The code takes statements outside of the main program flow, allowing the code after the asynchronous call to be executed immediately without waiting.
- An async function is a function declared with the async keyword, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.


  ```js
  function doneAfter5Sec() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Done after 5 seconds");
      }, 5000);
    });
  }

  async function asyncCall() {
    console.log("Done directly");
    const result = await doneAfter5Sec();
    console.log(result);
    // expected output: "resolved"
  }

  asyncCall();
  ```

## Resources:

- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=ar)
- [The Modern JavaScript Tutorial](https://javascript.info/)
- [JavaScript w3schools](https://www.w3schools.com/js/default.asp)