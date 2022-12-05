const { th } = require("date-fns/locale");
const express = require("express");
const app = express();
const path = require("path");
//This is to import npm (Node Package Manager) Modules such as date-fns to  

//import middleware below

const PORT = process.env.PORT || 3500;

app.use(express.json());

app.use(express.static(path.join(__dirname, "/")));


app.get("/login", (req, res) => {
	res.status(200).sendFile("./server/public/html/login.html", { root: __dirname })
}); //serves users login page 




app.get("/*", (req, res) => {
	res.status(404).sendFile("./server/public/html/404.html", { root: __dirname })

});  // This picks up every request unless it is also served e.g. "/"


//  __dirname =   /home/chcknlegwill/Major-Project/server/public/html

console.log(__dirname);
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));