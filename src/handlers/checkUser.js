const checkUserModel = require("../database/models/checkUser")

function checkUser(req,res){
    username = req.params.username.toLowerCase();
    checkUserModel(username)
    .then(isUser => {
        const user = {isUser : isUser}
        res.send(user);
    })
}

module.exports = checkUser;