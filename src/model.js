const db = require("./database/connection")


function getAllUsers() {
  return db.query('SELECT * FROM users').then(result => result.rows)
}
