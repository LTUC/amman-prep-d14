
# Class18:

## Resources: 
* [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)

# Class 18 Guide

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

Today is the right day to share the `GradleWorkflow.md` file one directory up with students.

## Code Examples

note put the demo here

## How do I prep for today?

- Prepare for code review. If you're nervous, find someone's code before lecture, and you can read it (and know what you'll talk about) before lecture begins.
- (put here how many demos and the names of them) the discussion of how to initialize a new project using the steps above.
- Prepare a walk through of the directory structure for this lab
- Prepare a demo of testing.

## Lecture Main Topics

#### Explain GET request using fetch

- Explain GET request using fetch with React hooks

```
useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(data => setTotalReactPackages(data.total));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
```
- Explain GET request using fetch with async/await
This sends the same GET request from React using fetch, but this version uses an async function and the await javascript expression to wait for the promises to return (instead of using the promise then() method as above).

```
const example=async()=> {
    // GET request using fetch with async/await
    const response = await fetch('https://api.npms.io/v2/search?q=react');
    const data = await response.json();
    this.setState({ totalReactPackages: data.total })
}

```

- Explain GET request using fetch with error handling

This sends a GET request from React to an invalid url on the npm api then assigns the error to the errorMessage component state property and logs the error to the console.

```
    // GET request using fetch with error handling
    fetch('https://api.npms.io/v2/invalid-url')
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            this.setState({ totalReactPackages: data.total })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
```
#### Explain useState() Hook 

- Explain hooks and Function Components
- Explain how to declaring a State Variable 
- Explain how to read reading State
- Explain to updating State 
- Explain How to pass state between components by using props 

```
   import React, { useState } from 'react'; 2:
   function Example() {
     const [count, setCount] = useState(0); 5:
     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>10:         Click me
        </button>
      </div>
    );
  }
```

#### Explain useEffect() Hook 

- Explain how to replicate componentDidMount with useEffect
- Explain How to correctly fetch data inside useEffect, also what is What is []

Example:

```
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(baseURL + fetchTrending);

        const data = await res.json();

        setData(data.results);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
```

#### Explain how to get data from API and render them by using map

- Explain how to using conditional rendering logical operator to avoid get undefined 
- Explain Key attribute ,why it is important and how to use it white mapping over the data
- Explain how to map over component 



#### Introduce and explain how to use useRef()

- Explain that the useRef Hook allows you to persist values between renders.

- Explain that useRef can be used to store a mutable value that does not cause a re-render when updated.

- Explain It can be used to access a DOM element directly.


### Explain to use React Bootstrap

- Install it 

- Use the components and show them an example

#### How to link frontend and backend 

Explain it by using real example 


#### Debugging

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