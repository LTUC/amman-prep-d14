'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const axios = require('axios');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', helloWorldHandler);

app.get('/facts', AnimalFactsHandler);

app.get('/factsNum', factsNumHandler);

app.use('*', notFoundHandler);

app.use(errorHandler)

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

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});