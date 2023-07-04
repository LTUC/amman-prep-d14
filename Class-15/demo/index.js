"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const carsRoutes = require("./routes/cars.routes");
const generalRoutes = require("./routes/general.routes");
const client = require("./client");
const notFoundHnadler = require("./error_handlers/404");
const InternalErrorsHnadler = require("./error_handlers/500");
const {PORT} = require("./configs");

const app = express();
app.use(cors());
app.use(express.json()); //parse the body from the request

app.use(generalRoutes);
app.use('/cars',carsRoutes);

app.use(notFoundHnadler);
app.use(InternalErrorsHnadler);

client.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
  });
});

//params ==> is a way to get data from user once try to access an endpoint
