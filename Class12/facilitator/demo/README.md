# Class 12


## **Server**
You will continue building on the demo from class 11

1. Install the required packages for this demo: 
```
npm install axios dotenv
```
2. Require axios

```javascript
const axios = require('axios');
```
3. Instead of reading from local JSON file you should send a get request to the [API](http://alpha-meme-maker.herokuapp.com/) and reformat the data in the constructor then return the response as json

```javascript

function memesHandler(req , res){
    let memes = []
    
    axios.get('http://alpha-meme-maker.herokuapp.com/')
    .then(result => {
        result.data.data.map(meme => {
            let oneMeme = new Meme(meme.ID, meme.name, meme.image, meme.tags,meme.topText)
            console.log(oneMeme);
            memes.push(oneMeme);
        })
        return res.status(200).json(memes);
    })
    .catch(error => errorHandler(error,req,res))
}
```

4. Build a function to handel errors 

```javascript
app.use(errorHandler);

function errorHandler(error,req,res){
    const err = {
        status = 500,
        message = error
    }
    res.status(500).send(err);
}
```

5. The Memes API is supporting pagination so lets make our api do that in another end point (you will use query):

```javascript
app.get('/memesPage/', memesPageHandler)



function memesPageHandler(req, res){
    try{
        console.log(req.query.page);
        let memes = []
        let pageNum = req.query.page;
        axios.get(`http://alpha-meme-maker.herokuapp.com/${pageNum}`)
        .then(result => {
            result.data.data.map(meme => {
                let oneMeme = new Meme(meme.ID, meme.name, meme.image, meme.tags,meme.topText)
                console.log(oneMeme);
                memes.push(oneMeme);
            })
            return res.status(200).json(memes);
        })
        .catch(error => {
            errorHandler(error, req,res);
        });

    }
    catch(error){

        errorHandler(error,req,res);
    }
}
```

6. Require dotenv and configure it 

```javascript
require('dotenv').config();
```

7. Create .env file in the top level of the project and add the port to it:

```
PORT=3000
```

8. Read the port from the .env instead of adding it directly to the listening function:

```javascript
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`listening on 3000`)
});
```