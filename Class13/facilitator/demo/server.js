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

app.get('/memes', memesHandler);

app.get('/memesPage/', memesPageHandler)

app.post('/addFavMeme' ,jsonParser, addFavMemeHandler)

app.get('/favmeme', getFavMemesHandler);


app.use('*', notFoundHandler);

app.use(errorHandler)

function Meme(id, name, image, tag, topText){
    this.id = id;
    this.name = name;
    this.image = image;
    this.tag = tag;
    this.topText = topText;
}



function helloWorldHandler(req , res){
    return res.status(200).send("Hello World");
}

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
    .catch(error => {
        errorHandler(error, req,res);
    })
}

function memesPageHandler(req, res){
    try{
        console.log(req.query.page);
        let memes = []
        let pageNum = req.query.page;
        axios.get(`http://alpha-meme-maker.herokuapp.com/${pageNum}/`)
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

function addFavMemeHandler(req, res){
    const meme = req.body;
    console.log(meme);
    const sql = `INSERT INTO favmeme(memeName, memeImage, tags, topText, comment) VALUES($1, $2, $3, $4, $5) RETURNING *;`

    const values = [meme.name,meme.image, meme.tags, meme.topText, meme.comment];

    client.query(sql,values).then((data) => {
        res.status(201).json(data.rows);
    })
    .catch(error => {
        errorHandler(error, req,res);
    });
};

function getFavMemesHandler(req, res){

    const sql = `SELECT * FROM favmeme`;

    client.query(sql).then(data => {
        return res.status(200).json(data.rows);
    })
    .catch(error => {
        errorHandler(error, req,res);
    });
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

client.connect()
.then(()=>{
    app.listen(PORT, () =>
    console.log(`listening on ${PORT}`)
    );
})