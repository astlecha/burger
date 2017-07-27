var connection = require('../config/connection.js');



var orm = {
	selectAll: function(tableInput, colToSearch, valOfCol) {
	    var queryString = 'SELECT * FROM ?? WHERE ?? = ?';
	    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
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
	updateOne: function(tableInput, vals, condition, cb){
		var queryString = 'UPDATE ?? SET ? WHERE ??';
		connection.query(queryString, [tableInput, vals, condition], function(err, result) {
			if (err) {
	        throw err;
	      }
	      cb(result);
	  	});
	}
};

//Export the orm object for the model (cat.js).
module.exports = orm;