"use strict";
const express = require("express");
const axios = require("axios");
const Router = express.Router();

Router.get("/", (req, res, next) => {
  try {
    res.status(200).send(`Home Route`);
  } catch (e) {
    next(`Main Handler : ${e}`);
  }
});


module.exports = Router;
