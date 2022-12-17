# Class 09 Demo

## local storage

- What is the local storage and what is it used for?
- Which data type is used to save data to the local storage?
- key and value idea, and how to save items to the local storage using multi keys.

    `localStorage.setItem('user', 'Sara');`

- How to get items from local storage.

    `const currentUser = localStorage.getItem('user');`

- **Notes :**

  - The instructor explains what `innerHTML` concept if it is not covered before,

  - The student should be able to search for removing items and clear the local storage.

## JSON

- What is JSON?
- JSON Syntax, and data type.
- Why we should use JSON to convert data from/to javascript object when dealing with local storage.
- JavaScript functions to convert data, and how to use it with local storage.

    ```javascript

        // converting an object into a JSON string
        // JSON.stringify();
        localStorage.setItem('user', JSON.stringify({firstName : "Sara" , lastName : "Akram"}))

        // converting JSON strings into JavaScript objects
        // JSON.parse();
        const currentUser = JSON.parse(localStorage.getItem('user'))

    ```

    **Note: The instructor might mention the ability to get data on different web pages.**

## Rendering a table using javascript

- Example of building an HTML table with JavaScript and rendering it to the DOM.

## Code Examples

[demo](./demo/index.html)

## How do I prep for today?

- Prepare for code review. If you're nervous, find someone's code before the lecture, and you can read it (and know what you'll talk about) before the lecture begins.
(put here how many demos and their names of them) the discussion of how to initialize a new project using the steps above.
- Prepare a walk-through of the directory structure for this lab
- Prepare a demo of testing.

## Lecture Main Topics

- local storage.
  - What is the local storage and what is it used for?
  - Which data type is used to save data in the local storage?
  - save items for local storage.
  - get items from local storage.

- JSON
  - What is JSON?
  - JSON Syntax, and data type.
  - Why we should use JSON to convert data from/to javascript object when dealing with local storage.
  - JavaScript functions to convert data, and how to use it with local storage.


## What might students struggle with today?

Even though today's topics are light ones, but the student might have a hard time with the new technics in this lecture after getting data from local storage, and how to use this data in a way that serves the lab requirements.

## Code Review Notes

Some basic code review questions:

Does it work? What part of this is confusing? What could make it more readable? What could have more explanation? What could be broken into smaller pieces? What would make this easier for others to understand? How could this be more performant? Are there 'red flags' (Experience: Things you don't do often. Why did they do that?) Are 'bad inputs' accounted for? Are there missing test cases? Is it documented?

I found the best code reviews consisted of the students describing their code to each other, explaining why they choose those methods and even helping teach the subjects of the labs.