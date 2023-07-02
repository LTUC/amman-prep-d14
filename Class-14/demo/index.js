"use strict";

const express = require("express");
const cors = require("cors");
const pg = require("pg");
require("dotenv").config();
const carsRoutes = require("./routes/cars.routes");
const generalRoutes = require("./routes/general.routes");

const app = express();
app.use(cors());
app.use(express.json()); //parse the body from the request

const PORT = process.env.PORT;
const DB_URL = process.env.DATABASE_URL;

const client = new pg.Client(DB_URL);

client.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
  });
});

app.use(generalRoutes);
// app.use("/cars", carsRoutes);
app.use(carsRoutes);

// app.get("/getAllCars", (req, res) => {
//   let sql = `SELECT * FROM cars`;
//   client.query(sql).then((carsData) => {
//     res.status(200).send(carsData.rows);
//   });
// });

app.get("/getOneCar/:id", (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * From cars where id=${id}`;
  client.query(sql).then((carData) => {
    res.status(200).send(carData.rows[0]);
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

  // {
  //   "c":"",
  //   "b":"",
  //   "m":"",
  //   "y":"",
  // }
  // let { c, b, m, y } = req.body;
  // client.query(sql, [b, m, y, c])

  let sql = `insert into cars(brand,model,year,color) values($1,$2,$3,$4)`;
  client.query(sql, [brand, model, year, color]).then(() => {
    res.status(201).send(`car ${brand} added to database`);
  });
});

app.delete("/deleteCar/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let sql = `DELETE FROM cars WHERE id =${id}`;
    let data = await client.query(sql);
    res.status(204).end();
  } catch (e) {
    next("deleteCar " + e);
  }
});

app.put("/updateCar/:id", (req, res) => {
  let { newBrand, newModel } = req.body;
  let sqlOne = `SELECT * FROM cars WHERE id=${req.params.id}`;

  client.query(sqlOne).then((carData) => {
    const { brand, color, model, year } = carData.rows[0];
    let sqlTwo = ` UPDATE cars SET brand=$1, model=$2 WHERE id=${req.params.id}`;

    client.query(sqlTwo, [`${brand} MH6`, newModel]).then((data) => {
      res.status(200).send(`Updated`);
    });
  });
});

app.use((req, res, next) => {
  res.status(404).send({
    code: 404,
    message: "Not Found",
  });
});

app.use((err, req, res, next) => {
  res.status(500).send({
    code: 500,
    message: "Internal Server Error",
    Error: err,
  });
});

//params ==> is a way to get data from user once try to access an endpoint
