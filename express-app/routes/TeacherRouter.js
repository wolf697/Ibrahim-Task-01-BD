var routes = require ("express").Router();
const{create,deleteTeacher,getTeacher} = require("../Controller/TeacherController")
const {createTeacherSchema} = require("../validations/studentValidation")

routes.get("/get-all-users",getTeacher)
routes.post("/create-user",createTeacherSchema,create);
routes.delete("/delete-user", deleteTeacher);

module.exports = routes;