const express = require("express");
const path = require("path");
const registerUser2 = require("../middleware/userMiddleware")
const router = express.Router();

router.post("/register", registerUser2);
