var express = require('express');
var app = express();
var parser = require('body-parser');
var Highscores = require('./db');

app.use(parser.json());
app.use(express.static('client/build'));
app.listen(3000, console.log('Listening on 3000'));

app.get('/highscores', (req, res) => {
  Highscores.findAll()
    .then((scores) => {
      res.json(scores);
    })
})