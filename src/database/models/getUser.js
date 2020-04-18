const db = require("../connection");

function getUser(username) {
    return db
      .query('SELECT * FROM users WHERE username = ($1)', [username])
      .then(result => result.rows) // Does this reject if no user exists
      .catch(error => console.error(error))
  }

  module.exports = getUser;