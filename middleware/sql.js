const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	user: "dbuser",
	password: "password",
	database: "my_db"
});

connection.connect();

//add query code l8r

connection.end();

// https://expressjs.com/en/guide/database-integration.html