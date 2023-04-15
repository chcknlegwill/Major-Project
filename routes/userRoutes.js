const express = require("express");
const router = express.Router()
//controllers go here

const userController = require(__dirname + "/controllers/userController.js");


router.post("/login", userController.login);

module.exports = router;