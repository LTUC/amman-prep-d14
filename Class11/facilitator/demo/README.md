# Class 11

## **WRRC**

You can draw your WRRC with a real life example.

## **Server**

1. Start the project by running the following command:
```
npm init -y
```
2. Install the following packages:

```
npm install express cors
```

3. Create a js file called server.js on the top level of the project folder.
   
4. Require express and cors

```javascript
const express = require('express');
const cors = require('cors');
```

5. Initialize your app:

```javascript
const app = express();
```

6. Use cors

```javascript
app.use(cors());
```

7. Make your app listen to a port

```javascript
 app.listen(3000, () =>{
    console.log(`listening on 3000`)
    });
```

8. Make an end point that take a get request and return `"Hello World"` message.

```javascript
app.get('/', helloWorldHandler);

function helloWorldHandler(req, res){
   return res.status(200).send("Hello World");
}
```
9. Make an end point that take a get request and read from JSON file and return formatted data.

```javascript
const data = require('./data.json');

app.get('/recipes', recipesHandler);

function Recipe(id, title, readyInMinutes, summary, vegetarian, instructions, sourceUrl, image){
    this.id = id;
    this.title = title;
    this.readyInMinutes = readyInMinutes;
    this.summary = summary;
    this.vegetarian = vegetarian;
    this.instructions = instructions;
    this.sourceUrl = sourceUrl;
    this.image = image;
}

function recipesHandler(req , res){
    let recipes = []
    data.data.map(recipe => {
        let oneRecipe = new Recipe(recipe.id, recipe.title, recipe.readyInMinutes, recipe.summary, recipe.vegetarian, recipe.instructions, recipe.sourceUrl, recipe.image);
        recipes.push(oneRecipe);
    })

    return res.status(200).json(recipes);
}
```
10. Handel `"Not Found"` end points 

```javascript
app.use('*', notFoundHandler);

function notFoundHandler(request,response) { 
    response.status(404).send('huh????');
}
```