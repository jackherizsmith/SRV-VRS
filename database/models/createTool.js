const db = require('../connection');

function createTool(userEntry) {
    const categories = {
      Work : 1,
      Social : 2,
      Entertainment : 3,
      Health : 4,
      News : 5,
    };
    const values = [
      userEntry.username,
      categories[userEntry.category],
      userEntry.tool_name,
      userEntry.tool_description,
      userEntry.tool_link,
    ],
    return db
      .query(`SELECT id FROM users WHERE username = ($1)`, [
        userEntry.username.toString(),
      ])
      .then(result => (values[0] = result.rows[0].id))
      .then(() => {
        console.log('createTool -> values[0]', values[0])
        return db.query(
          'INSERT INTO posts(user_id, cat_id, tool_name, tool_description, tool_link) VALUES($1, $2, $3, $4, $5)',
          values,
        )
      })
  }

module.exports = createTool;