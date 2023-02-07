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
