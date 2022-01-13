# Class 12

The "Lecture Main Topics" section for each day can be used as a possible outline for a lecture. They're flows that have worked before, but feel free to deviate and do your own thing as fits your class.

## Overview of Today

Today's lecture will teach students the way of applying the fundamentals that they have already thought in the beginning of the week:

## Creating a server .

- create a repo in github add .gitignore file with node .

- clone the repositry 

```bash
cd project-name
```

```
touch server.js
```

```
npm init -y
```

- install all dependencies that you need to your project 

```
npm install express dotenv cors axios 
```

- create .env file and put PORT =3001 and the keys.


  
## Code Examples

```
const axios = require('axios');

axios.get('http://webcode.me').then(resp => {

    console.log(resp.data);
});

```

####
basic setup example :

```
const express=require("express");
const app=express()
const axios=require("axios");
const cors=require("cors");
const pg=require("pg");
PORT=3002
app.use(cors());

app.listen(PORT,()=>{
console.log(`listing to the PORT ${PORT}`)
});

```

## How do I prep for today?

- Prepare for code review. If you're nervous, find someone's code before lecture, and you can read it (and know what you'll talk about) before lecture begins.
- (put here how many demos and the names of them) the discussion of how to initialize a new project using the steps above.
- Prepare a walk through of the directory structure for this lab
- Prepare a demo of testing.



## Lecture Main Topics

How to make a server side using express?

### Create server and its structure

- explain how to require express , cors , axios and why do we need them.

***Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.***

***Implementing CORS in Node.js helps you access numerous functionalities on the browser,[Go to the Support Web Site](https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/) .***


- explain some examples about routes .

```
app.get('/',(req,res)=>{
    res.send("This the Home route");
});

```

- explain what is postman and how to look up the data that carried by an endpoint .

***Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.***

- explain how to start server.js.
```
nodemon
```

```
npm start
```
note that nodemon much better because you don't have to restart your server after each change in the code.


### External API 

- explain what is External api .
- How to get the data from API using Axios.
- how to send the request with queries . 

***It is an API designed for access by a larger population as well as web developers, that includes a data thats refer to specific thing for example (weather , movies , places).***

### Env

- What is it.
- why do we need it.

***It is used to either print a list of environment variables or run another utility in an altered environment without having to modify the currently existing environment.***


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
