const joi = require ("joi");

module.exports = {
    createAdminSchema: async (req, res, next) => {
        const createUser = joi.object({
            username : joi.string().min(3).max(34).required(),
            password: joi.string()
        });
        try {
            console.log("error");
            const validate =await createUser.validateAsync(req.body);
            next();
        } catch (error) {  
            return res.send({
                error: error.message,
            });
        }
    },
};           