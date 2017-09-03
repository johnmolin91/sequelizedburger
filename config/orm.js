var connection = require("./connection.js");

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return.arr.toString();
}

funciton objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

var orm = {
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";"
		connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
	},
	create: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO ";
		queryString += "burgers_db";
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES "
		queryString += "("
		queryString += printQuestionMarks(vals.length);
		queryString += ") "

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	update: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE " + "burgers_db";

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

// var orm = {
// 	select: function(whatToSelect, tableInput) {
// 		var queryString = "SELECT ?? FROM ??";
// 		connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
// 			if (err) {
// 				throw err;
// 			}
// 			console.log(result);
// 		});
// 	},
// 	selectWhere: function(tableInput, colToSearch, valOfCol) {
// 		var queryString = "SELECT * FROM ?? WHERE ?? = ?";

// 		console.log(queryString);

// 		connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
// 			console.log(result);
// 		});
// 	},
// 	leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
// 		var queryString = "SELECT ?? FROM ?? AS tOne";
// 		queryString = queryString + " LEFT JOIN ?? AS tTwo";
// 		queryString = queryString + " ON tOne.?? = tTwo.??";

// 		console.log(queryString);

// 		connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(err, result){
// 			console.log(result);
// 		});
// 	}
// };

module.exports = orm;