var routes = require ("express").Router();
const{create,deleteAdmin,getAdmin} = require("../Controller/adminController")
const {createAdminSchema} = require("../validations/adminValidation")

routes.get("/get-all-users",getAdmin)
routes.post("/create-user",createAdminSchema,create);
routes.delete("/delete-user", deleteAdmin);

module.exports = routes;