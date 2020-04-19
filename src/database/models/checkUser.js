const db = require("../connection");

function checkUser(username) {
    console.log("in model", username)
    return db
      .query('SELECT * FROM users WHERE username = ($1)', [username])
      .then(result => {
        if (result.rows.length > 0) {
            return true // The user exists
        } else {
            return false // The user doesnt exist
        }
    })
}

module.exports = checkUser;