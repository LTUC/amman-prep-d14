const { Client } = require("pg");

const client = new Client(require("./config").DATABASE_URL);

module.exports = client;
