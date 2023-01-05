const express = require("express");
const app = express()
const path = require("path");
const { logger } = require("./middleware/logEvents");

//custom logger below


//const logger = require("/")
app.use(logger);

const PORT = process.env.PORT || 3500;

app.use(express.json());

app.use(express.static(path.join(__dirname, "/")));

//users will have to login first, therefore this redirect is here,
//it will be a if, else statement soon because of authentication
app.get("/", (req, res) => {
    res.status(301).redirect("/login");
});

app.get("/login", (req, res) => {
    res.status(200).sendFile("./public/html/login.html", { root: __dirname })
});


//404 goes at the end of the requests.
app.all("*", (req, res) => {
    res.status(404).sendFile("./public/html/404.html", { root: __dirname })
})

console.log(__dirname);
app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);

});


/*
app.get("/login", (req, res) => {	res.status(200).sendFile("./server/public/html/login.html", { root: __dirname })
}); //serves users login page
*/



  // This picks up every request unless it is also served e.g. "/"


//  __dirname =   /home/chcknlegwill/Major-Project/server/public/html
