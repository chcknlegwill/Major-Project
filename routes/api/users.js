const express = require("express");
const router = express.Router();
// change to users const employeeController = require("../../controllers/employeesController");


router.route("/")
    .get(employeeController.getAllEmployees)
    .post(employeeController.createNewEmployee)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee);

router.route("/:id")
    .get(employeeController.getEmployee);


module.exports = router;