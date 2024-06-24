const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'postgres',
  password: '1234',
  database: 'ORM'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/data', (req, res) => {
  db.query('SELECT * FROM mytable', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.post('/data', (req, res) => {
  const data = req.body;
  db.query('INSERT INTO mytable SET ?', data, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send('Data added successfully');
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
