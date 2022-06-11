const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const client = new Pool({
  host: 'localhost',
  user: 'sams',
  database: 'samsgallery',
  password: 123,
  port: 5432
});
client.connect(function (err) {
  if (err) throw err;
  console.log("Client connected");
});

app.get('/api/hats', (req, res) => {
  const hatsGet = "SELECT * FROM hats";
  client.query(hatsGet, (err, result) => {
    res.send(result.rows);
  });
});

app.listen(3002, () => {
  console.log(`Listening on port 3002.`);
});