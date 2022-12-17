# Class 10 Guide

The "Lecture Main Topics" section for each day can be used as a possible outline for a lecture. They're flows that have worked before but feel free to deviate and do your own thing as fits your class.

## Overview of Today

Today's lecture will teach students recursion and call stack, pass by value and by reference, and Regex and its uses.

## Recursion:
### What is Recursion:
* Recursion is the process of defining a problem (or the solution to a problem) in terms of (a simpler version of) itself. 
* In other words, Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.
* Recursion happens when a function calls itself. If you have a problem that is too complex, you can use recursion to break it down into simpler blocks.
* A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.

### Recursion vs Loop:
*  **Recursion** is a mechanism to call a function within the same function while **loop** is a control structure that allows executing a set of instructions again and again until the given condition is true.
* Unlike loops, recursion uses the *call stack*.
* Recursion needs more space complexity.

### Recursion Applications:
* Recursion simplifies solving a complex problem.
* Many math functions cannot be expressed without their use.
* Example: **Candy Crush** uses recursion to generate combinations of tiles.
* Chess.
* Also used in almost all searching algorithms.

### Recursion Example:
* Provided in the demo

## The Call Stack:
* A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions.
* Recursive functions use “the call stack”.
* When a program calls a function, that function goes on top of the call stack. 
* This is similar to a stack of books. You add things one at a time. Then, when you are ready to take something off, you always take off the top item.
* Understanding call stack is important for debugging.
* The call stack is at the heart of this recursive function.

## What is the Stack:
* Is stack a memory?
* A stack is a special area of a computer's memory that stores temporary variables created by a function. 
* In stack, variables are declared, stored, and initialized during runtime. 
* It is a temporary storage memory. When the computing task is complete, the memory of the variable will be automatically erased.

### Recursion Example Explained:
![](https://cdn-media-1.freecodecamp.org/images/1*YRkMsMPRFAt8Y9BiC0QVDg.png)

## Pass by value and Pass by reference:
* Pass by value means you are making a copy in memory of the actual parameter's value that is passed in.
* Pass by reference (also called pass by address) copy of the address of the actual parameter is stored.
* Example: 
![](https://i0.wp.com/www.realpythonproject.com/wp-content/uploads/2021/03/pass-by-reference-vs-pass-by-value-animation.gif?fit=500%2C270&ssl=1)
* Pass by reference uses less memory.
* Pass by reference: Objects and arrays
* Pass by value:  primitive values like strings, numbers, boolean

## Regex:
* Check this resource for content [Regex](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)
* use this website to demo the examples: [Regex101](https://regex101.com/)

## How do I prep for today?

- Prepare for code review. If you're nervous, find someone's code before the lecture, and you can read it (and know what you'll talk about) before the lecture begins.
- (put here how many demos and their names of them) the discussion of how to initialize a new project using the steps above.
- Prepare a walk-through of the directory structure for this lab
- Prepare a demo of testing.


## What might students struggle with today?

Students are going to have a hard time with the amount of new material. Some will continue to discover later.

### Code Review Notes

Some basic code review questions:

Does it work?
What part of this is confusing?
What could make it more readable?
What could have more explanation?
What could be broken into smaller pieces?
What would make this easier for others to understand?
How could this be more performant?
Are there 'red flags' (Experience: Things you don't do often. Why did they do that?)
Are 'bad inputs' accounted for?
Are there missing test cases?
Is it documented?

I found the best code reviews consisted of the students describing their code to each other, explaining why they choose those methods and even helping teach the subjects of the labs.