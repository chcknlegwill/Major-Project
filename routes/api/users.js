const express = require("express");
const router = express.Router();
// change to users const employeeController = require("../../controllers/employeesController");


router.route("/")
    .get(userController.getAllUsers)
    .post(userController.createNewUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

router.route("/:id")
    .get(userController.getUser);


module.exports = router;