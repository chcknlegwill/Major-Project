const { th } = require("date-fns/locale");
const express = require("express");
const app = express();
const path = require("path");
//import middleware here (below)

const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));


app.use(express.json());

app.use(express.static(path.join(__dirname, "/server/public/")));

/* app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile("./html/index.html", { root: __dirname });
}); */

app.get("/", (req, res) => {
    res.status(200).sendFile("./server/public/html/index.html", { root: __dirname})
});


app.get("/*", (req, res) => {
    res.status(404).sendFile("./server/public/html/404.html", { root: __dirname })
}); 

// starting api usage here - I will need to server the main page for this as the 404 page is not made for it.
// note to self -> add middleware


//   /home/willthepillow/Major-Project/server/public/html

console.log(__dirname);
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));