"use strict";

const express = require("express");
const cors = require("cors");
const pg = require("pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); //parse the body from the request

const PORT = process.env.PORT;
const DB_URL = process.env.DATABASE_URL;

const client = new pg.Client(DB_URL);

app.get("/", (req, res) => {
  res.status(200).send(`Main Route`);
});

app.get("/getAllCars", (req, res) => {
  let sql = `SELECT * FROM cars`;
  client.query(sql).then((carsData) => {
    res.status(200).send(carsData.rows);
  });
});

app.get("/getOneCar", (req, res) => {
  let id = req.query.id;
  let sql = `SELECT * From cars where id=${id}`;
  client.query(sql).then((carData) => {
    res.status(200).send(carData.rows);
  });
});

app.get("/getBrands", (req, res) => {
  let sql = `SELECT brand from cars where brand`;
  client.query(sql).then((carsData) => {
    res.status(200).send(carsData.rows);
  });
});

app.post("/addCar", (req, res) => {
  let color = req.body.c;
  let brand = req.body.b;
  let model = req.body.m;
  let year = req.body.y;

  // let { c, b, m, y } = req.body;
  // client.query(sql, [b, m, y, c])

  let sql = `insert into cars(brand,model,year,color) values($1,$2,$3,$4)`;
  client.query(sql, [brand, model, year, color]).then(() => {
    res.status(201).send(`car ${brand} added to database`);
  });
});

client.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
  });
});

//CRUD SERVER

//ReST =>
// post => INSERT C
// get ==> SELECT R
// put => UPDATE  U
// delete => DELETE D
// CRUD API

//3-WAYS TO SEND DATE
/* 
1- Query string   ?qname=value&secondq=value  ==> req.query  
2- params  
3- body (only with post,put request )
*/
