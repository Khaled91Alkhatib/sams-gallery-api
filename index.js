const express = require('express');
const bodyParser = require('body-parser');
const { client } = require('./db/index');
const cors = require('cors');
const app = express();

// Once we require ENV, the files in the respective file will be excuted even though we wont call it within our code
const ENV = require("./environment");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/hats', (req, res) => {
  const hatsGet = "SELECT * FROM hats";
  client.query(hatsGet, (err, result) => {
    res.send(result.rows);
  });
});

app.get('/api/belts', (req, res) => {
  const beltsGet = "SELECT * FROM belts";
  client.query(beltsGet, (err, result) => {
    res.send(result.rows);
  })
})

app.get('/api/dresses', (req, res) => {
  const dressesGet = "SELECT * FROM dresses";
  client.query(dressesGet, (err, result) => {
    res.send(result.rows);
  })
})

app.listen(3002, () => {
  console.log(`Listening on port 3002.`);
});