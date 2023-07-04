"use strict";
const express = require("express");
const client = require("../client");
const Router = express.Router();

//cars ==> GET
Router.get("/", async (req, res, next) => {
  try {
    console.log(req.method, req.url);
    let sql = `SELECT * FROM cars`;
    // client.query(sql).then((carsData) => {
    //   res.status(200).send(carsData.rows);
    // });
    let response = await client.query(sql);
    res.status(200).send(response.rows);
  } catch (e) {
    next(`getAllCars Handler : ${e}`);
  }
});
//cars/:id ==> GET
Router.get("/:id", (req, res, next) => {
  try {
    let id = req.params.id;
    let sql = `SELECT * From cars where id=${id}`;
    client.query(sql).then((carData) => {
      res.status(200).send(carData.rows[0]);
    });
  } catch (e) {
    next(`getOneCar Handler : ${e}`);
  }
});
//cars ==> POST
Router.post("/", (req, res, next) => {
  try {
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
  } catch (e) {
    next(`addCar Handler : ${e}`);
  }
});
//cars/:id ==> DELETE
Router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let sql = `DELETE FROM cars WHERE id =${id}`;
    let data = await client.query(sql);
    res.status(204).end();
  } catch (e) {
    next("deleteCar :" + e);
  }
});
//cars/:id ==> PUT
Router.put("/:id", (req, res, next) => {
  try {
    let { newBrand, newModel } = req.body;
    let sqlOne = `SELECT * FROM cars WHERE id=${req.params.id}`;

    client.query(sqlOne).then((carData) => {
      const { brand, color, model, year } = carData.rows[0];
      let sqlTwo = ` UPDATE cars SET brand=$1, model=$2 WHERE id=${req.params.id}`;

      client.query(sqlTwo, [`${brand} MH6`, newModel]).then((data) => {
        res.status(200).send(`Updated`);
      });
    });
  } catch (e) {
    next("updateCar :" + e);
  }
});

module.exports = Router;
