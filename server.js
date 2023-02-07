const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./.config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const exp = require("constraints");
const PORT = process.env.PORT || 3500;

//use custom logger
app.use(logger);

//CORS - Cross Origin Resource Sharing
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

//use static .html, .css & .js files
app.use(express.static(path.join(__dirname, "public")));


//routes used by the server:
app.use("/", require("./routes/root"));

//these are commented out because I need to "import" them to work on main server.

//app.use("/register", require("./routes/register"));
//app.use("/auth", require("./routes/auth"));
//app.use("/employees", require("./routes/api/employees"));





app.all("*", (req, res) => {
    res.status(404)
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "public", "html", "404.html"));
    } else if (req.accepts("json")) {
        res.json({error: "404 Not Found"})
    } else {
        res.type("txt").send("404 Not Found")
    }
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})









































/* 
const express = require("express");
const app = express();
const path = require("path");
const { logger } = require("./middleware/logEvents");
const exp = require("constants");
const PORT = process.env.PORT || 3500;


//const { connection } = require("./middleware/sql"); I will be adding this in when I get the database running

app.use(logger);
//^ this is much more easily read than importing the 

app.use(express.json());

app.use(express.static(path.join(__dirname, "/")));

//users will have to login first, therefore this redirect is here,
//it will be a if, else statement soon because authentication is needed for accounts.
app.get("/", (req, res) => {
    res.status(301).redirect("/login");
});

app.get("/login", (req, res) => {
    res.status(200).sendFile("./public/html/login.html", { root: __dirname });
});


//404 goes at the end of all the other requests.
app.all("*", (req, res) => {
    res.status(404).sendFile("./public/html/404.html", { root: __dirname });
});


console.log(__dirname);

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});


*/