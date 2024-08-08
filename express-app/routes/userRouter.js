var routes = require ("express").Router();
const { create,getAll , getUser } = require("../Controller/userController");
const {createUserSchema, getUsername} = require("../validations/user")

routes.get("/get-all-users", getAll);
routes.post("/create-user",createUserSchema,create);
routes.get("/user-by-username", getUsername,getUser)

module.exports = routes;