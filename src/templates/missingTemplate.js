const htmlSkeleton = require("./htmlSkeleton");

function missing(req,res) {
  req.nav = /*html*/`<a href="/"><h2 class="error-subtitle">Go back home!</h2></a>`;
  req.page = /*html*/`<h1 class="error-title">Content Not Found</h1>`;
  
  return htmlSkeleton(req, res)
}

module.exports = missing;