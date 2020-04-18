const db = require("../connection")
const getUser = require("./getUser");

function createUser(user) {
    return getUser(user.username).then(userArray => {
      if (userArray.length == 0) {
        return db.query('INSERT INTO users(username, password) VALUES($1, $2)', [
          user.username,
          user.password,
        ])
      }
    })
  }

  module.exports = createUser;