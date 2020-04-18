const db = require('../connection.js')

function getTools() {
    return db
     .query(
        `SELECT posts.*, users.username, categories.category 
        FROM posts
        INNER JOIN users ON posts.user_id = users.id
        INNER JOIN categories ON posts.cat_id = categories.id
        ORDER BY date_added DESC`,
     )
     .then(result => result.rows)
}

module.exports = getTools;