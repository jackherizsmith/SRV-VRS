const db = require("../connection");

function checkUserByEmail(email) {
    return db
      .query('SELECT * FROM users WHERE email = ($1)', [email])
      .then(result => {
        if (result.rows.length > 0) {
            return true // The user exists
        } else {
            return false // The user doesnt exist
        }
    })
}

module.exports = checkUserByEmail;