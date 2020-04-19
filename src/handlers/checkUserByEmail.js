const checkUserByEmailModel = require("../database/models/checkUserByEmail")

function checkUserByEmail(req,res){
    email = req.params.email.toLowerCase();
    checkUserByEmailModel(email)
    .then(isUser => {
        const user = {isUser : isUser}
        res.send(user);
    })
}

module.exports = checkUserByEmail;