var connection = require('../config/connection.js');



var orm = {
	selectAll: function(tableInput) {
	    var queryString = 'SELECT * FROM ??';
	    connection.query(queryString, tableInput, function(err, result) {
	      console.log(result);
	    });
	},
	insertOne: function(tableInput, colName, vals, cb){
		var queryString = 'INSERT INTO ?? (??) VALUES (?)';
	    connection.query(queryString, [tableInput, colName, vals], function(err, result) {
	      if (err) {
	        throw err;
	      }
	      cb(result);
	    });
	},
	updateOne: function(tableInput, objColVals, condition, cb){
		var queryString = 'UPDATE ?? SET ? WHERE ??';
		connection.query(queryString, [tableInput, objColVals, condition], function(err, result) {
			if (err) {
	        throw err;
	      }
	      cb(result);
	  	});
	}
};

//Export the orm object for the model (cat.js).
module.exports = orm;