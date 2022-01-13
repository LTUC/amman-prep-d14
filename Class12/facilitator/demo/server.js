'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const axios = require('axios');

const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.get('/', helloWorldHandler);

app.get('/memes', memesHandler);

app.get('/memesPage/', memesPageHandler)

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
    console.log(`listening on 3000`)
});