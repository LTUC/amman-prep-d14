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
app.get('/memes', memesHandler)
function Meme(id, name, image, tag, topText){
    this.id = id;
    this.name = name;
    this.image = image;
    this.tag = tag;
    this.topText = topText;
}
function memesHandler(req,res){
    let memes = []
    data.data.map(meme => {
        let oneMeme = new Meme(meme.ID, meme.name, meme.image, meme.tags, meme.topText);
        memes.push(oneMeme);
    })

    return res.status(200).json(memes);
}
```
10. Handel `"Not Found"` end points 

```javascript
app.use('*', notFoundHandler);

function notFoundHandler(request,response) { 
    response.status(404).send('huh????');
}
```