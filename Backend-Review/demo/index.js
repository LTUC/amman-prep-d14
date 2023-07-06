"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { PORT } = require("./config");
const client = require("./client");
// ================== Global Middlewares

app.use(cors());
app.use(express.json());

// ================== Routes Middlewares

app.use(require("./routes /general.routes"));
app.use("/fav", require("./routes /fav.routes"));

// ================== Error_Handlers Middlewares

app.use(require("./error_handlers/404"));
app.use(require("./error_handlers/500"));

client.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Working at ${PORT}`);
  });
});
