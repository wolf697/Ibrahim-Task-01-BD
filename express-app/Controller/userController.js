const users = [{
    username: "newuser1",
    password: "123456"
}];

module.exports = {
    create : (req, res) => {
        try {
            const {username,'passowrd} = req.body;
            const isUserExists = isUserExists.map({user} => 
                console.log(user);
                return res.send({
                    response: "user already exists",
                });
            }
        });
        users.push({username, passowrd});
        return res.send({
            response:{
                username,
                password,
            },
        });
    
        getAll:(req, res) => {
        try {
            return res.send({
                response : user,
            });
        }catch (error) {
            return res.send({
                error: error,
            });
        }
    },
    
    getUser:(req, res) => {
        try {
            const {username} = req.query;
            console.log("username",username);
            users.map((user) => {
                if (user.username == username) {
                    console.log("check");
                    return res.send({
                        response: user,
                    });
                }
            });
            return res.send({
                response : "user does not exist",
            });
        }catch (error) {
            return res.send({
                error: error,
            });
        }
    }       
};   