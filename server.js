require("dotenv").config(); //required for...
const express = require("express");//required for...
const app = express();//required for...
const path = require("path");//required for...
const bodyParser = require("body-parser");//required for...
const mongoose = require("mongoose");//required for...
const user = require("./model/user");
const { MongoClient, ServerApiVersion } = require("mongodb")


//custom middleware 'imports' start here
const { logger } = require("./middleware/logEvents");
const { compare } = require("bcrypt");
//custom middleware imports end here
//const { connection } = require("./middleware/sql"); I will be adding this in when I get the database running

//mongoDB init
const uri = "mongodb+srv://chcknlegwill:5gFyKJz71mHrbGPg@cluster0.fmg8jy2.mongodb.net/?retryWrites=true&w=majority" //process.env.MONGODB;
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

app.use(logger);
//^ this is much more easily read than importing the logger from /middleware

app.use(express.json());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "/")));

//users will have to login first, therefore this redirect is here,
//it will be a if, else statement soon because authentication is needed for accounts.
app.get("/", (req, res) => {
    res.status(301).redirect("/login");
});

app.get("/login", (req, res) => {
    res.status(200).sendFile("./public/html/login.html", { root: __dirname });
});//NEED to route this to the main server

app.post("/api/login", async (req, res) => {
    console.log(req.body);
    res.json({ status: 200 });
})
//^ organise these into routes as soon as its functional

app.get("/register", (req, res) => {
    res.status(200).sendFile("./public/html/register.html", { root: __dirname });
})

app.post("api/register", async (req, res) => {
    console.log(req.body, "this is from POST /api/register");
    res.json({ status: 200 });
})




//404 goes at the end of all the other requests.
app.all("*", (req, res) => {
    res.status(404).sendFile("./public/html/404.html", { root: __dirname });
});

//16:14
console.log(__dirname);

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
