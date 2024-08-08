const teacher = []

module.exports = {
    create : (req, res) => {
        try {
            const {username, password} = req.body;
            user.push(req.body);
            return res.send({
                response : teacher,
            });
        }catch (error) {
            return res.send({
                error: error,
            });
        }
    },  

    getAll:(req, res) => {
        try {
            return res.send({
                response : teacher,
            });
        }catch (error) {
            return res.send({
                error: error,
            });
        }
    }       
};   