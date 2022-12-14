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
3. Require dotenv and configure it 

```javascript
require('dotenv').config();
```
4. Create .env file in the top level of the project and add the port and the api key (you can get one by register and you will find your key in the profile section):

```
APIKEY=//your key
PORT=3000
```

5. Instead of reading from local JSON file you should send a get request to the [API](https://spoonacular.com/food-api/) and reformat the data in the constructor then return the response as json

```javascript
const apiKey = process.env.APIKEY;

function recipesHandler(req , res){
    let recipes = []
    let numberOfReturnedData = 10; // 1 ==> 100
    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${numberOfReturnedData}`)
    .then(result => {
        result.data.recipes.map(recipe => {
            let oneRecipe = new Recipe(recipe.id, recipe.title || '', recipe.readyInMinutes || '', recipe.summary || '', recipe.vegetarian, recipe.instructions || '', recipe.sourceUrl || '', recipe.image || '');
            recipes.push(oneRecipe);
        })
        return res.status(200).json(recipes);
    })
    .catch(error => {
        
        errorHandler(error, req,res);
    })
}

```

6. Build a function to handel errors 

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


7. The Spoonacular API is giving you the ability to search for a recipe so lets make our api do that in another end point (you will use query):

```javascript
app.get('/searchRecipes', searchRecipesHandler);


function searchRecipesHandler(req, res){
    try{
        console.log(req.query.search);
        let recipes = []
        let query = req.query.search;
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}/`)
        .then(result => {
            result.data.results.map(recipe => {
                let oneRecipe = new Recipe(recipe.id, recipe.title || '', recipe.readyInMinutes || '', recipe.summary || '', recipe.vegetarian, recipe.instructions || '', recipe.sourceUrl || '', recipe.image || '');
                recipes.push(oneRecipe);
            })
            return res.status(200).json(recipes);
        })
        .catch(error => {
            console.log(error);
            errorHandler(error, req,res);
        });

    }
    catch(error){

        errorHandler(error,req,res);
    }
}
```



8. Read the port from the .env instead of adding it directly to the listening function:

```javascript
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`listening on 3000`)
});
```