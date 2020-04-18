const db = require("../connection")
const getUser = require("./getUser");

function createUser(user) {
    return getUser(user.username).then(userArray => {
      if (userArray.length == 0) {
        return db.query('INSERT INTO users(username, email, password) VALUES($1, $2, $3)', [
          user.username,
          user.email,
          user.password
        ])
      }
    })
  }

  module.exports = createUser;