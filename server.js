var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var url = 'mongodb+srv://heyxesha:123@cluster0-bnaj6.mongodb.net/test?retryWrites=true';
var db;

MongoClient.connect(url, function (err, database) {
  if (err) {
    return console.log(err);
  }
  
  db = database.db('Bookshelf');
  
  app.listen(3012, function () {
	console.log('App started');
  })
})

app.get('/', function (req, res) {
  db.collection('Books').find().toArray(function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(result);
  })
});
