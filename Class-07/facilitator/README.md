# Class 07 Guide

## Overview For Today

Today's lecture will teach students how to build object literals, objects created using the constructor function, and an introduction to DOM.

## Hoisting

- **Hoisting** is JavaScript's default behavior of moving declarations to the top.
- JavaScript Declarations are Hoisted.
- In JavaScript, a variable can be declared after it has been used.

- Example

    ```javascript
    console.log(number);
    number =5;
    console.log(number);
    var number;
    ```

- **let and const**
  - Variables defined with let and const are hoisted to the top of the block, but not initialized.
    Using a let variable before it is declared will result in a ReferenceError.

- Example

    ```javascript
    console.log(number); // This will result in a ReferenceError
    number =5;
    console.log(number);
    let number;
    ```
  
  - Using a const variable before it is declared, is a syntax error, so the code will simply not run.

- Example

    ```javascript
    console.log(number); // syntax error,
    number =5;
    console.log(number);
    const number;
    ```

## Object Literals

- What object is in real life, for example (a Human, Car ...).
- Object in Javascript
  - Object Definition, properties, and methods.
  - Example

    ```javascript
      let person:{
          firstName: 'Noor',
          lastName: 'Saleh',
          age:  25,
          gender: 'female',
          fullName : function() {
               return `${this.firstName} ${this.lastName}`;
          },
      };
    ```

    **Note: explain what  interpolation expressions are if it is not covered before**

  - Accessing object methods and properties.
  - Example

    ```javascript
      console.log(person.age);
      let name = person.fullName();
      console.log(name);
    ```

## Constructor Function

- What constructor is.
    The previous example is limited. It only creates single objects.
    Sometimes we need a "blueprint" for creating many objects of the same "type".
- Example:

   ```javascript
        function Person(firstName, lastName, age, gender){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age =  age;
            this.gender = gender;
        }
    ```  

## new keyword

- Objects of the same type are created by calling the constructor function with the `new` keyword
- Example:
    
   ```javascript
        let zain = new Person('Zain', 'Abdullah', 28, 'Female');
        console.log(zain);
    ```  

## Prototype Inheritance

All JavaScript objects inherit properties and methods from a prototype:

Date objects, Array objects, and Person objects inherit from Object.prototype.

- Adding methods to objects using the `prototype` property.

- Example

    ```javascript
        
    Person.prototype.fullName = function()  {
         return `${this.firstName} ${this.lastName}`;
    };
        
    ```

## DOM Tree

- What DOM is.
- The HTML DOM Tree.
- Use JavaScript to dynamically render data in HTML by `document.write()`.

- Example

    ```javascript
        
    Person.prototype.render = function()  {
         document.write( `<p> Full name is ${this.firstName} ${this.lastName} </p>`);
    };
        
    ```

## Code Examples

[slides](https://docs.google.com/presentation/d/1EFzK-kLVjU0kpvV0vDkANIT11pGwVKXVqOLdqvywHRc/edit?usp=sharing)  


[obj-constructorDemo](./demo/preDemo.js)


[demo](./.demo/../demo/index.html)

## How do I prep for today?

- Prepare for code review. If you're nervous, find someone's code before the lecture, and you can read it (and know what you'll talk about) before the lecture begins.
(put here how many demos and their names of them) the discussion of how to initialize a new project using the steps above.
- Prepare a walk-through of the directory structure for this lab
- Prepare a demo of testing.

## Lecture Main Topics

- Object Literals
  - Properties.
  - Methods.
  - How to object methods and properties.
  - `this` keyword

- Constructor Function.
  - Blueprint.
  - `new` keyword

- Prototype Inheritance.

- DOM Tree
  - What DOM is.
  - The HTML DOM Tree.
  - `document.write()`.

## What might students struggle with today?

Today's lab is a simple one, but they might have a hard time with the amount of new material.

## Code Review Notes

Some basic code review questions:

Does it work? What part of this is confusing? What could make it more readable? What could have more explanation? What could be broken into smaller pieces? What would make this easier for others to understand? How could this be more performant? Are there 'red flags' (Experience: Things you don't do often. Why did they do that?) Are 'bad inputs' accounted for? Are there missing test cases? Is it documented?

I found the best code reviews consisted of the students describing their code to each other, explaining why they choose those methods and even helping teach the subjects of the labs.