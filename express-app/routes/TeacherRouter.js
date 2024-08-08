var routes = require ("express").Router();
const{create,deleteTeacher,getAll} = require("../Controller/TeacherController")

routes.get("/get-all-users",getAll);
routes.post("/create-user",create);
routes.delete("/delete-user", deleteTeacher);

module.exports = routes;