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
3. Instead of reading from local JSON file you should send a get request to the [API](https://zoo-animal-api.herokuapp.com/) and reformat the data in the constructor then return the response as json

```javascript

function AnimalFactsHandler(req , res){
    let facts = []
    
    axios.get('https://zoo-animal-api.herokuapp.com/animals/rand/10')
    .then(result => {
        result.data.map(fact => {
            let oneFact = new AnimalFact(fact.id, fact.name, fact.image_link, fact.animal_type, fact.length_min, fact.length_max, fact.habitat, fact.diet);
            console.log(oneFact);
            facts.push(oneFact);
        })
        return res.status(200).json(facts);
    })
    .catch(error => {
        errorHandler(error, req,res);
    })
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

5. The Animal facts API is giving you the ability to control the number of returned results so lets make our api do that in another end point (you will use query):

```javascript
app.get('/factsNum', factsNumHandler);


function factsNumHandler(req, res){
    try{
        console.log(req.query.number);
        let facts = []
        let factNum = req.query.number;
        axios.get(`https://zoo-animal-api.herokuapp.com/animals/rand/${factNum}/`)
        .then(result => {
            result.data.map(fact => {
                let oneFact = new AnimalFact(fact.id, fact.name, fact.image_link, fact.animal_type, fact.length_min, fact.length_max, fact.habitat, fact.diet);
                console.log(oneFact);
                facts.push(oneFact);
            })
            return res.status(200).json(facts);
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