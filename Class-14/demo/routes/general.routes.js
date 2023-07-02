"use strict";
const express = require("express");

const Router = express.Router();

Router.get("/", (req, res) => {
  res.status(200).send(`Main Route`);
});

module.exports = Router;
