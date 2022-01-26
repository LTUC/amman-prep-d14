'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const axios = require('axios');

const pg = require('pg');

const app = express();

app.use(cors());

const PORT = process.env.PORT;

const apiKey = process.env.APIKEY;

const client = new pg.Client({
    connectionString: process.env.DATABASE_URL,
    // ssl: { rejectUnauthorized: false }
})

// const client = new pg.Client(process.env.DATABASE_URL);


var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.get('/', helloWorldHandler);

app.get('/recipes', recipesHandler);

app.get('/searchRecipes', searchRecipesHandler);

app.post('/addFavRecipe' ,jsonParser, addFavRecipeHandler);

app.get('/favRecipes', getFavRecipesHandler);

app.get('/favRecipe/:id', getFavRecipeHandler);

app.put('/updateFavRecipe/:id', jsonParser,updateFavRecipeHandler);

app.delete('/deleteFavRecipe/:id', deleteFavRecipeHandler);

app.use('*', notFoundHandler);

app.use(errorHandler)

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



function helloWorldHandler(req , res){
    return res.status(200).send("Hello World");
}

function recipesHandler(req , res){
    let recipes = []
    let numberOfReturnedData = 10; // 1 ==> 100
    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${numberOfReturnedData}`)
    .then(result => {
        result.data.recipes.map(recipe => {
            let oneRecipe = new Recipe(recipe.id, recipe.title || '', recipe.readyInMinutes || '', recipe.summary || '', recipe.vegetarian , recipe.instructions || '', recipe.sourceUrl || '', recipe.image || '');
            recipes.push(oneRecipe);
        })
        return res.status(200).json(recipes);
    })
    .catch(error => {
        
        errorHandler(error, req,res);
    })
}

function searchRecipesHandler(req, res){
    try{
        console.log(req.query.search);
        let recipes = []
        let query = req.query.search;
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}/`)
        .then(result => {
            result.data.results.map(recipe => {
                let oneRecipe = new Recipe(recipe.id, recipe.title || '', recipe.readyInMinutes || '', recipe.summary || '', recipe.vegetarian , recipe.instructions || '', recipe.sourceUrl || '', recipe.image || '');
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

function addFavRecipeHandler(req, res){
    const recipe = req.body;
    console.log(recipe);
    const sql = `INSERT INTO favRecipes(title, readyInMinutes, summary, vegetarian, instructions, sourceUrl, image, comment) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`

    const values = [recipe.title, recipe.readyInMinutes, recipe.summary, recipe.vegetarian, recipe.instructions, recipe.sourceUrl, recipe.image, recipe.comment];
    client.query(sql,values).then((data) => {
        res.status(201).json(data.rows);
    })
    .catch(error => {
        console.log(error);
        errorHandler(error, req,res);
    });
};

function getFavRecipesHandler(req, res){

    const sql = `SELECT * FROM favRecipes`;

    client.query(sql).then(data => {
        return res.status(200).json(data.rows);
    })
    .catch(error => {
        errorHandler(error, req,res);
    });
};

function getFavRecipeHandler(req,res){
    const id = req.params.id;

    const sql = `SELECT * FROM favRecipes WHERE id = ${id}`;

    client.query(sql).then(data => {
        return res.status(200).json(data.rows);
    })
    .catch(error => {
        errorHandler(error, req,res);
    });
};

function updateFavRecipeHandler(req, res){
    const id = req.params.id;
    const recipe = req.body;

    const sql = `UPDATE favRecipes SET title=$1, readyInMinutes=$2, summary=$3, vegetarian=$4, instructions=$5, sourceUrl=$6, image=$7, comment=$8 WHERE id=${id} RETURNING *;`;
    const values = [recipe.title, recipe.readyInMinutes, recipe.summary, recipe.vegetarian, recipe.instructions, recipe.sourceUrl, recipe.image, recipe.comment];

    client.query(sql, values).then(data => {
        return res.status(200).json(data.rows);
        // or you can send 204 status with no content
        // return res.status(200).json(data.rows);
    }).catch( err => {
        console.log(err);
        errorHandler(err,req,res);
    });

};

function deleteFavRecipeHandler(req , res){
    const id = req.params.id;

    const sql = `DELETE FROM favRecipes WHERE id=${id};`;

    client.query(sql).then(() => {
        return res.status(204).json({});
    })
    .catch(err => {
        errorHandler(err,req,res);
    })
};

function notFoundHandler(request,response) { 
    response.status(404).send('huh????');
}

function errorHandler(error,req,res){
    const err = {
        status: 500,
        message: error
    }
    res.status(500).send(err);
};

client.connect()
.then(()=>{
    app.listen(PORT, () =>
    console.log(`listening on ${PORT}`)
    );
})