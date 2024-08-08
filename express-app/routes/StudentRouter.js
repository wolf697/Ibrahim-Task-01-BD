var routes = require ("express").Router();
const{create,deleteStudent,getStudent} = require("../Controller/studentController")
// const {createStudentSchema} = require("../validations/studentValidations")

routes.get("/get-all-users",getStudent)
routes.post("/create-student",create);
routes.delete("/delete-user", deleteStudent);

module.exports = routes;