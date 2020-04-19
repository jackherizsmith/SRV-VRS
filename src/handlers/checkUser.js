const checkUserModel = require("../database/models/checkUser")

function checkUser(req,res){
    user = req.params.username;
    checkUserModel(user)
    .then(isUser => {
        const check = {isUser : isUser}
        res.send(check);
    })
}

module.exports = checkUser;