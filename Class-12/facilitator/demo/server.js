'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const axios = require('axios');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

const apiKey = process.env.APIKEY;


app.get('/', helloWorldHandler);

app.get('/recipes', recipesHandler);

app.get('/searchRecipes', searchRecipesHandler);

app.use('*', notFoundHandler);

app.use(errorHandler)

function Recipe(id, title, readyInMinutes, summary, vegetarian, instructions, sourceUrl, image) {
    this.id = id;
    this.title = title;
    this.readyInMinutes = readyInMinutes;
    this.summary = summary;
    this.vegetarian = vegetarian;
    this.instructions = instructions;
    this.sourceUrl = sourceUrl;
    this.image = image;
}

function helloWorldHandler(req, res) {
    return res.status(200).send("Hello World");
}

function recipesHandler(req, res) {
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

            errorHandler(error, req, res);
        })
}

function searchRecipesHandler(req, res) {
    try {
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
                errorHandler(error, req, res);
            });

    }
    catch (error) {

        errorHandler(error, req, res);
    }
}

function notFoundHandler(request, response) {
    response.status(404).send('huh????');
}

function errorHandler(error, req, res) {
    const err = {
        status: 500,
        message: error
    }
    res.status(500).send(err);
};

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});