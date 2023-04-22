const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require("../controllers/userController");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "register.html"))
})

router.post("/", userController.registerUser, (req, res) => {
    console.log("register post request in /routes/register.js")
});

//router.post("/", registerController.handleNewUser);


module.exports = router;