'use strict';

const express = require('express');

const cors = require('cors');

const data = require('./data.json');

const app = express();

app.use(cors());

app.get('/', helloWorldHandler);

app.get('/memes', memesHandler);

app.use('*', notFoundHandler);


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
    data.data.map(meme => {
        let oneMeme = new Meme(meme.ID, meme.name, meme.image, meme.tags, meme.topText);
        memes.push(oneMeme);
    })

    return res.status(200).json(memes);
}

function notFoundHandler(request,response) { 
    response.status(404).send('huh????');
}

app.listen(3000, () => {
    console.log(`listening on 3000`)
})