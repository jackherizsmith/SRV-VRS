const getUser = require("./getUser");

function getPassword(username) {
    return getUser(username).then(user => user[0].password)
}

module.exports = getPassword;