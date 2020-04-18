const db = require("../connection");

function createTool(tool) {
    const categories = {
      Work : 1,
      Social : 2,
      Entertainment : 3,
      Health : 4,
      News : 5,
    };
    const values = [
      tool.user,
      categories[tool.category],
      tool.tool_name,
      tool.tool_description,
      tool.tool_link,
      tool.date
    ];
    return db
      .query('SELECT id FROM users WHERE username = ($1)', [
        tool.user.toString()
      ])
      .then(result => (values[0] = result.rows[0].id))
      .then(() => {
        return db.query(
          'INSERT INTO posts(user_id, cat_id, tool_name, tool_description, tool_link, date_added) VALUES($1, $2, $3, $4, $5, $6)',
          values,
        )
      })
  }

module.exports = createTool;