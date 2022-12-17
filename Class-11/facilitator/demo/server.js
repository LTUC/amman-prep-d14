'use strict';

const express = require('express');

const cors = require('cors');

const data = require('./data.json');

const app = express();

app.use(cors());

app.get('/', helloWorldHandler);

app.get('/recipes', recipesHandler);

app.use('*', notFoundHandler);


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
    data.data.map(recipe => {
        let oneRecipe = new Recipe(recipe.id, recipe.title, recipe.readyInMinutes, recipe.summary, recipe.vegetarian, recipe.instructions, recipe.sourceUrl, recipe.image);
        recipes.push(oneRecipe);
    })

    return res.status(200).json(recipes);
}

function notFoundHandler(request, response) {
    response.status(404).send('huh????');
}

app.listen(3000, () => {
    console.log(`listening on 3000`)
})