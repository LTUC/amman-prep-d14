"use strict";
const express = require("express");

const Router = express.Router();

//localhost:3002/cars/

Router.get("/", (req, res) => {
  res.send(" get cars route");
});

//localhost:3002/cars/:id
Router.post("/:id", (req, res) => {
  res.send(" posrt cars route");
});

//localhost:3002/cars/anything
Router.put("/anything", (req, res) => {
  res.send(" posrt cars route");
});

Router.delete("/", (req, res) => {
  try {
    res.send(" posrt cars route");
  } catch (e) {
    next("Error with cars with delete Handler");
  }
});

Router.get("/getAllCars", (req, res, next) => {
  try {
    let sql = `SELECT * FROM cars`;
    client.query(sql).then((carsData) => {
      res.status(200).send(carsData.rows);
    });
  } catch (e) {
    next("Error with getAllCars Handler " + e);
  }
});

module.exports = Router;
