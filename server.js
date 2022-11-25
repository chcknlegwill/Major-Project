const { th } = require("date-fns/locale");
const express = require("express");
const app = express();
const path = require("path");
//import middleware below

const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));


app.use(express.json());

app.use(express.static(path.join(__dirname, "/")));

/* app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile("./html/index.html", { root: __dirname });\
}); */


app.get("/", (req, res) => {
    res.status(200).sendFile("./server/public/html/login.html", { root: __dirname})
});
 

/*
app.get("/*", (req, res) => {
    res.status(404).sendFile("./server/public/html/404.html", { root: __dirname })
});  // This picks up every request unless explicitly served e.g. "/"
*/
// In order to make sure the login page is served correctly I need to comment out the above code.



//  __dirname =   /home/chcknlegwill/Major-Project/server/public/html

//console.log(__dirname);
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

// cinema.bond v 0.1.0 is now live!
// ^ it was live for a few weeks but this means that I am also re-starting development on this from today
