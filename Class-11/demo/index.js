"use strict"; // Reading task

const express = require("express");
const uniData = require("./data.json"); // improting data from json file and save it in a variable
const cors = require("cors");
const axios = require("axios");
const e = require("express");

const app = express();
require("dotenv").config(); // import dotenv from node_modules

//middlewares
app.use(cors()); // who can touch the server

//Routes

// app.use((req, res, next) => {
//   if (req.query.pass == "1234") {
//     next();
//   } else {
//     next("Wrong password please try again");
//   }
// });

// localhost:3000/
app.get("/", handleHome);

// app.post("/", (req,res)=>{res.send('welcome to our server using post')});

// localhost:3000/allinfo
app.get("/allinfo", handleAll);

app.get("/allfromapi", async (req, res) => {
  let cName = req.query.c;
  let axiosResponse = await axios.get(
    `${process.env.SECRET_API}/search?country=${cName}`
  );
  res.send(axiosResponse.data);
});

// app.get("/allfromapi",allfromapiHandler) ;
// async function allfromapiHandler(){
//   let cName = req.query.c
//   let axiosResponse = await axios.get(`http://universities.hipolabs.com/search?country=${cName}`);
//   res.send(axiosResponse.data);
// }

// localhost:3000/allnames
app.get("/allnames", handleAllNames);

app.get("/sumTwo", (req, res) => {
  let userData = req.query;
  console.log(userData);
  let a = userData.first;
  let b = userData.second;
  let c = +a + +b;
  res.send(`${c}`);
});

app.get("/marvel", async (req, res) => {
  let x = await axios.get(
    `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${process.env.PK}&hash=${process.env.HK}`
  );
  res.status(200).send(x.data);
});

// localhost:3000/any other routes
// app.get("*", handleNotFoud);           // not the best practice to handle not found routes

app.use((req, res, next) => {
  res.status(404).send({
    code: 404,
    message: "Not Found",
    extra: "you can visit only home, allinfo and allnames routes ",
  });
}); // Not Found bottom level of the server

app.use((err, req, res, next) => {
  res.status(500).send({
    code: 500,
    message: "Server Error",
    ahamd: err,
  });
}); // bottom level of the server

//Handlers Functions

function handleHome(req, res) {
  console.log("user trying to reach home ");
  res.send(" welcome to our server  using get");
}

function handleAll(req, res) {
  res.send(uniData);
}

// function handleNotFoud(req, res) {
//   res.status(404).send({
//     code: 404,
//     message: "Not Found",
//     extra: "you can visit only home, allinfo and allnames routes ",
//   });
// }

function handleAllNames(req, res) {
  let newArr = [];
  for (let i = 0; i < uniData.length; i++) {
    newArr.push(uniData[i].name);
  }
  res.send(newArr);
}

// Starting the server handler

app.listen(3000, startingLog);

function startingLog(req, res) {
  console.log("Running at 3000");
}

//
// app.get('/ahmad',checkNameHnadler,handeAhmad);

// function checkNameHnadler(req,res,next){
// if(req.query.ahmad=='ahmad enshasi'){
//   next()
// }
// }
