const student = []

module.exports = {
    create : (req, res) => {
        try {
            const {username, password} = req.body;
            student.push(req.body);
            return res.send({
                response : student,
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