var express = require('express');
var router = express.Router();

//Chat will depend on this mainly.
var MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb://donlol:semen1@ds053251.mongolab.com:53251/heroku_9sj9h755', function(err, db){
  if (err) throw err;
  console.log("Connected to Database");

	/* GET home page. */
	router.get('/', function(req, res, next) {
	  res.render('index', { title: 'Express' });
	});

	var chatlog = db.collection("chatlog");

	router.get('/api/chat', function(req, res){ 	
	  
	    chatlog.find({}, {"msg":1, "_id":0}).sort({"date" : -1}).limit(100).toArray(function(err, chat_items){
	      "use stict";
	      if (err) {
	      		console.log("Error on query for chatlog");
	      		throw err;
	      }
	      
	      console.log("Found " + chat_items.length + "chat logs.");
	      res.send(chat_items);    
	    });
	 });

	router.post('/api/chat', function(req,res){
		"use strict";
		
		
		chatlog.insert({"msg": req.body.msg, "date": req.body.date }, function(err, inserted){
			"use strict";
			if (err) {
				console.log("Error inserting msg into Chat log");
				throw err;
			}

			console.log("Sending msg to db");
			res.end();
		});
		
	});


});
module.exports = router;
