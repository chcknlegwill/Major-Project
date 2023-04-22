const express = require("express");
const router = express.Router();
const path = require("path");
const loginController = require("../controllers/userController");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "login.html"))
});


router.post("/", loginController.loginUser, (req, res) => {
    console.log("post req sent from routes/login")
});

module.exports = router;