const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.send(`This API IS WORKING`);
  } catch (e) {
    next("main handler " + e);
  }
});

router.get("/unis", (req, res, next) => {
  try {
    axios
      // .get(`${require("../config").UNI_API}search?country=${req.query.cont}`)
      .get(`http://universities.hipolabs.com/search?country=${req.query.cont}`)
      .then(
        (axiosResponse) => {
          res.status(200).send(axiosResponse.data);
        },
        (axiosResponse) => {
          res.status(200).send(axiosResponse.message);
        }
      );
  } catch (e) {
    next("unis handler " + e);
  }
});


module.exports = router;
