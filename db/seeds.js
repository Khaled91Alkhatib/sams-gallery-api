require ('dotenv').config()
const ENV = require("../environment");

const { Pool } = require('pg');
const fs = require("fs");

const schemaQuery = fs.readFileSync("db/schema/01_hats.sql", {
  encoding: 'utf-8'
})
const seedQuery = fs.readFileSync("db/seeds/01_hats.sql", {
  encoding: 'utf-8'
})
console.log(seedQuery)

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
  
  // This refreshes seeds file (whenever you do this, it starts from scrach occupying from schema and seeds)
  client.query(schemaQuery, (err, res) => {
    console.log('schema res', res)

    client.query(seedQuery, (err, res) => {
      // console.log(err)
      console.log('seed res', res)
  
      client.end()
    });
  })
  // client
});


