'use strict';

const express = require('express');

const cors = require('cors');

const data = require('./data.json');

const app = express();

app.use(cors());

app.get('/', helloWorldHandler);

app.get('/facts', AnimalFactsHandler);

app.use('*', notFoundHandler);


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

function helloWorldHandler(req , res){
    return res.status(200).send("Hello World");
}

function AnimalFactsHandler(req , res){
    let facts = []
    data.data.map(fact => {
        let oneFact = new AnimalFact(fact.id, fact.name, fact.image_link, fact.animal_type, fact.length_min, fact.length_max, fact.habitat, fact.diet);
        facts.push(oneFact);
    })

    return res.status(200).json(facts);
}

function notFoundHandler(request,response) { 
    response.status(404).send('huh????');
}

app.listen(3000, () => {
    console.log(`listening on 3000`)
})