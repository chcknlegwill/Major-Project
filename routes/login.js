const express = require("express");
const router = express.Router();
const path = require("path");
<<<<<<< HEAD
const loginMiddleware = require("middleware/loginMiddleware");
=======
const bodyParser = require("body-parser");
const loginController = require("../controllers/userController")
>>>>>>> d7421b5 (v0.2.1, got routing / middleware working)

router.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "..", "public", "html", "login.html"))
    
})

<<<<<<< HEAD
router.post("/", )

=======

router.post("/", loginController.registerUser, (req, res) => {
    console.log("post req sent from routes/login")
});
>>>>>>> d7421b5 (v0.2.1, got routing / middleware working)
module.exports = router;