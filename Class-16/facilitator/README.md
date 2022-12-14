# Class16

## Resources:
* [Components and Props](https://reactjs.org/docs/components-and-props.html)

# Class 16 Guide

The "Lecture Main Topics" section for each day can be used as a possible outline for a lecture. They're flows that have worked before, but feel free to deviate and do your own thing as fits your class.

## Overview of Today

Today's lecture will teach students the fundamentals they'll use for the rest of the week:

## Creating a react App with NPM

- Create a directory for your project or clone an empty project you created from github

```bash
mkdir project-name
```

- cd into your project

```bash
cd project-name
```

- initialize a new npm project

```bash
npm init -y
```

- install the react dependencies to your project

```bash
npm i react react-dom react-scripts
```

- Create the react folder structure

```bash
mkdir public src
```

- Create the following files

```bash
touch public/index.html src/index.js src/App.jsx
```

- Now Open up the project with VS code.

```bash
code .
```

- open up `package.json` and add the following entry in the file

```json
"scripts":{
  "start": "react-scripts start"
}
```

- if you already find it in the file, just add the start script directly

```json
  "start": "react-scripts start"
```

- Open up the `index.html` in the `public` folder. Create a basic html template and add a `div` tag with `id='root'` in the body.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

- After that open the `index.js` in the `src` folder and add the following.

```js
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
```
- To test the project run the following command

```bash
npm start
```

- If you are running the project for the first time, you will be promoted this message

```bash
> project-name@1.0.0 start
> react-scripts start

? We're unable to detect target browsers.

Would you like to add the defaults to your package.json? › (Y/n)
```

- answer with `y` for yes.

- If you set up everything according to the cheat sheet you should be seeing this in your terminal

```bash

Compiled successfully!

You can now view project-name in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.35:3000
  ```
  
## Code Examples

note put the demo here

## How do I prep for today?

- Prepare for code review. If you're nervous, find someone's code before lecture, and you can read it (and know what you'll talk about) before lecture begins.
- (put here how many demos and the names of them) the discussion of how to initialize a new project using the steps above.
- Prepare a walk through of the directory structure for this lab
- Prepare a demo of testing.

## Lecture Main Topics

What is React and why do we use it, JSX

Create react App and its structure

- explain what ReactDOM.render do.
- create element and render them without JSX syntax then with it.
- explain the starting file index.js.

Components

- Create new component.
- How to render any component in other one.

Props

- What is it.
- how do we create props and pass them.
- how to receive props and destructure them.

JSON

- What is the data and how it looks.
- How to import JSON file
- How to map over the JSON data.
- how to pass the data in other component while mapping

Debugging

- Basics of how to deal with errors, try to make one and show them how to debug it.

## What might students struggle with today?

Students are going to have a hard time with the amount of new material. Some will continue to discover later.

### Code Review Notes

Some basic code review questions:

Does it work?
What part of this is confusing?
What could make it more readable?
What could have more explanation?
What could be broken into smaller pieces?
What would make this easier for others to understand.
How could this be more performant?
Are there 'red flags' (Experience: Things you don't do often. Why did they do that?)
Are 'bad inputs' accounted for?
Are there missing test cases?
Is it documented?

I found the best code reviews consisted of the students describing their code to each other, explaining why they choose those methods, and even helping teach the subjects of the labs.

