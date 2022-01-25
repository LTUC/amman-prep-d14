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
app.get('/facts', AnimalFactsHandler);
function AnimalFact(id, name, image_link, animal_type, length_min, length_max, habitat, diet){
    this.id = id;
    this.name = name;
    this.image_link = image_link;
    this.animal_type = animal_type;
    this.length_min = length_min;
    this.length_max = length_max;
    this.habitat = habitat;
    this.diet = diet;
}
function AnimalFactsHandler(req , res){
    let facts = []
    data.data.map(fact => {
        let oneFact = new AnimalFact(fact.id, fact.name, fact.image_link, fact.animal_type, fact.length_min, fact.length_max, fact.habitat, fact.diet);
        facts.push(oneFact);
    })

    return res.status(200).json(facts);
}
```
10. Handel `"Not Found"` end points 

```javascript
app.use('*', notFoundHandler);

function notFoundHandler(request,response) { 
    response.status(404).send('huh????');
}
```