const Sequelize = require('sequelize');
const pg = require('pg');
const connection = new Sequelize('postgres://shahutry:a5_-03OKQmFH3E5ZESa708BXFpyWKl23@stampy.db.elephantsql.com:5432/shahutry');

let Highscore = connection.define('highscore', {
  score: Sequelize.INTEGER
}, {
  timestamps: false
})

Highscore.sync();

module.exports = Highscore;
