# Class05

## Javascript Intro

- What is Javascript?
- What is the difference between the Interpreted and Compiled Programming Languages?

## JavaScript Popup Boxes

- What are popup boxes in JS (Alert, Prompt and Confirm boxes), and how to use them?

  - Example:

    ```javascript
    alert("This is an alert message.");

    let input = prompt("Enter your mail here : ");
    console.log("Your mail is : ", input);

    let result = confirm("your query here");
    console.log("Confirm result is : ", result);
    ```

## JavaScript Data Types

- What are all JS data types (Number, String, Boolean ..).
- Show examples for each data type such as the example below.

  - Number Example:

    ```javascript
    let num1 = 10;
    let num2 = 48299;
    let num3 = 129.6;
    let num4 = 43 + 44;
    let num5 = Math.sqrt(3);
    ```

  - String Example:

    ```javascript
    let s1 = "this is a string";
    let s2 = "this is also a string";
    let s3 = `this is, once more, a string`;
    let s4 = s1 + " " + s2; // this is a string this is also a string
    ```

    **Note: explain the string concatenation and there is a double, and single quotes and backtick**

  - Boolean Example:

    ```javascript
    let b1 = !false; // true
    let b2 = true && false; // false
    let b3 = false || true; // true
    let b4 = 123 === "456"; // false
    let b5 = 14 === 10 + 4; // true
    ```

  - Object Example:

    ```javascript
    let myObject = { first: "123", second: 456, third: true };
    myObject.first; // "123"
    myObject["first"]; // "123"


    myObject.first = 12;
    myObject["first"]; // 12
    ```

  - NULL Example:

    ```javascript
    let value = null;
    ```

    **Note: explain the NULL data type and give examples of it**

  - Undefined Example:
    ```javascript
    let myObject = { first: "123", second: 456, third: true };
    myObject.fourth; // Undefined
    ```
    **Note: explain the undefined data type and give examples of it**

## JavaScript Comparison and Logical Operators

- What is the difference between Comparison and Logical Operators?
- Why we use the Operators in programming languages.

  - Examples of Comparison Operators:

    - Equal to (==).
    - Equal value and equal type (===).
    - Not equal (!=).
    - Not equal value or not equal type (!==).
    - Greater than (>).
    - Less than (<).
    - Greater than or equal to (>=).
    - Less than or equal to (<=).

  - Examples of Logical Operators:
    - And (&&).
    - Or (||).
    - Not (!).

## Conditions in Javascript

- What are the conditions in JS and why do we use them?
- How we use the conditions.

  - Examples of IF ELSE conditions:

    ```javascript
    if (true) {
      //access this scope if true
    }

    let value1 = 12;
    if (value1 % 2 == 0) {
      console.log("Even number");
    } else {
      console.log("Odd number");
    }
    ```

    - Example on Switch Statement:

    ```javascript
    let value1 = 12;
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
    ```

    **Note: explain the cases, breaks, and the default**