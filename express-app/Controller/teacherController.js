const teacher = []

module.exports = {
    create : (req, res) => {
        try {
            return res.send({
                response : "create teacher",
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
    },       
    deleteTeacher:(req, res) => {
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