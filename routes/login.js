const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const loginController = require("../controllers/userController")

router.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "..", "public", "html", "login.html"))
    
})


router.post("/", loginController.registerUser, (req, res) => {
    console.log("post req sent from routes/login")
});
module.exports = router;