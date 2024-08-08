var routes = require ("express").Router();
const{create,deleteStudent,getStudent} = require("../Controller/studentController")
const {createStudentSchema} = require("../validations/studentValidation")

routes.get("/get-all-users",getStudent)
routes.post("/create-user",createStudentSchema,create);
routes.delete("/delete-user", deleteStudent);

module.exports = routes;