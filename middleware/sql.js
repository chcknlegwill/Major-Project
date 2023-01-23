const mysql = require("mysql");

//creates mysql connection with all the info, need to properly edit this later.
const connection = mysql.createConnection({
	host: "localhost",
	user: "dbuser",
	password: "password",
	database: "my_db"
});


module.exports = { connection }

connection.connect();

//add query code l8r

connection.end();


//need to either add this to main file or export a function that already has a connection.

// https://expressjs.com/en/guide/database-integration.html