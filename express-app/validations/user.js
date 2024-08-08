const joi = require ("joi");

module.exports = {
    createUserSchema: async (req, res, next) => {
        const createUser = joi.object({
            username : joi.string().min(3).max(34).required(),
            password: joi.string()
        });
        try {
            await createUser.validateAsync(req.body);
            next();
        } catch (error) {  
            return res.send({
                error: error.message,
            });
        }
    },

    getUsername: async (req, res, next) => {
        const username = joi.object({
            username : joi.string().min(3).max(34).required(),
        });
        try {
            await username.validateAsync(req.query);
            next();
        } catch (error) {  
            return res.send({
                error: error.message,
            });
        }
    },
};
   

