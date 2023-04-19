require("dotenv").config(); //required for...
const express = require("express");//required for...
const app = express();//required for...
const path = require("path");//required for...
const mongoose = require("mongoose");//required for...
const user = require("./model/user");
const { MongoClient, ServerApiVersion } = require("mongodb");


//custom middleware 'imports' start here
const { logger } = require("./middleware/logEvents");
const { compare, compareSync } = require("bcrypt");
//custom middleware imports end here
//const { connection } = require("./middleware/sql"); I will be adding this in when I get the database running

//mongoDB init
const uri = ("mongodb+srv://chcknlegwill:5gFyKJz71mHrbGPg@cluster0.fmg8jy2.mongodb.net/?retryWrites=true&w=majority") //process.env.MONGODB;
const client = new MongoClient (uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
        
    }
});

async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
}

//mongoose.connect()

const PORT = process.env.PORT || 9000; //port server is listening on.

run().catch(console.dir);
mongoose.connect(uri)
app.use(logger);
//^ this is much more easily read than importing the logger from /middleware

app.use(express.json());


app.use(express.static(path.join(__dirname, "/")));

app.use("/", require("./routes/root.js"));
//^- very simple redirect to /login - need to change it checks JWT

app.use("/login", require("./routes/login.js"));    

app.get("/login", (req, res) => {
    res.status(200).sendFile("./public/html/login.html", { root: __dirname });
});

//app.use("/login", require("./routes/login");

//app.post("/api/login", async (req, res) => {
//    console.log(req.body);
//    res.json({ status: 200 });
//})
//^ organise these into routes as soon as its functional

//app.use("/register", require("./routes/register"));
//^use this once the app is fully working

app.get("/register", (req, res) => {
    res.status(200).sendFile("./public/html/register.html", { root: __dirname });
})

app.post("api/register", async (req, res) => {
    console.log(req.body, "this is from POST /api/register");
    res.json({ status: 200 });
})




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

console.log(__dirname);

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
    console.log(process.env.MONGO_URI);
});
