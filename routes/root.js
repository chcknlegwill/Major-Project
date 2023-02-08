const express = require("express");
const router = express.Router();
const path = require("path");


router.get("^/$|/index(.html)?", (req, res) => {
    //res.sendFile("..","./public/css/index.html", { root: __dirname });
    res.sendFile(path.join(__dirname, "..", "public", "html", "index.html"));
});

console.log(__dirname)

module.exports = router;