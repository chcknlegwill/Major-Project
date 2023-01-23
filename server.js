const express = require("express");
const app = express();
const path = require("path");
const { logger } = require("./middleware/logEvents");
//const { connection } = require("./middleware/sql"); I will be adding this in when I get the database running

app.use(logger);
//^ this is much more easily read than importing the 
const PORT = process.env.PORT || 3500;

app.use(express.json());

app.use(express.static(path.join(__dirname, "/")));

//users will have to login first, therefore this redirect is here,
//it will be a if, else statement soon because authentication is needed for accounts.
app.get("/", (req, res) => {
    res.status(301).redirect("/login");
});

app.get("/login", (req, res) => {
    res.status(200).sendFile("./public/html/login.html", { root: __dirname })
});


//404 goes at the end of all the other requests.
app.all("*", (req, res) => {
    res.status(404).sendFile("./public/html/404.html", { root: __dirname })
});


console.log(__dirname);

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});


//just deleted a LOT of scrap code - in dir: /Docs/scraps.txt