const getUser = require('./getUser');

function createUser(data) {
    return getUser(data.username).then(userArray => {
      if (userArray.length == 0) {
        return db.query('INSERT INTO users(username, password) VALUES($1, $2)', [
          data.username,
          data.password,
        ])
      }
    })
  }

  module.exports = createUser;