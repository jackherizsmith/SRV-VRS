const db = require('../connection');

function deletePost(postId, response) {
    return db.query('DELETE FROM posts WHERE posts.id = ($1)', [postId])
    .then(() => {
      response.end();
    })
    .catch(console.log);
  }

  module.exports = deletePost;