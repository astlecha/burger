var express = require('express');

var router = express.Router();

//Import function model
var burger = require('../models/burger.js');

//Create the app routes
router.get('/', function(req, res){
	burger.selectAll(function(data){
		var allBurgsObj = {
			burgers: data
		};
		console.log('allBurgsObj: ', allBurgsObj);
		res.render(allBurgsObj);
	});
});

// Export routes for server.js to use.
module.exports = router;