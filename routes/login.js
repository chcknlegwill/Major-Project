const express = require("express");
const router = express.Router();
const path = require("path");
const loginMiddleware = require("middleware/loginMiddleware");

router.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "..", "public", "html", "login.html"))
    
})

router.post("/", )

module.exports = router;