const student = []

module.exports = {
    create : (req, res) => {
        try {

            return res.send({
                response : "Create Student",
            });
        }catch (error) {
            return res.send({
                error: error,
            });
        }
    },  

    getStudent:(req, res) => {
        try {
            return res.send({
                response : "get All Student data"
            });
        }catch (error) {
            return res.send({
                error: error,
            });
        }
    },
    deleteStudent:(req, res) => {
        try {
            return res.send({
                response : "Delete Student data"
            });
        }catch (error) {
            return res.send({
                error: error,
            });
        }
    },
};            