const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "..", "public", "html", "login.html"))
    
})

module.exports = router;