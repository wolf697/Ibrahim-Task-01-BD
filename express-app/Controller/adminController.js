const admin = []

module.exports = {
    create : (req, res) => {
        try {
            const {username, password} = req.body;
            admin.push(req.body);
            return res.send({
                response : admin,
            });
        }catch (error) {
            return res.send({
                error: error,
            });
        }
    },  

    getAdmin:(req, res) => {
        try {
            return res.send({
                response : "get All Admin data"
            });
        }catch (error) {
            return res.send({
                error: error,
            });
        }
    },
    deleteAdmin:(req, res) => {
        try {
            return res.send({
                response : "Delete Admin data"
            });
        }catch (error) {
            return res.send({
                error: error,
            });
        }
    },
};            