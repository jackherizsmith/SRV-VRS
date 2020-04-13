const db = require('./database/connection')

function checkUser(username) {
  return db
    .query('SELECT * FROM users WHERE username = ($1)', [`${username}`])
    .then(result => {
      if (result.rows.length > 0) {
        return true // The user exists
      } else {
        return false // The user doesnt exist
      }
    })
}

function getAllUsers() {
  return db.query(`SELECT * FROM users`).then(result => result.rows)
}


function getUserName(username) {
  return getUser(username).then(user => user[0].username)
}

function getPassword(username) {
  return getUser(username).then(user => user[0].password)
}






// function validateUser

module.exports = {
  getAllUsers,
  getUserName,
  getPassword,
  createUser,
  getAllPostsAndUsernames,
  getTools,
  deletePost,
  createTool,
  checkUser,
}
