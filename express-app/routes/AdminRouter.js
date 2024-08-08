var routes = require ("express").Router();
const{create,deleteAdmin,getAdmin} = require("../Controller/adminController")

routes.get("/get-all-users",getAdmin)
routes.post("/create-user",create);
routes.delete("/delete-user", deleteAdmin);

module.exports = routes;