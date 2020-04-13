const db = require('../connection');

function createTool(userEntry) {
    const values = [
      userEntry.username,
      userEntry.category,
      userEntry.tool_name,
      userEntry.tool_description,
      userEntry.tool_link,
    ]
    return db
      .query(`SELECT id FROM users WHERE username = ($1)`, [
        userEntry.username.toString(),
      ])
      .then(result => (values[0] = result.rows[0].id))
      .then(() => {
        console.log('createTool -> values[0]', values[0])
        return db.query(
          'INSERT INTO posts(user_id, category, tool_name, tool_description, tool_link) VALUES($1, $2, $3, $4, $5)',
          values,
        )
      })
  }

module.exports = createTool;