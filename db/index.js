const { Pool } = require('pg');
require ('dotenv').config()

const client = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

client.connect(function (err) {
  if (err) throw err;
  console.log("Client connected");
});

module.exports = { client }