'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const axios = require('axios');

const pg = require('pg');

const app = express();

app.use(cors());

const PORT = process.env.PORT;

const client = new pg.Client(process.env.DATABASE_URL);

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.get('/', helloWorldHandler);

app.get('/facts', AnimalFactsHandler);

app.get('/factsNum', factsNumHandler);

app.post('/addFavFact' ,jsonParser, addFavFactHandler);

app.get('/favFact', getFavFactsHandler);

app.get('/favFact/:id', getFavFactHandler);

app.put('/updateFavFact/:id', jsonParser,updateFavFactHandler);

app.delete('/deleteFavFact/:id', deleteFavFactHandler);

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

function addFavFactHandler(req, res){
    const fact = req.body;
    console.log(fact);
    const sql = `INSERT INTO favanimalfact(name, factImage, animalType, minLength, maxLength, habitat, diet, comment) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`

    const values = [fact.name, fact.image_link, fact.animal_type, fact.length_min, fact.length_max, fact.habitat, fact.diet, fact.comment];
    client.query(sql,values).then((data) => {
        res.status(201).json(data.rows);
    })
    .catch(error => {
        console.log(error);
        errorHandler(error, req,res);
    });
};

function getFavFactsHandler(req, res){

    const sql = `SELECT * FROM favanimalfact`;

    client.query(sql).then(data => {
        return res.status(200).json(data.rows);
    })
    .catch(error => {
        errorHandler(error, req,res);
    });
};

function getFavFactHandler(req,res){
    const id = req.params.id;

    const sql = `SELECT * FROM favanimalfact WHERE id = ${id}`;

    client.query(sql).then(data => {
        return res.status(200).json(data.rows);
    })
    .catch(error => {
        errorHandler(error, req,res);
    });
};

function updateFavFactHandler(req, res){
    const id = req.params.id;
    const fact = req.body;

    const sql = `UPDATE favanimalfact SET name=$1, factImage=$2, animalType=$3, minLength=$4, maxLength=$5, habitat=$6, diet=$7, comment=$8 WHERE id=${id} RETURNING *;`;
    const values = [fact.name, fact.image_link, fact.animal_type, fact.length_min, fact.length_max, fact.habitat, fact.diet, fact.comment];

    client.query(sql, values).then(data => {
        return res.status(200).json(data.rows);
        // or you can send 204 status with no content
        // return res.status(200).json(data.rows);
    }).catch( err => {
        console.log(err);
        errorHandler(err,req,res);
    });

};

function deleteFavFactHandler(req , res){
    const id = req.params.id;

    const sql = `DELETE FROM favanimalfact WHERE id=${id};`;

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